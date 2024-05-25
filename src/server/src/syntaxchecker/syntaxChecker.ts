// syntaxChecker.ts
import  SysY2022EVisitor  from '../visitor/SysY2022EVisitor';
import { CompUnitContext, DeclContext, ConstDeclContext, BTypeContext, 
    ConstDefContext, ConstInitValContext, VarDeclContext, VarDefContext, 
    InitValContext, FuncDefContext, FuncTypeContext, FuncFParamsContext, 
    FuncFParamContext, BlockContext, BlockItemContext, StmtContext, ExpContext, 
    CondContext, LValContext, PrimaryExpContext, NumberContext, UnaryExpContext, 
    UnaryOpContext, FuncRParamsContext, FuncRParamContext, MulExpContext, 
    AddExpContext, RelExpContext, EqExpContext, LAndExpContext, LOrExpContext, 
    ConstExpContext, InitVarDefContext, UninitVarDefContext,Unary2Context, 
    ListConstInitValContext,ScalarInitValContext,ListInitvalContext,BlockStmtContext,
    IfStmt1Context,ExpAsRParamContext,StringAsRParamContext,Mul1Context,Mul2Context,
    Eq1Context,Eq2Context,LAnd1Context,LAnd2Context,LOr1Context,LOr2Context,Unary1Context,
    Unary3Context,Add1Context,Add2Context,Rel1Context,Rel2Context,PrimaryExp3Context,
    PrimaryExp2Context,PrimaryExp1Context,ReturnStmtContext,ContinueStmtContext,BreakStmtContext,
    WhileStmtContext,IfStmt2Context,ExpStmtContext,AssignmentContext,
    ScalarConstInitValContext,StructDeclContext,LambdaTypeContext,
    PrimaryExp4Context,LambdaExpContext,
    Unary4Context,LVal1Context,LVal2Context} from '../parser/SysY2022EParser';

export class SyntaxChecker extends SysY2022EVisitor<void> {  
    // 语法检查错误信息
    public errors: { message: string, start: number, stop: number, context:string,suggestion:string }[] = [];
    // 作用域栈，用于存储作用域
    // 对于function，['function',true,funcType,funcFParams],方便后续函数调用时检查
    // 对于decl，['decl',true,bType,bTypeExtend,constOrVar],方便检查变量和常量重复定义(这里其实也可以考虑类型匹配问题，但是太复杂了)
    private scopStack:Map <string,any>[] = [];
    private index:number = 0; // 作用域栈的索引,用作调试和备用

    // 创建作用域
    private createScope = (): void => {
        this.scopStack.push(new Map());
    }

    // 销毁作用域
    private destroyScope = (): void => {
        this.scopStack.pop();
    }

    // 访问compUnit节点
    visitCompUnit = (ctx: CompUnitContext): void => {
        this.createScope();
        //this.index +=1;
        this.visitChildren(ctx);
        // 检查是否存在main函数
        if (!(this.scopStack[0].has('main_func') && this.scopStack[0].get('main_func')[0] === 'function')) {
          this.errors.push({
              message: 'No main function found.',
              start: ctx.start ? ctx.start.start : 0,
              stop: ctx.stop ? ctx.stop.stop : 0,
              context: 'visitCompUnit',
              suggestion: 'Add a main function.'
          });
      }
        this.destroyScope();
        //this.index -=1;

    }

    // 访问decl节点
    visitDecl = (ctx: DeclContext): void => {
        this.visitChildren(ctx);
    }

    // 访问constDecl节点
    visitConstDecl = (ctx: ConstDeclContext): void => {
        this.visitChildren(ctx);
    }

    // 访问bType节点
    visitBType = (ctx: BTypeContext): void => {
        this.visitChildren(ctx);
    }

