// Generated from SysY2022E.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { CompUnitContext } from "./SysY2022EParser";
import { DeclContext } from "./SysY2022EParser";
import { ConstDeclContext } from "./SysY2022EParser";
import { BTypeContext } from "./SysY2022EParser";
import { ConstDefContext } from "./SysY2022EParser";
import { ScalarConstInitValContext } from "./SysY2022EParser";
import { ListConstInitValContext } from "./SysY2022EParser";
import { StructDeclContext } from "./SysY2022EParser";
import { LambdaTypeContext } from "./SysY2022EParser";
import { VarDeclContext } from "./SysY2022EParser";
import { UninitVarDefContext } from "./SysY2022EParser";
import { InitVarDefContext } from "./SysY2022EParser";
import { ScalarInitValContext } from "./SysY2022EParser";
import { ListInitvalContext } from "./SysY2022EParser";
import { FuncDefContext } from "./SysY2022EParser";
import { FuncTypeContext } from "./SysY2022EParser";
import { FuncFParamsContext } from "./SysY2022EParser";
import { FuncFParamContext } from "./SysY2022EParser";
import { BlockContext } from "./SysY2022EParser";
import { BlockItemContext } from "./SysY2022EParser";
import { AssignmentContext } from "./SysY2022EParser";
import { ExpStmtContext } from "./SysY2022EParser";
import { BlockStmtContext } from "./SysY2022EParser";
import { IfStmt1Context } from "./SysY2022EParser";
import { IfStmt2Context } from "./SysY2022EParser";
import { WhileStmtContext } from "./SysY2022EParser";
import { BreakStmtContext } from "./SysY2022EParser";
import { ContinueStmtContext } from "./SysY2022EParser";
import { ReturnStmtContext } from "./SysY2022EParser";
import { ExpContext } from "./SysY2022EParser";
import { CondContext } from "./SysY2022EParser";
import { LValContext } from "./SysY2022EParser";
import { PrimaryExp1Context } from "./SysY2022EParser";
import { PrimaryExp2Context } from "./SysY2022EParser";
import { PrimaryExp3Context } from "./SysY2022EParser";
import { PrimaryExp4Context } from "./SysY2022EParser";
import { LambdaExpContext } from "./SysY2022EParser";
import { NumberContext } from "./SysY2022EParser";
import { Unary1Context } from "./SysY2022EParser";
import { Unary2Context } from "./SysY2022EParser";
import { Unary3Context } from "./SysY2022EParser";
import { Unary4Context } from "./SysY2022EParser";
import { UnaryOpContext } from "./SysY2022EParser";
import { FuncRParamsContext } from "./SysY2022EParser";
import { ExpAsRParamContext } from "./SysY2022EParser";
import { StringAsRParamContext } from "./SysY2022EParser";
import { Mul2Context } from "./SysY2022EParser";
import { Mul1Context } from "./SysY2022EParser";
import { Add2Context } from "./SysY2022EParser";
import { Add1Context } from "./SysY2022EParser";
import { Rel2Context } from "./SysY2022EParser";
import { Rel1Context } from "./SysY2022EParser";
import { Eq1Context } from "./SysY2022EParser";
import { Eq2Context } from "./SysY2022EParser";
import { LAnd2Context } from "./SysY2022EParser";
import { LAnd1Context } from "./SysY2022EParser";
import { LOr1Context } from "./SysY2022EParser";
import { LOr2Context } from "./SysY2022EParser";
import { ConstExpContext } from "./SysY2022EParser";


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
	 * Visit a parse tree produced by `SysY2022EParser.structDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructDecl?: (ctx: StructDeclContext) => Result;
	/**
	 * Visit a parse tree produced by `SysY2022EParser.lambdaType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaType?: (ctx: LambdaTypeContext) => Result;
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
	 * Visit a parse tree produced by the `primaryExp4`
	 * labeled alternative in `SysY2022EParser.primaryExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExp4?: (ctx: PrimaryExp4Context) => Result;
	/**
	 * Visit a parse tree produced by `SysY2022EParser.lambdaExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaExp?: (ctx: LambdaExpContext) => Result;
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
	 * Visit a parse tree produced by the `unary4`
	 * labeled alternative in `SysY2022EParser.unaryExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary4?: (ctx: Unary4Context) => Result;
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

