// Generated from SysY2022E.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";

import { 
    CompUnitContext, 
    DeclContext, 
    ConstDeclContext, 
    BTypeContext, 
    ConstDefContext, 
    ScalarConstInitValContext, 
    ListConstInitValContext, 
    StructDeclContext, 
    LambdaTypeContext, 
    VarDeclContext, 
    UninitVarDefContext, 
    InitVarDefContext, 
    ScalarInitValContext, 
    ListInitvalContext, 
    FuncDefContext, 
    FuncTypeContext, 
    FuncFParamsContext, 
    FuncFParamContext, 
    BlockContext, 
    BlockItemContext, 
    AssignmentContext, 
    ExpStmtContext, 
    BlockStmtContext, 
    IfStmt1Context, 
    IfStmt2Context, 
    WhileStmtContext, 
    BreakStmtContext, 
    ContinueStmtContext, 
    ReturnStmtContext, 
    ExpContext, 
    CondContext, 
    LValContext, 
    PrimaryExp1Context, 
    PrimaryExp2Context, 
    PrimaryExp3Context, 
    PrimaryExp4Context, 
    LambdaExpContext, 
    NumberContext, 
    Unary1Context, 
    Unary2Context, 
    Unary3Context, 
    Unary4Context, 
    UnaryOpContext, 
    FuncRParamsContext, 
    ExpAsRParamContext, 
    StringAsRParamContext, 
    Mul2Context, 
    Mul1Context, 
    Add2Context, 
    Add1Context, 
    Rel2Context, 
    Rel1Context, 
    Eq1Context, 
    Eq2Context, 
    LAnd2Context, 
    LAnd1Context, 
    LOr1Context, 
    LOr2Context, 
    ConstExpContext,
	LVal1Context,
	LVal2Context
} from "../parser/SysY2022EParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SysY2022EParser`.
 */