    // 访问constDef节点
    visitConstDef = (ctx: ConstDefContext): void => {
        const constName = ctx.ID().getText()+'_decl';
        const constNameShow = ctx.ID().getText();
        // 检查常量重复定义
        if (this.scopStack[this.scopStack.length - 1].has(constName) && this.scopStack[this.scopStack.length - 1].get(constName)[0] === 'decl'){
            this.errors.push({
                message: `Constant ${constNameShow} is already defined.`,
                start: ctx.start ? ctx.start.start : 0,
                stop: ctx.stop ? ctx.stop.stop : 0,
                context: 'visitConstDef',
                suggestion: `Rename the constant ${constNameShow} or remove the duplicate definition.`
            });
        } 
        // 检查常量是否初始化
        else if (ctx.constInitVal() === null) {
            this.errors.push({
                message: `Constant ${constNameShow} is not initialized.`,
                start: ctx.start ? ctx.start.start : 0,
                stop: ctx.stop ? ctx.stop.stop : 0,
                context: 'visitConstDef',
                suggestion: `Initialize the constant ${constNameShow}.`
            });
        }
        else {
            const constDeclCtx = ctx.parentCtx;
            // 对常量是scalar还是list进行判断
            // constDef : ID ('[' constExp ']')* '=' constInitVal;
            let bTypeExtend = '';
            const ctxText = ctx.getText();
            // 判断其中是否出现 [ ]
            if(ctxText.indexOf('[') != -1)
                {
                    bTypeExtend = 'list';
                }
            else
                {
                    bTypeExtend = 'scalar';
                }            
            //@ts-ignore
            const bType = constDeclCtx.bType().getText();
            this.scopStack[this.scopStack.length - 1].set(constName, ['decl',true,bType,bTypeExtend,'const']);
        }
        this.visitChildren(ctx);
    }

    // 访问constInitVal节点
    visitScalarConstInitVal = (ctx: ScalarConstInitValContext): void => {// 常规常量初始化
        this.visitChildren(ctx);
    }
    visitListConstInitVal = (ctx: ListConstInitValContext): void => {// 列表常量初始化
        this.visitChildren(ctx);
    }

    // 访问structDecl节点
    visitStructDecl = (ctx: StructDeclContext): void => {
        const structName = ctx.STRUCTNAME().getText()+ '_struct1';
        const structNameShow = ctx.STRUCTNAME().getText();
        // 检查是否重复定义
        if (this.scopStack[this.scopStack.length - 1].has(structName) && this.scopStack[this.scopStack.length - 1].get(structName)[0] === 'decl'){
            this.errors.push({
                message: `Struct ${structNameShow} is already defined.`,
                start: ctx.start ? ctx.start.start : 0,
                stop: ctx.stop ? ctx.stop.stop : 0,
                context: 'visitStructDecl',
                suggestion: `Rename the struct ${structNameShow} or remove the duplicate definition.`
            });
        } 
        else {
            this.scopStack[this.scopStack.length - 1].set(structName, ['decl',true,'struct','scalar','var']);
        }
        this.visitChildren(ctx);
    }

    // 访问lambdaType节点
    visitLambdaType = (ctx: LambdaTypeContext): void => {
        this.visitChildren(ctx);
    }

    // 访问varDecl节点
    visitVarDecl = (ctx: VarDeclContext): void => {
        // 提前对结构体类型的变量进行处理
        // 判断bType是否是ID类型，如果是的话，需要检查是否定义，然后是对结构体变量进行的声明
        const bType = ctx.bType();
        if(bType.STRUCTNAME() != null)
            {
                const structName = bType.STRUCTNAME().getText()+ '_struct1';
                const structNameShow = bType.STRUCTNAME().getText();
                console.log(structName);
                console.log(structNameShow);
                // 检查是否定义
                let i = this.scopStack.length - 1;
                while (i >= 0 && !(this.scopStack[i].has(structName) && this.scopStack[i].get(structName)[0] === 'decl')) {
                    i--;
                }
                if (i === -1) {
                    this.errors.push({
                        message: `Struct ${structNameShow} is not defined.`,
                        start: ctx.start ? ctx.start.start : 0,
                        stop: ctx.stop ? ctx.stop.stop : 0,
                        context: 'visitVarDecl',
                        suggestion: `Define the struct ${structNameShow}.`
                    });
                }
                // 对结构体变量进行的声明
                else
                    {
                        //@ts-ignore
                        const varName = ctx.varDef(0).getChild(0).getText()+ '_struct2';
                        console.log(varName);
                        //@ts-ignore
                        const varNameShow = ctx.varDef(0).children[0].getText();
                        console.log(varNameShow);
                        // 检查是否重复定义
                        if (this.scopStack[this.scopStack.length - 1].has(varName) && this.scopStack[this.scopStack.length - 1].get(varName)[0] === 'decl'){
                            this.errors.push({
                                message: `Variable ${varNameShow} is already defined.`,
                                start: ctx.start ? ctx.start.start : 0,
                                stop: ctx.stop ? ctx.stop.stop : 0,
                                context: 'visitVarDecl',
                                suggestion: `Rename the variable ${varNameShow} or remove the duplicate definition.`
                            });
                        } 
                        else {
                            this.scopStack[this.scopStack.length - 1].set(varName, ['decl',true,'struct','scalar','var']);
                        }
                    }
            }

        else
        {
            this.visitChildren(ctx);
        }
        //this.visitChildren(ctx);
    }

