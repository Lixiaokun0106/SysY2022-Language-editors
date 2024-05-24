// Generated from f:/SysY2022-4pigs/learn/LSP/SysY2022E language support/g4/SysY2022E.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link SysY2022EParser}.
 */
public interface SysY2022EListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link SysY2022EParser#compUnit}.
	 * @param ctx the parse tree
	 */
	void enterCompUnit(SysY2022EParser.CompUnitContext ctx);
	/**
	 * Exit a parse tree produced by {@link SysY2022EParser#compUnit}.
	 * @param ctx the parse tree
	 */
	void exitCompUnit(SysY2022EParser.CompUnitContext ctx);
	/**
	 * Enter a parse tree produced by {@link SysY2022EParser#decl}.
	 * @param ctx the parse tree
	 */
	void enterDecl(SysY2022EParser.DeclContext ctx);
	/**
	 * Exit a parse tree produced by {@link SysY2022EParser#decl}.
	 * @param ctx the parse tree
	 */
	void exitDecl(SysY2022EParser.DeclContext ctx);
	/**
	 * Enter a parse tree produced by {@link SysY2022EParser#constDecl}.
	 * @param ctx the parse tree
	 */
	void enterConstDecl(SysY2022EParser.ConstDeclContext ctx);
	/**
	 * Exit a parse tree produced by {@link SysY2022EParser#constDecl}.
	 * @param ctx the parse tree
	 */
	void exitConstDecl(SysY2022EParser.ConstDeclContext ctx);
	/**
	 * Enter a parse tree produced by {@link SysY2022EParser#bType}.
	 * @param ctx the parse tree
	 */
	void enterBType(SysY2022EParser.BTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link SysY2022EParser#bType}.
	 * @param ctx the parse tree
	 */
	void exitBType(SysY2022EParser.BTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link SysY2022EParser#constDef}.
	 * @param ctx the parse tree
	 */
	void enterConstDef(SysY2022EParser.ConstDefContext ctx);
	/**
	 * Exit a parse tree produced by {@link SysY2022EParser#constDef}.
	 * @param ctx the parse tree
	 */
	void exitConstDef(SysY2022EParser.ConstDefContext ctx);
	/**
	 * Enter a parse tree produced by the {@code scalarConstInitVal}
	 * labeled alternative in {@link SysY2022EParser#constInitVal}.
	 * @param ctx the parse tree
	 */
	void enterScalarConstInitVal(SysY2022EParser.ScalarConstInitValContext ctx);
	/**
	 * Exit a parse tree produced by the {@code scalarConstInitVal}
	 * labeled alternative in {@link SysY2022EParser#constInitVal}.
	 * @param ctx the parse tree
	 */
	void exitScalarConstInitVal(SysY2022EParser.ScalarConstInitValContext ctx);
	/**
	 * Enter a parse tree produced by the {@code listConstInitVal}
	 * labeled alternative in {@link SysY2022EParser#constInitVal}.
	 * @param ctx the parse tree
	 */
	void enterListConstInitVal(SysY2022EParser.ListConstInitValContext ctx);
	/**
	 * Exit a parse tree produced by the {@code listConstInitVal}
	 * labeled alternative in {@link SysY2022EParser#constInitVal}.
	 * @param ctx the parse tree
	 */
	void exitListConstInitVal(SysY2022EParser.ListConstInitValContext ctx);
	/**
	 * Enter a parse tree produced by {@link SysY2022EParser#varDecl}.
	 * @param ctx the parse tree
	 */
	void enterVarDecl(SysY2022EParser.VarDeclContext ctx);
	/**
	 * Exit a parse tree produced by {@link SysY2022EParser#varDecl}.
	 * @param ctx the parse tree
	 */
	void exitVarDecl(SysY2022EParser.VarDeclContext ctx);
	/**
	 * Enter a parse tree produced by the {@code uninitVarDef}
	 * labeled alternative in {@link SysY2022EParser#varDef}.
	 * @param ctx the parse tree
	 */
	void enterUninitVarDef(SysY2022EParser.UninitVarDefContext ctx);
	/**
	 * Exit a parse tree produced by the {@code uninitVarDef}
	 * labeled alternative in {@link SysY2022EParser#varDef}.
	 * @param ctx the parse tree
	 */
	void exitUninitVarDef(SysY2022EParser.UninitVarDefContext ctx);
	/**
	 * Enter a parse tree produced by the {@code initVarDef}
	 * labeled alternative in {@link SysY2022EParser#varDef}.
	 * @param ctx the parse tree
	 */
	void enterInitVarDef(SysY2022EParser.InitVarDefContext ctx);
	/**
	 * Exit a parse tree produced by the {@code initVarDef}
	 * labeled alternative in {@link SysY2022EParser#varDef}.
	 * @param ctx the parse tree
	 */
	void exitInitVarDef(SysY2022EParser.InitVarDefContext ctx);
	/**
	 * Enter a parse tree produced by the {@code scalarInitVal}
	 * labeled alternative in {@link SysY2022EParser#initVal}.
	 * @param ctx the parse tree
	 */
	void enterScalarInitVal(SysY2022EParser.ScalarInitValContext ctx);
	/**
	 * Exit a parse tree produced by the {@code scalarInitVal}
	 * labeled alternative in {@link SysY2022EParser#initVal}.
	 * @param ctx the parse tree
	 */
	void exitScalarInitVal(SysY2022EParser.ScalarInitValContext ctx);
	/**
	 * Enter a parse tree produced by the {@code listInitval}
	 * labeled alternative in {@link SysY2022EParser#initVal}.
	 * @param ctx the parse tree
	 */
	void enterListInitval(SysY2022EParser.ListInitvalContext ctx);
	/**
	 * Exit a parse tree produced by the {@code listInitval}
	 * labeled alternative in {@link SysY2022EParser#initVal}.
	 * @param ctx the parse tree
	 */
	void exitListInitval(SysY2022EParser.ListInitvalContext ctx);
	/**
	 * Enter a parse tree produced by {@link SysY2022EParser#funcDef}.
	 * @param ctx the parse tree
	 */
	void enterFuncDef(SysY2022EParser.FuncDefContext ctx);
	/**
	 * Exit a parse tree produced by {@link SysY2022EParser#funcDef}.
	 * @param ctx the parse tree
	 */
	void exitFuncDef(SysY2022EParser.FuncDefContext ctx);
	/**
	 * Enter a parse tree produced by {@link SysY2022EParser#funcType}.
	 * @param ctx the parse tree
	 */
	void enterFuncType(SysY2022EParser.FuncTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link SysY2022EParser#funcType}.
	 * @param ctx the parse tree
	 */
	void exitFuncType(SysY2022EParser.FuncTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link SysY2022EParser#funcFParams}.
	 * @param ctx the parse tree
	 */
	void enterFuncFParams(SysY2022EParser.FuncFParamsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SysY2022EParser#funcFParams}.
	 * @param ctx the parse tree
	 */
	void exitFuncFParams(SysY2022EParser.FuncFParamsContext ctx);
	/**
	 * Enter a parse tree produced by {@link SysY2022EParser#funcFParam}.
	 * @param ctx the parse tree
	 */
	void enterFuncFParam(SysY2022EParser.FuncFParamContext ctx);
	/**
	 * Exit a parse tree produced by {@link SysY2022EParser#funcFParam}.
	 * @param ctx the parse tree
	 */
	void exitFuncFParam(SysY2022EParser.FuncFParamContext ctx);
	/**
	 * Enter a parse tree produced by {@link SysY2022EParser#block}.
	 * @param ctx the parse tree
	 */
	void enterBlock(SysY2022EParser.BlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link SysY2022EParser#block}.
	 * @param ctx the parse tree
	 */
	void exitBlock(SysY2022EParser.BlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link SysY2022EParser#blockItem}.
	 * @param ctx the parse tree
	 */
	void enterBlockItem(SysY2022EParser.BlockItemContext ctx);
	/**
	 * Exit a parse tree produced by {@link SysY2022EParser#blockItem}.
	 * @param ctx the parse tree
	 */
	void exitBlockItem(SysY2022EParser.BlockItemContext ctx);
	/**
	 * Enter a parse tree produced by the {@code assignment}
	 * labeled alternative in {@link SysY2022EParser#stmt}.
	 * @param ctx the parse tree
	 */
	void enterAssignment(SysY2022EParser.AssignmentContext ctx);
	/**
	 * Exit a parse tree produced by the {@code assignment}
	 * labeled alternative in {@link SysY2022EParser#stmt}.
	 * @param ctx the parse tree
	 */
	void exitAssignment(SysY2022EParser.AssignmentContext ctx);
	/**
	 * Enter a parse tree produced by the {@code expStmt}
	 * labeled alternative in {@link SysY2022EParser#stmt}.
	 * @param ctx the parse tree
	 */
	void enterExpStmt(SysY2022EParser.ExpStmtContext ctx);
	/**
	 * Exit a parse tree produced by the {@code expStmt}
	 * labeled alternative in {@link SysY2022EParser#stmt}.
	 * @param ctx the parse tree
	 */
	void exitExpStmt(SysY2022EParser.ExpStmtContext ctx);
	/**
	 * Enter a parse tree produced by the {@code blockStmt}
	 * labeled alternative in {@link SysY2022EParser#stmt}.
	 * @param ctx the parse tree
	 */
	void enterBlockStmt(SysY2022EParser.BlockStmtContext ctx);
	/**
	 * Exit a parse tree produced by the {@code blockStmt}
	 * labeled alternative in {@link SysY2022EParser#stmt}.
	 * @param ctx the parse tree
	 */
	void exitBlockStmt(SysY2022EParser.BlockStmtContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ifStmt1}
	 * labeled alternative in {@link SysY2022EParser#stmt}.
	 * @param ctx the parse tree
	 */
	void enterIfStmt1(SysY2022EParser.IfStmt1Context ctx);
	/**
	 * Exit a parse tree produced by the {@code ifStmt1}
	 * labeled alternative in {@link SysY2022EParser#stmt}.
	 * @param ctx the parse tree
	 */
	void exitIfStmt1(SysY2022EParser.IfStmt1Context ctx);
	/**
	 * Enter a parse tree produced by the {@code ifStmt2}
	 * labeled alternative in {@link SysY2022EParser#stmt}.
	 * @param ctx the parse tree
	 */
	void enterIfStmt2(SysY2022EParser.IfStmt2Context ctx);
	/**
	 * Exit a parse tree produced by the {@code ifStmt2}
	 * labeled alternative in {@link SysY2022EParser#stmt}.
	 * @param ctx the parse tree
	 */
	void exitIfStmt2(SysY2022EParser.IfStmt2Context ctx);
	/**
	 * Enter a parse tree produced by the {@code whileStmt}
	 * labeled alternative in {@link SysY2022EParser#stmt}.
	 * @param ctx the parse tree
	 */
	void enterWhileStmt(SysY2022EParser.WhileStmtContext ctx);
	/**
	 * Exit a parse tree produced by the {@code whileStmt}
	 * labeled alternative in {@link SysY2022EParser#stmt}.
	 * @param ctx the parse tree
	 */
	void exitWhileStmt(SysY2022EParser.WhileStmtContext ctx);
	/**
	 * Enter a parse tree produced by the {@code breakStmt}
	 * labeled alternative in {@link SysY2022EParser#stmt}.
	 * @param ctx the parse tree
	 */
	void enterBreakStmt(SysY2022EParser.BreakStmtContext ctx);
	/**
	 * Exit a parse tree produced by the {@code breakStmt}
	 * labeled alternative in {@link SysY2022EParser#stmt}.
	 * @param ctx the parse tree
	 */
	void exitBreakStmt(SysY2022EParser.BreakStmtContext ctx);
	/**
	 * Enter a parse tree produced by the {@code continueStmt}
	 * labeled alternative in {@link SysY2022EParser#stmt}.
	 * @param ctx the parse tree
	 */
	void enterContinueStmt(SysY2022EParser.ContinueStmtContext ctx);
	/**
	 * Exit a parse tree produced by the {@code continueStmt}
	 * labeled alternative in {@link SysY2022EParser#stmt}.
	 * @param ctx the parse tree
	 */
	void exitContinueStmt(SysY2022EParser.ContinueStmtContext ctx);
	/**
	 * Enter a parse tree produced by the {@code returnStmt}
	 * labeled alternative in {@link SysY2022EParser#stmt}.
	 * @param ctx the parse tree
	 */
	void enterReturnStmt(SysY2022EParser.ReturnStmtContext ctx);
	/**
	 * Exit a parse tree produced by the {@code returnStmt}
	 * labeled alternative in {@link SysY2022EParser#stmt}.
	 * @param ctx the parse tree
	 */
	void exitReturnStmt(SysY2022EParser.ReturnStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link SysY2022EParser#exp}.
	 * @param ctx the parse tree
	 */
	void enterExp(SysY2022EParser.ExpContext ctx);
	/**
	 * Exit a parse tree produced by {@link SysY2022EParser#exp}.
	 * @param ctx the parse tree
	 */
	void exitExp(SysY2022EParser.ExpContext ctx);
	/**
	 * Enter a parse tree produced by {@link SysY2022EParser#cond}.
	 * @param ctx the parse tree
	 */
	void enterCond(SysY2022EParser.CondContext ctx);
	/**
	 * Exit a parse tree produced by {@link SysY2022EParser#cond}.
	 * @param ctx the parse tree
	 */
	void exitCond(SysY2022EParser.CondContext ctx);
	/**
	 * Enter a parse tree produced by {@link SysY2022EParser#lVal}.
	 * @param ctx the parse tree
	 */
	void enterLVal(SysY2022EParser.LValContext ctx);
	/**
	 * Exit a parse tree produced by {@link SysY2022EParser#lVal}.
	 * @param ctx the parse tree
	 */
	void exitLVal(SysY2022EParser.LValContext ctx);
	/**
	 * Enter a parse tree produced by the {@code primaryExp1}
	 * labeled alternative in {@link SysY2022EParser#primaryExp}.
	 * @param ctx the parse tree
	 */
	void enterPrimaryExp1(SysY2022EParser.PrimaryExp1Context ctx);
	/**
	 * Exit a parse tree produced by the {@code primaryExp1}
	 * labeled alternative in {@link SysY2022EParser#primaryExp}.
	 * @param ctx the parse tree
	 */
	void exitPrimaryExp1(SysY2022EParser.PrimaryExp1Context ctx);
	/**
	 * Enter a parse tree produced by the {@code primaryExp2}
	 * labeled alternative in {@link SysY2022EParser#primaryExp}.
	 * @param ctx the parse tree
	 */
	void enterPrimaryExp2(SysY2022EParser.PrimaryExp2Context ctx);
	/**
	 * Exit a parse tree produced by the {@code primaryExp2}
	 * labeled alternative in {@link SysY2022EParser#primaryExp}.
	 * @param ctx the parse tree
	 */
	void exitPrimaryExp2(SysY2022EParser.PrimaryExp2Context ctx);
	/**
	 * Enter a parse tree produced by the {@code primaryExp3}
	 * labeled alternative in {@link SysY2022EParser#primaryExp}.
	 * @param ctx the parse tree
	 */
	void enterPrimaryExp3(SysY2022EParser.PrimaryExp3Context ctx);
	/**
	 * Exit a parse tree produced by the {@code primaryExp3}
	 * labeled alternative in {@link SysY2022EParser#primaryExp}.
	 * @param ctx the parse tree
	 */
	void exitPrimaryExp3(SysY2022EParser.PrimaryExp3Context ctx);
	/**
	 * Enter a parse tree produced by {@link SysY2022EParser#number}.
	 * @param ctx the parse tree
	 */
	void enterNumber(SysY2022EParser.NumberContext ctx);
	/**
	 * Exit a parse tree produced by {@link SysY2022EParser#number}.
	 * @param ctx the parse tree
	 */
	void exitNumber(SysY2022EParser.NumberContext ctx);
	/**
	 * Enter a parse tree produced by the {@code unary1}
	 * labeled alternative in {@link SysY2022EParser#unaryExp}.
	 * @param ctx the parse tree
	 */
	void enterUnary1(SysY2022EParser.Unary1Context ctx);
	/**
	 * Exit a parse tree produced by the {@code unary1}
	 * labeled alternative in {@link SysY2022EParser#unaryExp}.
	 * @param ctx the parse tree
	 */
	void exitUnary1(SysY2022EParser.Unary1Context ctx);
	/**
	 * Enter a parse tree produced by the {@code unary2}
	 * labeled alternative in {@link SysY2022EParser#unaryExp}.
	 * @param ctx the parse tree
	 */
	void enterUnary2(SysY2022EParser.Unary2Context ctx);
	/**
	 * Exit a parse tree produced by the {@code unary2}
	 * labeled alternative in {@link SysY2022EParser#unaryExp}.
	 * @param ctx the parse tree
	 */
	void exitUnary2(SysY2022EParser.Unary2Context ctx);
	/**
	 * Enter a parse tree produced by the {@code unary3}
	 * labeled alternative in {@link SysY2022EParser#unaryExp}.
	 * @param ctx the parse tree
	 */
	void enterUnary3(SysY2022EParser.Unary3Context ctx);
	/**
	 * Exit a parse tree produced by the {@code unary3}
	 * labeled alternative in {@link SysY2022EParser#unaryExp}.
	 * @param ctx the parse tree
	 */
	void exitUnary3(SysY2022EParser.Unary3Context ctx);
	/**
	 * Enter a parse tree produced by {@link SysY2022EParser#unaryOp}.
	 * @param ctx the parse tree
	 */
	void enterUnaryOp(SysY2022EParser.UnaryOpContext ctx);
	/**
	 * Exit a parse tree produced by {@link SysY2022EParser#unaryOp}.
	 * @param ctx the parse tree
	 */
	void exitUnaryOp(SysY2022EParser.UnaryOpContext ctx);
	/**
	 * Enter a parse tree produced by {@link SysY2022EParser#funcRParams}.
	 * @param ctx the parse tree
	 */
	void enterFuncRParams(SysY2022EParser.FuncRParamsContext ctx);
	/**
	 * Exit a parse tree produced by {@link SysY2022EParser#funcRParams}.
	 * @param ctx the parse tree
	 */
	void exitFuncRParams(SysY2022EParser.FuncRParamsContext ctx);
	/**
	 * Enter a parse tree produced by the {@code expAsRParam}
	 * labeled alternative in {@link SysY2022EParser#funcRParam}.
	 * @param ctx the parse tree
	 */
	void enterExpAsRParam(SysY2022EParser.ExpAsRParamContext ctx);
	/**
	 * Exit a parse tree produced by the {@code expAsRParam}
	 * labeled alternative in {@link SysY2022EParser#funcRParam}.
	 * @param ctx the parse tree
	 */
	void exitExpAsRParam(SysY2022EParser.ExpAsRParamContext ctx);
	/**
	 * Enter a parse tree produced by the {@code stringAsRParam}
	 * labeled alternative in {@link SysY2022EParser#funcRParam}.
	 * @param ctx the parse tree
	 */
	void enterStringAsRParam(SysY2022EParser.StringAsRParamContext ctx);
	/**
	 * Exit a parse tree produced by the {@code stringAsRParam}
	 * labeled alternative in {@link SysY2022EParser#funcRParam}.
	 * @param ctx the parse tree
	 */
	void exitStringAsRParam(SysY2022EParser.StringAsRParamContext ctx);
	/**
	 * Enter a parse tree produced by the {@code mul2}
	 * labeled alternative in {@link SysY2022EParser#mulExp}.
	 * @param ctx the parse tree
	 */
	void enterMul2(SysY2022EParser.Mul2Context ctx);
	/**
	 * Exit a parse tree produced by the {@code mul2}
	 * labeled alternative in {@link SysY2022EParser#mulExp}.
	 * @param ctx the parse tree
	 */
	void exitMul2(SysY2022EParser.Mul2Context ctx);
	/**
	 * Enter a parse tree produced by the {@code mul1}
	 * labeled alternative in {@link SysY2022EParser#mulExp}.
	 * @param ctx the parse tree
	 */
	void enterMul1(SysY2022EParser.Mul1Context ctx);
	/**
	 * Exit a parse tree produced by the {@code mul1}
	 * labeled alternative in {@link SysY2022EParser#mulExp}.
	 * @param ctx the parse tree
	 */
	void exitMul1(SysY2022EParser.Mul1Context ctx);
	/**
	 * Enter a parse tree produced by the {@code add2}
	 * labeled alternative in {@link SysY2022EParser#addExp}.
	 * @param ctx the parse tree
	 */
	void enterAdd2(SysY2022EParser.Add2Context ctx);
	/**
	 * Exit a parse tree produced by the {@code add2}
	 * labeled alternative in {@link SysY2022EParser#addExp}.
	 * @param ctx the parse tree
	 */
	void exitAdd2(SysY2022EParser.Add2Context ctx);
	/**
	 * Enter a parse tree produced by the {@code add1}
	 * labeled alternative in {@link SysY2022EParser#addExp}.
	 * @param ctx the parse tree
	 */
	void enterAdd1(SysY2022EParser.Add1Context ctx);
	/**
	 * Exit a parse tree produced by the {@code add1}
	 * labeled alternative in {@link SysY2022EParser#addExp}.
	 * @param ctx the parse tree
	 */
	void exitAdd1(SysY2022EParser.Add1Context ctx);
	/**
	 * Enter a parse tree produced by the {@code rel2}
	 * labeled alternative in {@link SysY2022EParser#relExp}.
	 * @param ctx the parse tree
	 */
	void enterRel2(SysY2022EParser.Rel2Context ctx);
	/**
	 * Exit a parse tree produced by the {@code rel2}
	 * labeled alternative in {@link SysY2022EParser#relExp}.
	 * @param ctx the parse tree
	 */
	void exitRel2(SysY2022EParser.Rel2Context ctx);
	/**
	 * Enter a parse tree produced by the {@code rel1}
	 * labeled alternative in {@link SysY2022EParser#relExp}.
	 * @param ctx the parse tree
	 */
	void enterRel1(SysY2022EParser.Rel1Context ctx);
	/**
	 * Exit a parse tree produced by the {@code rel1}
	 * labeled alternative in {@link SysY2022EParser#relExp}.
	 * @param ctx the parse tree
	 */
	void exitRel1(SysY2022EParser.Rel1Context ctx);
	/**
	 * Enter a parse tree produced by the {@code eq1}
	 * labeled alternative in {@link SysY2022EParser#eqExp}.
	 * @param ctx the parse tree
	 */
	void enterEq1(SysY2022EParser.Eq1Context ctx);
	/**
	 * Exit a parse tree produced by the {@code eq1}
	 * labeled alternative in {@link SysY2022EParser#eqExp}.
	 * @param ctx the parse tree
	 */
	void exitEq1(SysY2022EParser.Eq1Context ctx);
	/**
	 * Enter a parse tree produced by the {@code eq2}
	 * labeled alternative in {@link SysY2022EParser#eqExp}.
	 * @param ctx the parse tree
	 */
	void enterEq2(SysY2022EParser.Eq2Context ctx);
	/**
	 * Exit a parse tree produced by the {@code eq2}
	 * labeled alternative in {@link SysY2022EParser#eqExp}.
	 * @param ctx the parse tree
	 */
	void exitEq2(SysY2022EParser.Eq2Context ctx);
	/**
	 * Enter a parse tree produced by the {@code lAnd2}
	 * labeled alternative in {@link SysY2022EParser#lAndExp}.
	 * @param ctx the parse tree
	 */
	void enterLAnd2(SysY2022EParser.LAnd2Context ctx);
	/**
	 * Exit a parse tree produced by the {@code lAnd2}
	 * labeled alternative in {@link SysY2022EParser#lAndExp}.
	 * @param ctx the parse tree
	 */
	void exitLAnd2(SysY2022EParser.LAnd2Context ctx);
	/**
	 * Enter a parse tree produced by the {@code lAnd1}
	 * labeled alternative in {@link SysY2022EParser#lAndExp}.
	 * @param ctx the parse tree
	 */
	void enterLAnd1(SysY2022EParser.LAnd1Context ctx);
	/**
	 * Exit a parse tree produced by the {@code lAnd1}
	 * labeled alternative in {@link SysY2022EParser#lAndExp}.
	 * @param ctx the parse tree
	 */
	void exitLAnd1(SysY2022EParser.LAnd1Context ctx);
	/**
	 * Enter a parse tree produced by the {@code lOr1}
	 * labeled alternative in {@link SysY2022EParser#lOrExp}.
	 * @param ctx the parse tree
	 */
	void enterLOr1(SysY2022EParser.LOr1Context ctx);
	/**
	 * Exit a parse tree produced by the {@code lOr1}
	 * labeled alternative in {@link SysY2022EParser#lOrExp}.
	 * @param ctx the parse tree
	 */
	void exitLOr1(SysY2022EParser.LOr1Context ctx);
	/**
	 * Enter a parse tree produced by the {@code lOr2}
	 * labeled alternative in {@link SysY2022EParser#lOrExp}.
	 * @param ctx the parse tree
	 */
	void enterLOr2(SysY2022EParser.LOr2Context ctx);
	/**
	 * Exit a parse tree produced by the {@code lOr2}
	 * labeled alternative in {@link SysY2022EParser#lOrExp}.
	 * @param ctx the parse tree
	 */
	void exitLOr2(SysY2022EParser.LOr2Context ctx);
	/**
	 * Enter a parse tree produced by {@link SysY2022EParser#constExp}.
	 * @param ctx the parse tree
	 */
	void enterConstExp(SysY2022EParser.ConstExpContext ctx);
	/**
	 * Exit a parse tree produced by {@link SysY2022EParser#constExp}.
	 * @param ctx the parse tree
	 */
	void exitConstExp(SysY2022EParser.ConstExpContext ctx);
}