export default class SysY2022EListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SysY2022EParser.compUnit`.
	 * @param ctx the parse tree
	 */
	enterCompUnit?: (ctx: CompUnitContext) => void;
	/**
	 * Exit a parse tree produced by `SysY2022EParser.compUnit`.
	 * @param ctx the parse tree
	 */
	exitCompUnit?: (ctx: CompUnitContext) => void;
	/**
	 * Enter a parse tree produced by `SysY2022EParser.decl`.
	 * @param ctx the parse tree
	 */
	enterDecl?: (ctx: DeclContext) => void;
	/**
	 * Exit a parse tree produced by `SysY2022EParser.decl`.
	 * @param ctx the parse tree
	 */
	exitDecl?: (ctx: DeclContext) => void;
	/**
	 * Enter a parse tree produced by `SysY2022EParser.constDecl`.
	 * @param ctx the parse tree
	 */
	enterConstDecl?: (ctx: ConstDeclContext) => void;
	/**
	 * Exit a parse tree produced by `SysY2022EParser.constDecl`.
	 * @param ctx the parse tree
	 */
	exitConstDecl?: (ctx: ConstDeclContext) => void;
	/**
	 * Enter a parse tree produced by `SysY2022EParser.bType`.
	 * @param ctx the parse tree
	 */
	enterBType?: (ctx: BTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SysY2022EParser.bType`.
	 * @param ctx the parse tree
	 */
	exitBType?: (ctx: BTypeContext) => void;
	/**
	 * Enter a parse tree produced by `SysY2022EParser.constDef`.
	 * @param ctx the parse tree
	 */
	enterConstDef?: (ctx: ConstDefContext) => void;
	/**
	 * Exit a parse tree produced by `SysY2022EParser.constDef`.
	 * @param ctx the parse tree
	 */
	exitConstDef?: (ctx: ConstDefContext) => void;
	/**
	 * Enter a parse tree produced by the `scalarConstInitVal`
	 * labeled alternative in `SysY2022EParser.constInitVal`.
	 * @param ctx the parse tree
	 */
	enterScalarConstInitVal?: (ctx: ScalarConstInitValContext) => void;
	/**
	 * Exit a parse tree produced by the `scalarConstInitVal`
	 * labeled alternative in `SysY2022EParser.constInitVal`.
	 * @param ctx the parse tree
	 */
	exitScalarConstInitVal?: (ctx: ScalarConstInitValContext) => void;
	/**
	 * Enter a parse tree produced by the `listConstInitVal`
	 * labeled alternative in `SysY2022EParser.constInitVal`.
	 * @param ctx the parse tree
	 */
	enterListConstInitVal?: (ctx: ListConstInitValContext) => void;
	/**
	 * Exit a parse tree produced by the `listConstInitVal`
	 * labeled alternative in `SysY2022EParser.constInitVal`.
	 * @param ctx the parse tree
	 */
	exitListConstInitVal?: (ctx: ListConstInitValContext) => void;
	/**
	 * Enter a parse tree produced by `SysY2022EParser.structDecl`.
	 * @param ctx the parse tree
	 */
	enterStructDecl?: (ctx: StructDeclContext) => void;
	/**
	 * Exit a parse tree produced by `SysY2022EParser.structDecl`.
	 * @param ctx the parse tree
	 */
	exitStructDecl?: (ctx: StructDeclContext) => void;
	/**
	 * Enter a parse tree produced by `SysY2022EParser.lambdaType`.
	 * @param ctx the parse tree
	 */
	enterLambdaType?: (ctx: LambdaTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SysY2022EParser.lambdaType`.
	 * @param ctx the parse tree
	 */
	exitLambdaType?: (ctx: LambdaTypeContext) => void;
	/**
	 * Enter a parse tree produced by `SysY2022EParser.varDecl`.
	 * @param ctx the parse tree
	 */
	enterVarDecl?: (ctx: VarDeclContext) => void;
	/**
	 * Exit a parse tree produced by `SysY2022EParser.varDecl`.
	 * @param ctx the parse tree
	 */
	exitVarDecl?: (ctx: VarDeclContext) => void;
	/**
	 * Enter a parse tree produced by the `uninitVarDef`
	 * labeled alternative in `SysY2022EParser.varDef`.
	 * @param ctx the parse tree
	 */
	enterUninitVarDef?: (ctx: UninitVarDefContext) => void;
	/**
	 * Exit a parse tree produced by the `uninitVarDef`
	 * labeled alternative in `SysY2022EParser.varDef`.
	 * @param ctx the parse tree
	 */
	exitUninitVarDef?: (ctx: UninitVarDefContext) => void;
	/**
	 * Enter a parse tree produced by the `initVarDef`
	 * labeled alternative in `SysY2022EParser.varDef`.
	 * @param ctx the parse tree
	 */
	enterInitVarDef?: (ctx: InitVarDefContext) => void;
	/**
	 * Exit a parse tree produced by the `initVarDef`
	 * labeled alternative in `SysY2022EParser.varDef`.
	 * @param ctx the parse tree
	 */
	exitInitVarDef?: (ctx: InitVarDefContext) => void;
	/**
	 * Enter a parse tree produced by the `scalarInitVal`
	 * labeled alternative in `SysY2022EParser.initVal`.
	 * @param ctx the parse tree
	 */
	enterScalarInitVal?: (ctx: ScalarInitValContext) => void;
	/**
	 * Exit a parse tree produced by the `scalarInitVal`
	 * labeled alternative in `SysY2022EParser.initVal`.
	 * @param ctx the parse tree
	 */
	exitScalarInitVal?: (ctx: ScalarInitValContext) => void;
	/**
	 * Enter a parse tree produced by the `listInitval`
	 * labeled alternative in `SysY2022EParser.initVal`.
	 * @param ctx the parse tree
	 */
	enterListInitval?: (ctx: ListInitvalContext) => void;
	/**
	 * Exit a parse tree produced by the `listInitval`
	 * labeled alternative in `SysY2022EParser.initVal`.
	 * @param ctx the parse tree
	 */
	exitListInitval?: (ctx: ListInitvalContext) => void;
	/**
	 * Enter a parse tree produced by `SysY2022EParser.funcDef`.
	 * @param ctx the parse tree
	 */
	enterFuncDef?: (ctx: FuncDefContext) => void;
	/**
	 * Exit a parse tree produced by `SysY2022EParser.funcDef`.
	 * @param ctx the parse tree
	 */
	exitFuncDef?: (ctx: FuncDefContext) => void;
	/**
	 * Enter a parse tree produced by `SysY2022EParser.funcType`.
	 * @param ctx the parse tree
	 */
	enterFuncType?: (ctx: FuncTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SysY2022EParser.funcType`.
	 * @param ctx the parse tree
	 */
	exitFuncType?: (ctx: FuncTypeContext) => void;
	/**
	 * Enter a parse tree produced by `SysY2022EParser.funcFParams`.
	 * @param ctx the parse tree
	 */
	enterFuncFParams?: (ctx: FuncFParamsContext) => void;
	/**
	 * Exit a parse tree produced by `SysY2022EParser.funcFParams`.
	 * @param ctx the parse tree
	 */
	exitFuncFParams?: (ctx: FuncFParamsContext) => void;
	/**
	 * Enter a parse tree produced by `SysY2022EParser.funcFParam`.
	 * @param ctx the parse tree
	 */
	enterFuncFParam?: (ctx: FuncFParamContext) => void;
	/**
	 * Exit a parse tree produced by `SysY2022EParser.funcFParam`.
	 * @param ctx the parse tree
	 */
	exitFuncFParam?: (ctx: FuncFParamContext) => void;
	/**
	 * Enter a parse tree produced by `SysY2022EParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `SysY2022EParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;
	/**
	 * Enter a parse tree produced by `SysY2022EParser.blockItem`.
	 * @param ctx the parse tree
	 */
	enterBlockItem?: (ctx: BlockItemContext) => void;
	/**
	 * Exit a parse tree produced by `SysY2022EParser.blockItem`.
	 * @param ctx the parse tree
	 */
	exitBlockItem?: (ctx: BlockItemContext) => void;
	/**
	 * Enter a parse tree produced by the `assignment`
	 * labeled alternative in `SysY2022EParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by the `assignment`
	 * labeled alternative in `SysY2022EParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Enter a parse tree produced by the `expStmt`
	 * labeled alternative in `SysY2022EParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterExpStmt?: (ctx: ExpStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `expStmt`
	 * labeled alternative in `SysY2022EParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitExpStmt?: (ctx: ExpStmtContext) => void;
	/**
	 * Enter a parse tree produced by the `blockStmt`
	 * labeled alternative in `SysY2022EParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterBlockStmt?: (ctx: BlockStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `blockStmt`
	 * labeled alternative in `SysY2022EParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitBlockStmt?: (ctx: BlockStmtContext) => void;
	/**
	 * Enter a parse tree produced by the `ifStmt1`
	 * labeled alternative in `SysY2022EParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterIfStmt1?: (ctx: IfStmt1Context) => void;
	/**
	 * Exit a parse tree produced by the `ifStmt1`
	 * labeled alternative in `SysY2022EParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitIfStmt1?: (ctx: IfStmt1Context) => void;
	/**
	 * Enter a parse tree produced by the `ifStmt2`
	 * labeled alternative in `SysY2022EParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterIfStmt2?: (ctx: IfStmt2Context) => void;
	/**
	 * Exit a parse tree produced by the `ifStmt2`
	 * labeled alternative in `SysY2022EParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitIfStmt2?: (ctx: IfStmt2Context) => void;
	/**
	 * Enter a parse tree produced by the `whileStmt`
	 * labeled alternative in `SysY2022EParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterWhileStmt?: (ctx: WhileStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `whileStmt`
	 * labeled alternative in `SysY2022EParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitWhileStmt?: (ctx: WhileStmtContext) => void;
	/**
	 * Enter a parse tree produced by the `breakStmt`
	 * labeled alternative in `SysY2022EParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterBreakStmt?: (ctx: BreakStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `breakStmt`
	 * labeled alternative in `SysY2022EParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitBreakStmt?: (ctx: BreakStmtContext) => void;
	/**
	 * Enter a parse tree produced by the `continueStmt`
	 * labeled alternative in `SysY2022EParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterContinueStmt?: (ctx: ContinueStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `continueStmt`
	 * labeled alternative in `SysY2022EParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitContinueStmt?: (ctx: ContinueStmtContext) => void;
	/**
	 * Enter a parse tree produced by the `returnStmt`
	 * labeled alternative in `SysY2022EParser.stmt`.
	 * @param ctx the parse tree
	 */
	enterReturnStmt?: (ctx: ReturnStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `returnStmt`
	 * labeled alternative in `SysY2022EParser.stmt`.
	 * @param ctx the parse tree
	 */
	exitReturnStmt?: (ctx: ReturnStmtContext) => void;
	/**
	 * Enter a parse tree produced by `SysY2022EParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp?: (ctx: ExpContext) => void;
	/**
	 * Exit a parse tree produced by `SysY2022EParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp?: (ctx: ExpContext) => void;
	/**
	 * Enter a parse tree produced by `SysY2022EParser.cond`.
	 * @param ctx the parse tree
	 */
	enterCond?: (ctx: CondContext) => void;
	/**
	 * Exit a parse tree produced by `SysY2022EParser.cond`.
	 * @param ctx the parse tree
	 */
	exitCond?: (ctx: CondContext) => void;
	/**
	 * Enter a parse tree produced by the `lVal1`
	 * labeled alternative in `SysY2022EParser.lVal`.
	 * @param ctx the parse tree
	 */
	enterLVal1?: (ctx: LVal1Context) => void;
	/**
	 * Exit a parse tree produced by the `lVal1`
	 * labeled alternative in `SysY2022EParser.lVal`.
	 * @param ctx the parse tree
	 */
	exitLVal1?: (ctx: LVal1Context) => void;
	/**
	 * Enter a parse tree produced by the `lVal2`
	 * labeled alternative in `SysY2022EParser.lVal`.
	 * @param ctx the parse tree
	 */
	enterLVal2?: (ctx: LVal2Context) => void;
	/**
	 * Exit a parse tree produced by the `lVal2`
	 * labeled alternative in `SysY2022EParser.lVal`.
	 * @param ctx the parse tree
	 */
	exitLVal2?: (ctx: LVal2Context) => void;
	/**
	 * Enter a parse tree produced by the `primaryExp1`
	 * labeled alternative in `SysY2022EParser.primaryExp`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExp1?: (ctx: PrimaryExp1Context) => void;
	/**
	 * Exit a parse tree produced by the `primaryExp1`
	 * labeled alternative in `SysY2022EParser.primaryExp`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExp1?: (ctx: PrimaryExp1Context) => void;
	/**
	 * Enter a parse tree produced by the `primaryExp2`
	 * labeled alternative in `SysY2022EParser.primaryExp`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExp2?: (ctx: PrimaryExp2Context) => void;
	/**
	 * Exit a parse tree produced by the `primaryExp2`
	 * labeled alternative in `SysY2022EParser.primaryExp`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExp2?: (ctx: PrimaryExp2Context) => void;
	/**
	 * Enter a parse tree produced by the `primaryExp3`
	 * labeled alternative in `SysY2022EParser.primaryExp`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExp3?: (ctx: PrimaryExp3Context) => void;
	/**
	 * Exit a parse tree produced by the `primaryExp3`
	 * labeled alternative in `SysY2022EParser.primaryExp`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExp3?: (ctx: PrimaryExp3Context) => void;
	/**
	 * Enter a parse tree produced by the `primaryExp4`
	 * labeled alternative in `SysY2022EParser.primaryExp`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExp4?: (ctx: PrimaryExp4Context) => void;
	/**
	 * Exit a parse tree produced by the `primaryExp4`
	 * labeled alternative in `SysY2022EParser.primaryExp`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExp4?: (ctx: PrimaryExp4Context) => void;
	/**
	 * Enter a parse tree produced by `SysY2022EParser.lambdaExp`.
	 * @param ctx the parse tree
	 */
	enterLambdaExp?: (ctx: LambdaExpContext) => void;
	/**
	 * Exit a parse tree produced by `SysY2022EParser.lambdaExp`.
	 * @param ctx the parse tree
	 */
	exitLambdaExp?: (ctx: LambdaExpContext) => void;
	/**
	 * Enter a parse tree produced by `SysY2022EParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `SysY2022EParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;
	/**
	 * Enter a parse tree produced by the `unary1`
	 * labeled alternative in `SysY2022EParser.unaryExp`.
	 * @param ctx the parse tree
	 */
	enterUnary1?: (ctx: Unary1Context) => void;
	/**
	 * Exit a parse tree produced by the `unary1`
	 * labeled alternative in `SysY2022EParser.unaryExp`.
	 * @param ctx the parse tree
	 */
	exitUnary1?: (ctx: Unary1Context) => void;
	/**
	 * Enter a parse tree produced by the `unary2`
	 * labeled alternative in `SysY2022EParser.unaryExp`.
	 * @param ctx the parse tree
	 */
	enterUnary2?: (ctx: Unary2Context) => void;
	/**
	 * Exit a parse tree produced by the `unary2`
	 * labeled alternative in `SysY2022EParser.unaryExp`.
	 * @param ctx the parse tree
	 */
	exitUnary2?: (ctx: Unary2Context) => void;
	/**
	 * Enter a parse tree produced by the `unary3`
	 * labeled alternative in `SysY2022EParser.unaryExp`.
	 * @param ctx the parse tree
	 */
	enterUnary3?: (ctx: Unary3Context) => void;
	/**
	 * Exit a parse tree produced by the `unary3`
	 * labeled alternative in `SysY2022EParser.unaryExp`.
	 * @param ctx the parse tree
	 */
	exitUnary3?: (ctx: Unary3Context) => void;
	/**
	 * Enter a parse tree produced by the `unary4`
	 * labeled alternative in `SysY2022EParser.unaryExp`.
	 * @param ctx the parse tree
	 */
	enterUnary4?: (ctx: Unary4Context) => void;
	/**
	 * Exit a parse tree produced by the `unary4`
	 * labeled alternative in `SysY2022EParser.unaryExp`.
	 * @param ctx the parse tree
	 */
	exitUnary4?: (ctx: Unary4Context) => void;
	/**
	 * Enter a parse tree produced by `SysY2022EParser.unaryOp`.
	 * @param ctx the parse tree
	 */
	enterUnaryOp?: (ctx: UnaryOpContext) => void;
	/**
	 * Exit a parse tree produced by `SysY2022EParser.unaryOp`.
	 * @param ctx the parse tree
	 */
	exitUnaryOp?: (ctx: UnaryOpContext) => void;
	/**
	 * Enter a parse tree produced by `SysY2022EParser.funcRParams`.
	 * @param ctx the parse tree
	 */
	enterFuncRParams?: (ctx: FuncRParamsContext) => void;
	/**
	 * Exit a parse tree produced by `SysY2022EParser.funcRParams`.
	 * @param ctx the parse tree
	 */
	exitFuncRParams?: (ctx: FuncRParamsContext) => void;
	/**
	 * Enter a parse tree produced by the `expAsRParam`
	 * labeled alternative in `SysY2022EParser.funcRParam`.
	 * @param ctx the parse tree
	 */
	enterExpAsRParam?: (ctx: ExpAsRParamContext) => void;
	/**
	 * Exit a parse tree produced by the `expAsRParam`
	 * labeled alternative in `SysY2022EParser.funcRParam`.
	 * @param ctx the parse tree
	 */
	exitExpAsRParam?: (ctx: ExpAsRParamContext) => void;
	/**
	 * Enter a parse tree produced by the `stringAsRParam`
	 * labeled alternative in `SysY2022EParser.funcRParam`.
	 * @param ctx the parse tree
	 */
	enterStringAsRParam?: (ctx: StringAsRParamContext) => void;
	/**
	 * Exit a parse tree produced by the `stringAsRParam`
	 * labeled alternative in `SysY2022EParser.funcRParam`.
	 * @param ctx the parse tree
	 */
	exitStringAsRParam?: (ctx: StringAsRParamContext) => void;
	/**
	 * Enter a parse tree produced by the `mul2`
	 * labeled alternative in `SysY2022EParser.mulExp`.
	 * @param ctx the parse tree
	 */
	enterMul2?: (ctx: Mul2Context) => void;
	/**
	 * Exit a parse tree produced by the `mul2`
	 * labeled alternative in `SysY2022EParser.mulExp`.
	 * @param ctx the parse tree
	 */
	exitMul2?: (ctx: Mul2Context) => void;
	/**
	 * Enter a parse tree produced by the `mul1`
	 * labeled alternative in `SysY2022EParser.mulExp`.
	 * @param ctx the parse tree
	 */
	enterMul1?: (ctx: Mul1Context) => void;
	/**
	 * Exit a parse tree produced by the `mul1`
	 * labeled alternative in `SysY2022EParser.mulExp`.
	 * @param ctx the parse tree
	 */
	exitMul1?: (ctx: Mul1Context) => void;
	/**
	 * Enter a parse tree produced by the `add2`
	 * labeled alternative in `SysY2022EParser.addExp`.
	 * @param ctx the parse tree
	 */
	enterAdd2?: (ctx: Add2Context) => void;
	/**
	 * Exit a parse tree produced by the `add2`
	 * labeled alternative in `SysY2022EParser.addExp`.
	 * @param ctx the parse tree
	 */
	exitAdd2?: (ctx: Add2Context) => void;
	/**
	 * Enter a parse tree produced by the `add1`
	 * labeled alternative in `SysY2022EParser.addExp`.
	 * @param ctx the parse tree
	 */
	enterAdd1?: (ctx: Add1Context) => void;
	/**
	 * Exit a parse tree produced by the `add1`
	 * labeled alternative in `SysY2022EParser.addExp`.
	 * @param ctx the parse tree
	 */
	exitAdd1?: (ctx: Add1Context) => void;
	/**
	 * Enter a parse tree produced by the `rel2`
	 * labeled alternative in `SysY2022EParser.relExp`.
	 * @param ctx the parse tree
	 */
	enterRel2?: (ctx: Rel2Context) => void;
	/**
	 * Exit a parse tree produced by the `rel2`
	 * labeled alternative in `SysY2022EParser.relExp`.
	 * @param ctx the parse tree
	 */
	exitRel2?: (ctx: Rel2Context) => void;
	/**
	 * Enter a parse tree produced by the `rel1`
	 * labeled alternative in `SysY2022EParser.relExp`.
	 * @param ctx the parse tree
	 */
	enterRel1?: (ctx: Rel1Context) => void;
	/**
	 * Exit a parse tree produced by the `rel1`
	 * labeled alternative in `SysY2022EParser.relExp`.
	 * @param ctx the parse tree
	 */
	exitRel1?: (ctx: Rel1Context) => void;
	/**
	 * Enter a parse tree produced by the `eq1`
	 * labeled alternative in `SysY2022EParser.eqExp`.
	 * @param ctx the parse tree
	 */
	enterEq1?: (ctx: Eq1Context) => void;
	/**
	 * Exit a parse tree produced by the `eq1`
	 * labeled alternative in `SysY2022EParser.eqExp`.
	 * @param ctx the parse tree
	 */
	exitEq1?: (ctx: Eq1Context) => void;
	/**
	 * Enter a parse tree produced by the `eq2`
	 * labeled alternative in `SysY2022EParser.eqExp`.
	 * @param ctx the parse tree
	 */
	enterEq2?: (ctx: Eq2Context) => void;
	/**
	 * Exit a parse tree produced by the `eq2`
	 * labeled alternative in `SysY2022EParser.eqExp`.
	 * @param ctx the parse tree
	 */
	exitEq2?: (ctx: Eq2Context) => void;
	/**
	 * Enter a parse tree produced by the `lAnd2`
	 * labeled alternative in `SysY2022EParser.lAndExp`.
	 * @param ctx the parse tree
	 */
	enterLAnd2?: (ctx: LAnd2Context) => void;
	/**
	 * Exit a parse tree produced by the `lAnd2`
	 * labeled alternative in `SysY2022EParser.lAndExp`.
	 * @param ctx the parse tree
	 */
	exitLAnd2?: (ctx: LAnd2Context) => void;
	/**
	 * Enter a parse tree produced by the `lAnd1`
	 * labeled alternative in `SysY2022EParser.lAndExp`.
	 * @param ctx the parse tree
	 */
	enterLAnd1?: (ctx: LAnd1Context) => void;
	/**
	 * Exit a parse tree produced by the `lAnd1`
	 * labeled alternative in `SysY2022EParser.lAndExp`.
	 * @param ctx the parse tree
	 */
	exitLAnd1?: (ctx: LAnd1Context) => void;
	/**
	 * Enter a parse tree produced by the `lOr1`
	 * labeled alternative in `SysY2022EParser.lOrExp`.
	 * @param ctx the parse tree
	 */
	enterLOr1?: (ctx: LOr1Context) => void;
	/**
	 * Exit a parse tree produced by the `lOr1`
	 * labeled alternative in `SysY2022EParser.lOrExp`.
	 * @param ctx the parse tree
	 */
	exitLOr1?: (ctx: LOr1Context) => void;
	/**
	 * Enter a parse tree produced by the `lOr2`
	 * labeled alternative in `SysY2022EParser.lOrExp`.
	 * @param ctx the parse tree
	 */
	enterLOr2?: (ctx: LOr2Context) => void;
	/**
	 * Exit a parse tree produced by the `lOr2`
	 * labeled alternative in `SysY2022EParser.lOrExp`.
	 * @param ctx the parse tree
	 */
	exitLOr2?: (ctx: LOr2Context) => void;
	/**
	 * Enter a parse tree produced by `SysY2022EParser.constExp`.
	 * @param ctx the parse tree
	 */
	enterConstExp?: (ctx: ConstExpContext) => void;
	/**
	 * Exit a parse tree produced by `SysY2022EParser.constExp`.
	 * @param ctx the parse tree
	 */
	exitConstExp?: (ctx: ConstExpContext) => void;
}