    // 访问varDef节点
    visitUninitVarDef = (ctx: UninitVarDefContext): void => {// 未初始化变量定义
        const varName = ctx.ID().getText()+ '_decl';
        const varNameShow = ctx.ID().getText();
        if (this.scopStack[this.scopStack.length - 1].has(varName) && this.scopStack[this.scopStack.length - 1].get(varName)[0] === 'decl'){
            this.errors.push({
                message: `Variable ${varNameShow} is already defined.`,
                start: ctx.start ? ctx.start.start : 0,
                stop: ctx.stop ? ctx.stop.stop : 0,
                context: 'visitUninitVarDef',
                suggestion: `Rename the variable ${varNameShow} or remove the duplicate definition.`
            });
        } else {
            let bTypeExtend = '';
            const ctxText = ctx.getText();
            // 判断其中是否出现 [ ]
            if(ctxText.indexOf('[') != -1)
                {
                    bTypeExtend = 'list';
                }
            else
                {
                    bTypeExtend = 'scalar';
                }

            //@ts-ignore
            //const bType = ctx.parentCtx.bType().getText();
            const bType = "int"
            this.scopStack[this.scopStack.length - 1].set(varName, ['decl',true,bType,bTypeExtend,'var']);
                
        }
        this.visitChildren(ctx);
    }
    visitInitVarDef = (ctx: InitVarDefContext): void => {// 初始化变量定义
        const varName = ctx.ID().getText()+ '_decl';
        const varNameShow = ctx.ID().getText();
        if (this.scopStack[this.scopStack.length - 1].has(varName) && this.scopStack[this.scopStack.length - 1].get(varName)[0] === 'decl'){
            this.errors.push({
                message: `Variable ${varNameShow} is already defined.`,
                start: ctx.start ? ctx.start.start : 0,
                stop: ctx.stop ? ctx.stop.stop : 0,
                context: 'visitInitVarDef',
                suggestion: `Rename the variable ${varNameShow} or remove the duplicate definition.`
            });
        } else {
            let bTypeExtend = '';
            const ctxText = ctx.getText();
            // 判断其中是否出现 [ ]
            if(ctxText.indexOf('[') != -1)
                {
                    bTypeExtend = 'list';
                }
            else
                {
                    bTypeExtend = 'scalar';
                }
            //@ts-ignore
            const bType = ctx.parentCtx.bType().getText();
            this.scopStack[this.scopStack.length - 1].set(varName, ['decl',true,bType,bTypeExtend,'var']);
        }
        this.visitChildren(ctx);
    }

    // 访问initVal节点
    visitScalarInitVal = (ctx: ScalarInitValContext): void => {// 常规变量初始化
        this.visitChildren(ctx);
    }
    visitListInitval = (ctx: ListInitvalContext): void => {// 列表变量初始化
        this.visitChildren(ctx);
    }

    // 访问funcDef节点
    visitFuncDef = (ctx: FuncDefContext): void => {
      // 函数名
      const funcName = ctx.ID().getText()+'_func';
      const funcNameShow = ctx.ID().getText();
      // 函数类型
      const funcType = ctx.funcType().getText();
      // 函数参数
      const funcFParams = ctx.funcFParams();
      // 检查函数重复定义
      if (this.scopStack[this.scopStack.length - 1].has(funcName) && this.scopStack[this.scopStack.length - 1].get(funcName)[0] === 'function'){
          this.errors.push({
              message: `Function ${funcNameShow} is already defined.`,
              start: ctx.start ? ctx.start.start : 0,
              stop: ctx.stop ? ctx.stop.stop : 0,
              context: 'visitFuncDef',
              suggestion: `Rename the function ${funcNameShow} or remove the duplicate definition.`
          });
      } 
      else {
          this.scopStack[this.scopStack.length - 1].set(funcName, ['function',true,funcType,funcFParams]);
      }
      this.createScope();
      //this.index +=1;
      this.visitChildren(ctx);
      this.destroyScope();
      //this.index -=1;
    }

