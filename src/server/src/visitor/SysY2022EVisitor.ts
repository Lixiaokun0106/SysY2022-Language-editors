// Generated from SysY2022E.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';

import { 
    CompUnitContext, DeclContext, ConstDeclContext, BTypeContext, ConstDefContext, 
    ScalarConstInitValContext, ListConstInitValContext, VarDeclContext, UninitVarDefContext, 
    InitVarDefContext, ScalarInitValContext, ListInitvalContext, FuncDefContext, FuncTypeContext, 
    FuncFParamsContext, FuncFParamContext, BlockContext, BlockItemContext, AssignmentContext, 
    ExpStmtContext, BlockStmtContext, IfStmt1Context, IfStmt2Context, WhileStmtContext, 
    BreakStmtContext, ContinueStmtContext, ReturnStmtContext, ExpContext, CondContext, 
    LValContext, PrimaryExp1Context, PrimaryExp2Context, PrimaryExp3Context, NumberContext, 
    Unary1Context, Unary2Context, Unary3Context, UnaryOpContext, FuncRParamsContext, 
    ExpAsRParamContext, StringAsRParamContext, Mul2Context, Mul1Context, Add2Context, 
    Add1Context, Rel2Context, Rel1Context, Eq1Context, Eq2Context, LAnd2Context, 
    LAnd1Context, LOr1Context, LOr2Context, ConstExpContext 
} from "../parser/SysY2022EParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SysY2022EParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class SysY2022EVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `SysY2022EParser.compUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompUnit?: (ctx: CompUnitContext) => Result;
	/**
	 * Visit a parse tree produced by `SysY2022EParser.decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecl?: (ctx: DeclContext) => Result;
	/**
	 * Visit a parse tree produced by `SysY2022EParser.constDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstDecl?: (ctx: ConstDeclContext) => Result;
	/**
	 * Visit a parse tree produced by `SysY2022EParser.bType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBType?: (ctx: BTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `SysY2022EParser.constDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstDef?: (ctx: ConstDefContext) => Result;
	/**
	 * Visit a parse tree produced by the `scalarConstInitVal`
	 * labeled alternative in `SysY2022EParser.constInitVal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScalarConstInitVal?: (ctx: ScalarConstInitValContext) => Result;
	/**
	 * Visit a parse tree produced by the `listConstInitVal`
	 * labeled alternative in `SysY2022EParser.constInitVal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListConstInitVal?: (ctx: ListConstInitValContext) => Result;
	/**
	 * Visit a parse tree produced by `SysY2022EParser.varDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDecl?: (ctx: VarDeclContext) => Result;
	/**
	 * Visit a parse tree produced by the `uninitVarDef`
	 * labeled alternative in `SysY2022EParser.varDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUninitVarDef?: (ctx: UninitVarDefContext) => Result;
	/**
	 * Visit a parse tree produced by the `initVarDef`
	 * labeled alternative in `SysY2022EParser.varDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitVarDef?: (ctx: InitVarDefContext) => Result;
	/**
	 * Visit a parse tree produced by the `scalarInitVal`
	 * labeled alternative in `SysY2022EParser.initVal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScalarInitVal?: (ctx: ScalarInitValContext) => Result;
	/**
	 * Visit a parse tree produced by the `listInitval`
	 * labeled alternative in `SysY2022EParser.initVal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListInitval?: (ctx: ListInitvalContext) => Result;
	/**
	 * Visit a parse tree produced by `SysY2022EParser.funcDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncDef?: (ctx: FuncDefContext) => Result;
	/**
	 * Visit a parse tree produced by `SysY2022EParser.funcType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncType?: (ctx: FuncTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `SysY2022EParser.funcFParams`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncFParams?: (ctx: FuncFParamsContext) => Result;
	/**
	 * Visit a parse tree produced by `SysY2022EParser.funcFParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncFParam?: (ctx: FuncFParamContext) => Result;
	/**
	 * Visit a parse tree produced by `SysY2022EParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;
	/**
	 * Visit a parse tree produced by `SysY2022EParser.blockItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockItem?: (ctx: BlockItemContext) => Result;
	/**
	 * Visit a parse tree produced by the `assignment`
	 * labeled alternative in `SysY2022EParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;
	/**
	 * Visit a parse tree produced by the `expStmt`
	 * labeled alternative in `SysY2022EParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpStmt?: (ctx: ExpStmtContext) => Result;
	/**
	 * Visit a parse tree produced by the `blockStmt`
	 * labeled alternative in `SysY2022EParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStmt?: (ctx: BlockStmtContext) => Result;
	/**
	 * Visit a parse tree produced by the `ifStmt1`
	 * labeled alternative in `SysY2022EParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStmt1?: (ctx: IfStmt1Context) => Result;
	/**
	 * Visit a parse tree produced by the `ifStmt2`
	 * labeled alternative in `SysY2022EParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStmt2?: (ctx: IfStmt2Context) => Result;
	/**
	 * Visit a parse tree produced by the `whileStmt`
	 * labeled alternative in `SysY2022EParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStmt?: (ctx: WhileStmtContext) => Result;
	/**
	 * Visit a parse tree produced by the `breakStmt`
	 * labeled alternative in `SysY2022EParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStmt?: (ctx: BreakStmtContext) => Result;
	/**
	 * Visit a parse tree produced by the `continueStmt`
	 * labeled alternative in `SysY2022EParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStmt?: (ctx: ContinueStmtContext) => Result;
	/**
	 * Visit a parse tree produced by the `returnStmt`
	 * labeled alternative in `SysY2022EParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStmt?: (ctx: ReturnStmtContext) => Result;
	/**
	 * Visit a parse tree produced by `SysY2022EParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp?: (ctx: ExpContext) => Result;
	/**
	 * Visit a parse tree produced by `SysY2022EParser.cond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCond?: (ctx: CondContext) => Result;
	/**
	 * Visit a parse tree produced by `SysY2022EParser.lVal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLVal?: (ctx: LValContext) => Result;
	/**
	 * Visit a parse tree produced by the `primaryExp1`
	 * labeled alternative in `SysY2022EParser.primaryExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExp1?: (ctx: PrimaryExp1Context) => Result;
	/**
	 * Visit a parse tree produced by the `primaryExp2`
	 * labeled alternative in `SysY2022EParser.primaryExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExp2?: (ctx: PrimaryExp2Context) => Result;
	/**
	 * Visit a parse tree produced by the `primaryExp3`
	 * labeled alternative in `SysY2022EParser.primaryExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExp3?: (ctx: PrimaryExp3Context) => Result;
	/**
	 * Visit a parse tree produced by `SysY2022EParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;
	/**
	 * Visit a parse tree produced by the `unary1`
	 * labeled alternative in `SysY2022EParser.unaryExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary1?: (ctx: Unary1Context) => Result;
	/**
	 * Visit a parse tree produced by the `unary2`
	 * labeled alternative in `SysY2022EParser.unaryExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary2?: (ctx: Unary2Context) => Result;
	/**
	 * Visit a parse tree produced by the `unary3`
	 * labeled alternative in `SysY2022EParser.unaryExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary3?: (ctx: Unary3Context) => Result;
	/**
	 * Visit a parse tree produced by `SysY2022EParser.unaryOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryOp?: (ctx: UnaryOpContext) => Result;
	/**
	 * Visit a parse tree produced by `SysY2022EParser.funcRParams`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncRParams?: (ctx: FuncRParamsContext) => Result;
	/**
	 * Visit a parse tree produced by the `expAsRParam`
	 * labeled alternative in `SysY2022EParser.funcRParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpAsRParam?: (ctx: ExpAsRParamContext) => Result;
	/**
	 * Visit a parse tree produced by the `stringAsRParam`
	 * labeled alternative in `SysY2022EParser.funcRParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringAsRParam?: (ctx: StringAsRParamContext) => Result;
	/**
	 * Visit a parse tree produced by the `mul2`
	 * labeled alternative in `SysY2022EParser.mulExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMul2?: (ctx: Mul2Context) => Result;
	/**
	 * Visit a parse tree produced by the `mul1`
	 * labeled alternative in `SysY2022EParser.mulExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMul1?: (ctx: Mul1Context) => Result;
	/**
	 * Visit a parse tree produced by the `add2`
	 * labeled alternative in `SysY2022EParser.addExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdd2?: (ctx: Add2Context) => Result;
	/**
	 * Visit a parse tree produced by the `add1`
	 * labeled alternative in `SysY2022EParser.addExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdd1?: (ctx: Add1Context) => Result;
	/**
	 * Visit a parse tree produced by the `rel2`
	 * labeled alternative in `SysY2022EParser.relExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRel2?: (ctx: Rel2Context) => Result;
	/**
	 * Visit a parse tree produced by the `rel1`
	 * labeled alternative in `SysY2022EParser.relExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRel1?: (ctx: Rel1Context) => Result;
	/**
	 * Visit a parse tree produced by the `eq1`
	 * labeled alternative in `SysY2022EParser.eqExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEq1?: (ctx: Eq1Context) => Result;
	/**
	 * Visit a parse tree produced by the `eq2`
	 * labeled alternative in `SysY2022EParser.eqExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEq2?: (ctx: Eq2Context) => Result;
	/**
	 * Visit a parse tree produced by the `lAnd2`
	 * labeled alternative in `SysY2022EParser.lAndExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLAnd2?: (ctx: LAnd2Context) => Result;
	/**
	 * Visit a parse tree produced by the `lAnd1`
	 * labeled alternative in `SysY2022EParser.lAndExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLAnd1?: (ctx: LAnd1Context) => Result;
	/**
	 * Visit a parse tree produced by the `lOr1`
	 * labeled alternative in `SysY2022EParser.lOrExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLOr1?: (ctx: LOr1Context) => Result;
	/**
	 * Visit a parse tree produced by the `lOr2`
	 * labeled alternative in `SysY2022EParser.lOrExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLOr2?: (ctx: LOr2Context) => Result;
	/**
	 * Visit a parse tree produced by `SysY2022EParser.constExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstExp?: (ctx: ConstExpContext) => Result;
}