    // 访问funcType节点
    visitFuncType = (ctx: FuncTypeContext): void => {
        this.visitChildren(ctx);
    }

    // 访问funcFParams节点
    visitFuncFParams = (ctx: FuncFParamsContext): void => {
        // 将参数加入作用域
        const funcFParamList = ctx.funcFParam_list();
        if(funcFParamList != null)
            {
                for(let i = 0;i<funcFParamList.length;i++)
                    {
                        const funcFParam = funcFParamList[i];
                        const funcFParamName = funcFParam.ID().getText()+ '_decl';
                        const funcFParamType = funcFParam.bType().getText();
                        let bTypeExtend = '';
                        const ctxText = funcFParam.getText();
                        // 判断其中是否出现 [ ]
                        if(ctxText.indexOf('[') != -1)
                            {
                                bTypeExtend = 'list';
                            }
                        else
                            {
                                bTypeExtend = 'scalar';
                            }
                        this.scopStack[this.scopStack.length - 1].set(funcFParamName, ['decl',true,funcFParamType,bTypeExtend,'var']);
                    }
            }
        this.visitChildren(ctx);
    }

    // 访问funcFParam节点
    visitFuncFParam = (ctx: FuncFParamContext): void => {
        this.visitChildren(ctx);
    }

    // 访问block节点
    visitBlock = (ctx: BlockContext): void => {
        this.createScope();
        //this.index +=1;
        this.visitChildren(ctx);
        this.destroyScope();
        //this.index -=1;
    }

    // 访问blockItem节点
    visitBlockItem = (ctx: BlockItemContext): void => {
        this.visitChildren(ctx);
    }

    // 访问stmt节点
    visitAssignment = (ctx: AssignmentContext): void => {// 赋值语句
        this.visitChildren(ctx);
    }
    visitExpStmt = (ctx: ExpStmtContext): void => {// 表达式语句
        this.visitChildren(ctx);
    }
    visitBlockStmt = (ctx: BlockStmtContext): void =>{// 复合语句
        this.visitChildren(ctx);
    }
    visitIfStmt1 = (ctx: IfStmt1Context): void =>{// if语句1
        this.visitChildren(ctx);
    }
    visitIfStmt2 = (ctx: IfStmt2Context): void =>{// if语句2
        this.visitChildren(ctx);
    }
    visitWhileStmt = (ctx: WhileStmtContext): void =>{// while语句
        this.visitChildren(ctx);
    }
    visitBreakStmt = (ctx: BreakStmtContext): void =>{// break语句
        this.visitChildren(ctx);
    }
    visitContinueStmt = (ctx: ContinueStmtContext): void =>{// continue语句
        this.visitChildren(ctx);
    }
    visitReturnStmt = (ctx: ReturnStmtContext): void =>{// return语句
    /*  

        // 检查return 对应的内容是否已经定义，借助scopStack进行检查
        const returnName = ctx.exp().getText()+ '_decl';
        const returnNameShow = ctx.exp().getText();
        let i = this.scopStack.length - 1;
        while (i >= 0 && !(this.scopStack[i].has(returnName) && this.scopStack[i].get(returnName)[0] === 'decl')) {
            i--;
        }
        if (i === -1) {
            this.errors.push({
                message: `Return value ${returnNameShow} is not defined.`,
                start: ctx.start ? ctx.start.start : 0,
                stop: ctx.stop ? ctx.stop.stop : 0,
                context: 'visitReturnStmt',
                suggestion: `Define the return value ${returnNameShow}.`
            });
        }

        //@ts-ignore
        const stmtCtx = ctx.parentCtx.parentCtx.parentCtx;
        //@ts-ignore
        const funcType = stmtCtx.funcType().getText(); */

        this.visitChildren(ctx);
    }

    // 访问exp节点
    visitExp = (ctx: ExpContext): void => {
        this.visitChildren(ctx);
    }

    // 访问cond节点
    visitCond = (ctx: CondContext): void => {
        this.visitChildren(ctx);
    }

    // 访问lVal节点
    visitLVal1 = (ctx: LVal1Context): void => {
        // 检查是否已经被定义，利用scopStack进行检查
        const lValName = ctx.ID().getText()+ '_decl';
        const lValNameShow = ctx.ID().getText();
        console.log(lValName);
        console.log(lValNameShow);
        let i = this.scopStack.length - 1;
        while (i >= 0 && !(this.scopStack[i].has(lValName) && this.scopStack[i].get(lValName)[0] === 'decl')) {
            i--;
        }
        if (i === -1) {
            this.errors.push({
                message: `LeftValue ${lValNameShow} is not defined.`,
                start: ctx.start ? ctx.start.start : 0,
                stop: ctx.stop ? ctx.stop.stop : 0,
                context: 'visitLVal',
                suggestion: `Define the LeftValue ${lValNameShow}.`
            });
        }
        // 对于const不能进行赋值
        else if(this.scopStack[i].get(lValName)[4] === 'const')
            {
                this.errors.push({
                    message: `LeftValue ${lValNameShow} is a constant and cannot be assigned.`,
                    start: ctx.start ? ctx.start.start : 0,
                    stop: ctx.stop ? ctx.stop.stop : 0,
                    context: 'visitLVal',
                    suggestion: `Change the LeftValue ${lValNameShow} to a variable.`
                });
            }
        this.visitChildren(ctx);
    }
    visitLVal2 = (ctx: LVal2Context): void => {
        // 这里应该是结构体的成员访问,需要检查结构体和成员是否定义
        const structName = ctx.ID(0).getText()+ '_struct2';
        const structNameShow = ctx.ID(0).getText();
        console.log(structName);
        console.log(structNameShow);
        // 检查结构体变量是否定义
        let i = this.scopStack.length - 1;
        while (i >= 0 && !(this.scopStack[i].has(structName) && this.scopStack[i].get(structName)[0] === 'decl')) {
            i--;
        }
        if (i === -1) {
            this.errors.push({
                // 结构体变量未定义
                message: `Struct variable ${structNameShow} is not defined.`,
                start: ctx.start ? ctx.start.start : 0,
                stop: ctx.stop ? ctx.stop.stop : 0,
                context: 'visitLVal',
                suggestion: `Define the struct variable ${structNameShow}.`
            });
        }
        // 检查结构体成员是否定义
        const structMemberName = ctx.ID(1).getText()+ '_decl';
        const structMemberNameShow = ctx.ID(1).getText();
        console.log(structMemberName);
        console.log(structMemberNameShow);
        let j = this.scopStack.length - 1;
        while (j >= 0 && !(this.scopStack[j].has(structMemberName) && this.scopStack[j].get(structMemberName)[0] === 'decl')) {
            j--;
        }
        if (j === -1) {
            this.errors.push({
                // 结构体成员未定义
                message: `Struct member ${structMemberNameShow} is not defined.`,
                start: ctx.start ? ctx.start.start : 0,
                stop: ctx.stop ? ctx.stop.stop : 0,
                context: 'visitLVal',
                suggestion: `Define the struct member ${structMemberNameShow}.`
            });
        }

        this.visitChildren(ctx);
    }

    // 访问primaryExp节点
    visitPrimaryExp1 = (ctx: PrimaryExp1Context): void => {// 基础表达式1
        this.visitChildren(ctx);
    }
    visitPrimaryExp2 = (ctx: PrimaryExp2Context): void => {// 基础表达式2 左值
        this.visitChildren(ctx);
    }
    visitPrimaryExp3 = (ctx: PrimaryExp3Context): void => {// 基础表达式3
        this.visitChildren(ctx);
    }
    visitPrimaryExp4 = (ctx: PrimaryExp4Context):void =>{// 基础表达式4 lambda表达式
        this.createScope();
        this.visitChildren(ctx);
        this.destroyScope();
    }

    // 访问lambdaExp节点
    visitLambdaExp = (ctx: LambdaExpContext): void => {
        this.visitChildren(ctx);
    }


    // 访问number节点
    visitNumber = (ctx: NumberContext): void => {
        this.visitChildren(ctx);
    }

    // 访问unaryExp节点
    visitUnary1  =(ctx: Unary1Context): void =>{// 一元表达式1
        this.visitChildren(ctx);
    }
    visitUnary2 = (ctx: Unary2Context): void =>{// 一元表达式2(函数调用)
        // 检查函数是否定义
        const funcName = ctx.ID().getText()+ '_func';
        const funcNameShow = ctx.ID().getText();
        // 考虑作用域的嵌套
        let i = this.scopStack.length - 1;
        while (i >= 0 && !(this.scopStack[i].has(funcName) && this.scopStack[i].get(funcName)[0] === 'function')) {
            i--;
        }
        if (i === -1) {
            this.errors.push({
                message: `Function ${funcNameShow} is not defined.`,
                start: ctx.start ? ctx.start.start : 0,
                stop: ctx.stop ? ctx.stop.stop : 0,
                context: 'visitUnary2',
                suggestion: `Define the function ${funcNameShow}.`
            });
        }
        // 检查函数参数个数和参数类型是否匹配
        else {
            const funcFParams = this.scopStack[i].get(funcName)[3];
            const funcRParams = ctx.funcRParams();
            // 形参数量
            let funcFParamsNum = 0;
            if(funcFParams == null || funcFParams.funcFParam_list() == null)
                {
                    funcFParamsNum = 0;
                }
            else
                {
                    funcFParamsNum = funcFParams.funcFParam_list().length;
                }
            // 实参数量
            let funcRParamsNum = 0;
            if(funcRParams == null ||funcRParams.funcRParam_list() == null)
                {
                    funcRParamsNum = 0;
                }
            else
                {
                    funcRParamsNum = funcRParams.funcRParam_list().length;
                }
            if (funcFParamsNum ==0 && funcRParamsNum == 0) 
                {
                    // 无参数且数量相等的情况下，不需要检查类型
                }
            else if(funcFParamsNum != funcRParamsNum)
                {
                    this.errors.push({
                        message: `The number of parameters of function ${funcNameShow} is not matched.`,
                        start: ctx.start ? ctx.start.start : 0,
                        stop: ctx.stop ? ctx.stop.stop : 0,
                        context: 'visitUnary2',
                        suggestion: `Check the number of parameters of function ${funcNameShow}.`
                    });
                }
            else
                {// 数量相等且不为0的情况下，进行类型检查
                    // 首先检查参数是否已经定义，借助scopStack进行检查
                    // 获取实参名列表
                    let funcRParamsName:string[] = [];
                    let funcRParamName_No:string[] = [];
                    for(let i = 0;i<funcRParamsNum;i++)
                    {
                        let name = funcRParams.funcRParam_list()[i].getText() + '_decl';
                        let name_No = funcRParams.funcRParam_list()[i].getText();
                        funcRParamsName.push(name);
                        funcRParamName_No.push(name_No);
                    }
                    // 对实参，依次检查是否定义
                    let defined = true;
                    for(let i = 0;i<funcRParamsNum;i++)
                    {
                        let name = funcRParamsName[i];
                        let nameShow = funcRParamName_No[i];
                        let j = this.scopStack.length - 1;
                        while (j >= 0 && !(this.scopStack[j].has(name) && this.scopStack[j].get(name)[0] === 'decl')) {
                            j--;
                        }
                        if (j === -1) {
                            defined = false;
                            this.errors.push({
                                message: `Parameter ${nameShow} is not defined.`,
                                start: ctx.start ? ctx.start.start : 0,
                                stop: ctx.stop ? ctx.stop.stop : 0,
                                context: 'visitUnary2',
                                suggestion: `Define the Parameter ${nameShow}.`
                            });
                        }
                    }
                    // 如果参数都已经定义，进行类型检查
                    if(defined)
                        {
                            // 获取形参类型列表
                            let funcFParamsType:string[] = [];
                            let funcFParamsTypeExtend:string[] = [];
                            for(let i = 0;i<funcFParamsNum;i++)
                            {
                                let type = funcFParams.funcFParam_list()[i].bType().getText();
                                let typeExtend = '';
                                const ctxText = funcFParams.funcFParam_list()[i].getText();
                                // 判断其中是否出现 [ ]
                                if(ctxText.indexOf('[') != -1)
                                    {
                                        typeExtend = 'list';
                                    }
                                else
                                    {
                                        typeExtend = 'scalar';
                                    }
                                funcFParamsType.push(type);
                                funcFParamsTypeExtend.push(typeExtend);
                            }
                            // 获取实参类型列表，借助scopStack进行
                            let funcRParamsType:string[] = [];
                            let funcRParamsTypeExtend:string[] = [];
                            for(let i = 0;i<funcRParamsNum;i++)
                            {
                                let name = funcRParamsName[i];
                                let j = this.scopStack.length - 1;
                                while (j >= 0 && !(this.scopStack[j].has(name) && this.scopStack[j].get(name)[0] === 'decl')) {
                                    j--;
                                }
                                let type = this.scopStack[j].get(name)[2];
                                let typeExtend = this.scopStack[j].get(name)[3];
                                funcRParamsType.push(type);
                                funcRParamsTypeExtend.push(typeExtend);
                            }
                            // 检查类型是否匹配
                            let match = true;
                            for(let i = 0;i<funcFParamsNum;i++)
                            {
                                if(funcFParamsType[i] != funcRParamsType[i] || funcFParamsTypeExtend[i] != funcRParamsTypeExtend[i])
                                    {
                                        match = false;
                                        this.errors.push({
                                            message: `The type of parameter ${funcRParamName_No[i]} is not matched.`,
                                            start: ctx.start ? ctx.start.start : 0,
                                            stop: ctx.stop ? ctx.stop.stop : 0,
                                            context: 'visitUnary2',
                                            suggestion: `Check the type of parameter ${funcRParamName_No[i]}.`
                                        });
                                    }
                            }
                            // 如果类型匹配，不需要提示
                        }
                }
        }
        this.visitChildren(ctx);
    }
    visitUnary3 = (ctx: Unary3Context): void =>{// 一元表达式3
        this.visitChildren(ctx);
    }
    visitUnary4 = (ctx: Unary4Context):void =>{// 一元表达式4,结构体的成员访问
    /*    const structName = ctx.ID().getText()+ '_decl';
        const structNameShow = ctx.ID().getText();
        console.log(structName);
        console.log(structNameShow);
        // 检查成员是否已经定义
        let i = this.scopStack.length - 1;
        while (i >= 0 && !(this.scopStack[i].has(structName) && this.scopStack[i].get(structName)[0] === 'decl')) {
            i--;
        }
        if (i === -1) {
            this.errors.push({
                // 成员未定义
                message: `Struct member ${structNameShow} is not defined.`,
                start: ctx.start ? ctx.start.start : 0,
                stop: ctx.stop ? ctx.stop.stop : 0,
                context: 'visitUnary4',
                suggestion: `Define the struct member ${structNameShow}.`
            });
        }*/
        
        this.visitChildren(ctx);
    }


    // 访问unaryOp节点
    visitUnaryOp = (ctx: UnaryOpContext): void => {
        this.visitChildren(ctx);
    }

    // 访问funcRParams节点
    visitFuncRParams = (ctx: FuncRParamsContext): void => {
        this.visitChildren(ctx);
    }

    // 访问funcRParam节点
    visitExpAsRParam = (ctx: ExpAsRParamContext): void => {// 表达式作为函数实参
        this.visitChildren(ctx);
    }
    visitStringAsRParam = (ctx: StringAsRParamContext): void => {// 字符串作为函数实参
        this.visitChildren(ctx);
    }

    // 访问mul节点
    visitMul1 = (ctx: Mul1Context): void => {// 乘数1
        this.visitChildren(ctx);
    }
    visitMul2 = (ctx: Mul2Context): void =>{// 乘数2
        this.visitChildren(ctx);
    }

    // 访问addExp节点
    visitAdd1 = (ctx: Add1Context): void => {// 加数1
        this.visitChildren(ctx);
    }
    visitAdd2 = (ctx: Add2Context): void => {// 加数2
        this.visitChildren(ctx);
    }

    // 访问relExp节点
    visitRel1 = (ctx: Rel1Context): void => {// 关系数1
        this.visitChildren(ctx);
    }
    visitRel2 = (ctx: Rel2Context): void => {// 关系数2
        this.visitChildren(ctx);
    }

    // 访问eqEXP
    visitEq1 = (ctx: Eq1Context): void => {// 相等数1
        this.visitChildren(ctx);
    }
    visitEq2 = (ctx: Eq2Context): void => {// 相等数2
        this.visitChildren(ctx);
    }

    // 访问lAndExp
    visitLAnd1 = (ctx: LAnd1Context): void => {// 逻辑与数1
        this.visitChildren(ctx);
    }
    visitLAnd2 = (ctx: LAnd2Context):void => {// 逻辑与数2
        this.visitChildren(ctx);
    }

    // 访问lOrExp
    visitLOr1 = (ctx:LOr1Context): void => {// 逻辑或数1
        this.visitChildren(ctx);
    }
    visitLOr2 = (ctx:LOr2Context):void => {// 逻辑或数2
        this.visitChildren(ctx);
    }

    // 访问constExp
    visitConstExp = (ctx: ConstExpContext): void => {// 常量表达式
        this.visitChildren(ctx);
    }

      
}