// Generated from SysY2022E.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import SysY2022EListener from "../listener/SysY2022EListener";
import SysY2022EVisitor from "../visitor/SysY2022EVisitor";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export class SysY2022EParser extends Parser {
	public static readonly INT = 1;
	public static readonly FLOAT = 2;
	public static readonly VOID = 3;
	public static readonly CONST = 4;
	public static readonly RETURN = 5;
	public static readonly IF = 6;
	public static readonly ELSE = 7;
	public static readonly WHILE = 8;
	public static readonly BREAK = 9;
	public static readonly CONTINUE = 10;
	public static readonly FOR = 11;
	public static readonly LP = 12;
	public static readonly RP = 13;
	public static readonly LB = 14;
	public static readonly RB = 15;
	public static readonly LC = 16;
	public static readonly RC = 17;
	public static readonly COMMA = 18;
	public static readonly SEMICOLON = 19;
	public static readonly QUESTION = 20;
	public static readonly COLON = 21;
	public static readonly MINUS = 22;
	public static readonly NOT = 23;
	public static readonly ASSIGN = 24;
	public static readonly ADD = 25;
	public static readonly MUL = 26;
	public static readonly DIV = 27;
	public static readonly MOD = 28;
	public static readonly AND = 29;
	public static readonly OR = 30;
	public static readonly EQ = 31;
	public static readonly NEQ = 32;
	public static readonly LT = 33;
	public static readonly LE = 34;
	public static readonly GT = 35;
	public static readonly GE = 36;
	public static readonly INT_LIT = 37;
	public static readonly FLOAT_LIT = 38;
	public static readonly ID = 39;
	public static readonly STRING = 40;
	public static readonly WS = 41;
	public static readonly LINE_COMMENT = 42;
	public static readonly BLOCK_COMMENT = 43;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_compUnit = 0;
	public static readonly RULE_decl = 1;
	public static readonly RULE_constDecl = 2;
	public static readonly RULE_bType = 3;
	public static readonly RULE_constDef = 4;
	public static readonly RULE_constInitVal = 5;
	public static readonly RULE_varDecl = 6;
	public static readonly RULE_varDef = 7;
	public static readonly RULE_initVal = 8;
	public static readonly RULE_funcDef = 9;
	public static readonly RULE_funcType = 10;
	public static readonly RULE_funcFParams = 11;
	public static readonly RULE_funcFParam = 12;
	public static readonly RULE_block = 13;
	public static readonly RULE_blockItem = 14;
	public static readonly RULE_stmt = 15;
	public static readonly RULE_exp = 16;
	public static readonly RULE_cond = 17;
	public static readonly RULE_lVal = 18;
	public static readonly RULE_primaryExp = 19;
	public static readonly RULE_number = 20;
	public static readonly RULE_unaryExp = 21;
	public static readonly RULE_unaryOp = 22;
	public static readonly RULE_funcRParams = 23;
	public static readonly RULE_funcRParam = 24;
	public static readonly RULE_mulExp = 25;
	public static readonly RULE_addExp = 26;
	public static readonly RULE_relExp = 27;
	public static readonly RULE_eqExp = 28;
	public static readonly RULE_lAndExp = 29;
	public static readonly RULE_lOrExp = 30;
	public static readonly RULE_constExp = 31;
	public static readonly literalNames: (string | null)[] = [ null, "'int'", 
                                                            "'float'", "'void'", 
                                                            "'const'", "'return'", 
                                                            "'if'", "'else'", 
                                                            "'while'", "'break'", 
                                                            "'continue'", 
                                                            "'for'", "'('", 
                                                            "')'", "'['", 
                                                            "']'", "'{'", 
                                                            "'}'", "','", 
                                                            "';'", "'?'", 
                                                            "':'", "'-'", 
                                                            "'!'", "'='", 
                                                            "'+'", "'*'", 
                                                            "'/'", "'%'", 
                                                            "'&&'", "'||'", 
                                                            "'=='", "'!='", 
                                                            "'<'", "'<='", 
                                                            "'>'", "'>='" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "INT", 
                                                             "FLOAT", "VOID", 
                                                             "CONST", "RETURN", 
                                                             "IF", "ELSE", 
                                                             "WHILE", "BREAK", 
                                                             "CONTINUE", 
                                                             "FOR", "LP", 
                                                             "RP", "LB", 
                                                             "RB", "LC", 
                                                             "RC", "COMMA", 
                                                             "SEMICOLON", 
                                                             "QUESTION", 
                                                             "COLON", "MINUS", 
                                                             "NOT", "ASSIGN", 
                                                             "ADD", "MUL", 
                                                             "DIV", "MOD", 
                                                             "AND", "OR", 
                                                             "EQ", "NEQ", 
                                                             "LT", "LE", 
                                                             "GT", "GE", 
                                                             "INT_LIT", 
                                                             "FLOAT_LIT", 
                                                             "ID", "STRING", 
                                                             "WS", "LINE_COMMENT", 
                                                             "BLOCK_COMMENT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compUnit", "decl", "constDecl", "bType", "constDef", "constInitVal", 
		"varDecl", "varDef", "initVal", "funcDef", "funcType", "funcFParams", 
		"funcFParam", "block", "blockItem", "stmt", "exp", "cond", "lVal", "primaryExp", 
		"number", "unaryExp", "unaryOp", "funcRParams", "funcRParam", "mulExp", 
		"addExp", "relExp", "eqExp", "lAndExp", "lOrExp", "constExp",
	];
	public get grammarFileName(): string { return "SysY2022E.g4"; }
	public get literalNames(): (string | null)[] { return SysY2022EParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return SysY2022EParser.symbolicNames; }
	public get ruleNames(): string[] { return SysY2022EParser.ruleNames; }
	public get serializedATN(): number[] { return SysY2022EParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, SysY2022EParser._ATN, SysY2022EParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public compUnit(): CompUnitContext {
		let localctx: CompUnitContext = new CompUnitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, SysY2022EParser.RULE_compUnit);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 68;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 30) !== 0)) {
				{
				this.state = 66;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 64;
					this.decl();
					}
					break;
				case 2:
					{
					this.state = 65;
					this.funcDef();
					}
					break;
				}
				}
				this.state = 70;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 71;
			this.match(SysY2022EParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public decl(): DeclContext {
		let localctx: DeclContext = new DeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, SysY2022EParser.RULE_decl);
		try {
			this.state = 75;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 73;
				this.constDecl();
				}
				break;
			case 1:
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 74;
				this.varDecl();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constDecl(): ConstDeclContext {
		let localctx: ConstDeclContext = new ConstDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, SysY2022EParser.RULE_constDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 77;
			this.match(SysY2022EParser.CONST);
			this.state = 78;
			this.bType();
			this.state = 79;
			this.constDef();
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18) {
				{
				{
				this.state = 80;
				this.match(SysY2022EParser.COMMA);
				this.state = 81;
				this.constDef();
				}
				}
				this.state = 86;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 87;
			this.match(SysY2022EParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bType(): BTypeContext {
		let localctx: BTypeContext = new BTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, SysY2022EParser.RULE_bType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 89;
			_la = this._input.LA(1);
			if(!(_la===1 || _la===2)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constDef(): ConstDefContext {
		let localctx: ConstDefContext = new ConstDefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, SysY2022EParser.RULE_constDef);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 91;
			this.match(SysY2022EParser.ID);
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===14) {
				{
				{
				this.state = 92;
				this.match(SysY2022EParser.LB);
				this.state = 93;
				this.constExp();
				this.state = 94;
				this.match(SysY2022EParser.RB);
				}
				}
				this.state = 100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 101;
			this.match(SysY2022EParser.ASSIGN);
			this.state = 102;
			this.constInitVal();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constInitVal(): ConstInitValContext {
		let localctx: ConstInitValContext = new ConstInitValContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, SysY2022EParser.RULE_constInitVal);
		let _la: number;
		try {
			this.state = 117;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 12:
			case 22:
			case 23:
			case 25:
			case 37:
			case 38:
			case 39:
				localctx = new ScalarConstInitValContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 104;
				this.constExp();
				}
				break;
			case 16:
				localctx = new ListConstInitValContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 105;
				this.match(SysY2022EParser.LC);
				this.state = 114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & 234892305) !== 0)) {
					{
					this.state = 106;
					this.constInitVal();
					this.state = 111;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===18) {
						{
						{
						this.state = 107;
						this.match(SysY2022EParser.COMMA);
						this.state = 108;
						this.constInitVal();
						}
						}
						this.state = 113;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 116;
				this.match(SysY2022EParser.RC);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public varDecl(): VarDeclContext {
		let localctx: VarDeclContext = new VarDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, SysY2022EParser.RULE_varDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 119;
			this.bType();
			this.state = 120;
			this.varDef();
			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18) {
				{
				{
				this.state = 121;
				this.match(SysY2022EParser.COMMA);
				this.state = 122;
				this.varDef();
				}
				}
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 128;
			this.match(SysY2022EParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public varDef(): VarDefContext {
		let localctx: VarDefContext = new VarDefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, SysY2022EParser.RULE_varDef);
		let _la: number;
		try {
			this.state = 152;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				localctx = new UninitVarDefContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 130;
				this.match(SysY2022EParser.ID);
				this.state = 137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===14) {
					{
					{
					this.state = 131;
					this.match(SysY2022EParser.LB);
					this.state = 132;
					this.constExp();
					this.state = 133;
					this.match(SysY2022EParser.RB);
					}
					}
					this.state = 139;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 2:
				localctx = new InitVarDefContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 140;
				this.match(SysY2022EParser.ID);
				this.state = 147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===14) {
					{
					{
					this.state = 141;
					this.match(SysY2022EParser.LB);
					this.state = 142;
					this.constExp();
					this.state = 143;
					this.match(SysY2022EParser.RB);
					}
					}
					this.state = 149;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 150;
				this.match(SysY2022EParser.ASSIGN);
				this.state = 151;
				this.initVal();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public initVal(): InitValContext {
		let localctx: InitValContext = new InitValContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, SysY2022EParser.RULE_initVal);
		let _la: number;
		try {
			this.state = 167;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 12:
			case 22:
			case 23:
			case 25:
			case 37:
			case 38:
			case 39:
				localctx = new ScalarInitValContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 154;
				this.exp();
				}
				break;
			case 16:
				localctx = new ListInitvalContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 155;
				this.match(SysY2022EParser.LC);
				this.state = 164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & 234892305) !== 0)) {
					{
					this.state = 156;
					this.initVal();
					this.state = 161;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===18) {
						{
						{
						this.state = 157;
						this.match(SysY2022EParser.COMMA);
						this.state = 158;
						this.initVal();
						}
						}
						this.state = 163;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 166;
				this.match(SysY2022EParser.RC);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public funcDef(): FuncDefContext {
		let localctx: FuncDefContext = new FuncDefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, SysY2022EParser.RULE_funcDef);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 169;
			this.funcType();
			this.state = 170;
			this.match(SysY2022EParser.ID);
			this.state = 171;
			this.match(SysY2022EParser.LP);
			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1 || _la===2) {
				{
				this.state = 172;
				this.funcFParams();
				}
			}

			this.state = 175;
			this.match(SysY2022EParser.RP);
			this.state = 176;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public funcType(): FuncTypeContext {
		let localctx: FuncTypeContext = new FuncTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, SysY2022EParser.RULE_funcType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 178;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 14) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public funcFParams(): FuncFParamsContext {
		let localctx: FuncFParamsContext = new FuncFParamsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, SysY2022EParser.RULE_funcFParams);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 180;
			this.funcFParam();
			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18) {
				{
				{
				this.state = 181;
				this.match(SysY2022EParser.COMMA);
				this.state = 182;
				this.funcFParam();
				}
				}
				this.state = 187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public funcFParam(): FuncFParamContext {
		let localctx: FuncFParamContext = new FuncFParamContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, SysY2022EParser.RULE_funcFParam);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 188;
			this.bType();
			this.state = 189;
			this.match(SysY2022EParser.ID);
			this.state = 201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14) {
				{
				this.state = 190;
				this.match(SysY2022EParser.LB);
				this.state = 191;
				this.match(SysY2022EParser.RB);
				this.state = 198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===14) {
					{
					{
					this.state = 192;
					this.match(SysY2022EParser.LB);
					this.state = 193;
					this.constExp();
					this.state = 194;
					this.match(SysY2022EParser.RB);
					}
					}
					this.state = 200;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, SysY2022EParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 203;
			this.match(SysY2022EParser.LC);
			this.state = 207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 46733174) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 7) !== 0)) {
				{
				{
				this.state = 204;
				this.blockItem();
				}
				}
				this.state = 209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 210;
			this.match(SysY2022EParser.RC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public blockItem(): BlockItemContext {
		let localctx: BlockItemContext = new BlockItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, SysY2022EParser.RULE_blockItem);
		try {
			this.state = 214;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 4:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 212;
				this.decl();
				}
				break;
			case 5:
			case 6:
			case 8:
			case 9:
			case 10:
			case 12:
			case 16:
			case 19:
			case 22:
			case 23:
			case 25:
			case 37:
			case 38:
			case 39:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 213;
				this.stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let localctx: StmtContext = new StmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, SysY2022EParser.RULE_stmt);
		let _la: number;
		try {
			this.state = 255;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				localctx = new AssignmentContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 216;
				this.lVal();
				this.state = 217;
				this.match(SysY2022EParser.ASSIGN);
				this.state = 218;
				this.exp();
				this.state = 219;
				this.match(SysY2022EParser.SEMICOLON);
				}
				break;
			case 2:
				localctx = new ExpStmtContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 222;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & 234892289) !== 0)) {
					{
					this.state = 221;
					this.exp();
					}
				}

				this.state = 224;
				this.match(SysY2022EParser.SEMICOLON);
				}
				break;
			case 3:
				localctx = new BlockStmtContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 225;
				this.block();
				}
				break;
			case 4:
				localctx = new IfStmt1Context(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 226;
				this.match(SysY2022EParser.IF);
				this.state = 227;
				this.match(SysY2022EParser.LP);
				this.state = 228;
				this.cond();
				this.state = 229;
				this.match(SysY2022EParser.RP);
				this.state = 230;
				this.stmt();
				}
				break;
			case 5:
				localctx = new IfStmt2Context(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 232;
				this.match(SysY2022EParser.IF);
				this.state = 233;
				this.match(SysY2022EParser.LP);
				this.state = 234;
				this.cond();
				this.state = 235;
				this.match(SysY2022EParser.RP);
				this.state = 236;
				this.stmt();
				this.state = 237;
				this.match(SysY2022EParser.ELSE);
				this.state = 238;
				this.stmt();
				}
				break;
			case 6:
				localctx = new WhileStmtContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 240;
				this.match(SysY2022EParser.WHILE);
				this.state = 241;
				this.match(SysY2022EParser.LP);
				this.state = 242;
				this.cond();
				this.state = 243;
				this.match(SysY2022EParser.RP);
				this.state = 244;
				this.stmt();
				}
				break;
			case 7:
				localctx = new BreakStmtContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 246;
				this.match(SysY2022EParser.BREAK);
				this.state = 247;
				this.match(SysY2022EParser.SEMICOLON);
				}
				break;
			case 8:
				localctx = new ContinueStmtContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 248;
				this.match(SysY2022EParser.CONTINUE);
				this.state = 249;
				this.match(SysY2022EParser.SEMICOLON);
				}
				break;
			case 9:
				localctx = new ReturnStmtContext(this, localctx);
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 250;
				this.match(SysY2022EParser.RETURN);
				this.state = 252;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & 234892289) !== 0)) {
					{
					this.state = 251;
					this.exp();
					}
				}

				this.state = 254;
				this.match(SysY2022EParser.SEMICOLON);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exp(): ExpContext {
		let localctx: ExpContext = new ExpContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, SysY2022EParser.RULE_exp);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 257;
			this.addExp(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public cond(): CondContext {
		let localctx: CondContext = new CondContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, SysY2022EParser.RULE_cond);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 259;
			this.lOrExp(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lVal(): LValContext {
		let localctx: LValContext = new LValContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, SysY2022EParser.RULE_lVal);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 261;
			this.match(SysY2022EParser.ID);
			this.state = 268;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 262;
					this.match(SysY2022EParser.LB);
					this.state = 263;
					this.exp();
					this.state = 264;
					this.match(SysY2022EParser.RB);
					}
					}
				}
				this.state = 270;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primaryExp(): PrimaryExpContext {
		let localctx: PrimaryExpContext = new PrimaryExpContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, SysY2022EParser.RULE_primaryExp);
		try {
			this.state = 277;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 12:
				localctx = new PrimaryExp1Context(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 271;
				this.match(SysY2022EParser.LP);
				this.state = 272;
				this.exp();
				this.state = 273;
				this.match(SysY2022EParser.RP);
				}
				break;
			case 39:
				localctx = new PrimaryExp2Context(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 275;
				this.lVal();
				}
				break;
			case 37:
			case 38:
				localctx = new PrimaryExp3Context(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 276;
				this.number_();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public number_(): NumberContext {
		let localctx: NumberContext = new NumberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, SysY2022EParser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 279;
			_la = this._input.LA(1);
			if(!(_la===37 || _la===38)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unaryExp(): UnaryExpContext {
		let localctx: UnaryExpContext = new UnaryExpContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, SysY2022EParser.RULE_unaryExp);
		let _la: number;
		try {
			this.state = 291;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				localctx = new Unary1Context(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 281;
				this.primaryExp();
				}
				break;
			case 2:
				localctx = new Unary2Context(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 282;
				this.match(SysY2022EParser.ID);
				this.state = 283;
				this.match(SysY2022EParser.LP);
				this.state = 285;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & 503327745) !== 0)) {
					{
					this.state = 284;
					this.funcRParams();
					}
				}

				this.state = 287;
				this.match(SysY2022EParser.RP);
				}
				break;
			case 3:
				localctx = new Unary3Context(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 288;
				this.unaryOp();
				this.state = 289;
				this.unaryExp();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unaryOp(): UnaryOpContext {
		let localctx: UnaryOpContext = new UnaryOpContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, SysY2022EParser.RULE_unaryOp);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 293;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 46137344) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public funcRParams(): FuncRParamsContext {
		let localctx: FuncRParamsContext = new FuncRParamsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, SysY2022EParser.RULE_funcRParams);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 295;
			this.funcRParam();
			this.state = 300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18) {
				{
				{
				this.state = 296;
				this.match(SysY2022EParser.COMMA);
				this.state = 297;
				this.funcRParam();
				}
				}
				this.state = 302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public funcRParam(): FuncRParamContext {
		let localctx: FuncRParamContext = new FuncRParamContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, SysY2022EParser.RULE_funcRParam);
		try {
			this.state = 305;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 12:
			case 22:
			case 23:
			case 25:
			case 37:
			case 38:
			case 39:
				localctx = new ExpAsRParamContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 303;
				this.exp();
				}
				break;
			case 40:
				localctx = new StringAsRParamContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 304;
				this.match(SysY2022EParser.STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public mulExp(): MulExpContext;
	public mulExp(_p: number): MulExpContext;
	// @RuleVersion(0)
	public mulExp(_p?: number): MulExpContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: MulExpContext = new MulExpContext(this, this._ctx, _parentState);
		let _prevctx: MulExpContext = localctx;
		let _startState: number = 50;
		this.enterRecursionRule(localctx, 50, SysY2022EParser.RULE_mulExp, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new Mul1Context(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 308;
			this.unaryExp();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 315;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new Mul2Context(this, new MulExpContext(this, _parentctx, _parentState));
					this.pushNewRecursionContext(localctx, _startState, SysY2022EParser.RULE_mulExp);
					this.state = 310;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 311;
					_la = this._input.LA(1);
					if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 469762048) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 312;
					this.unaryExp();
					}
					}
				}
				this.state = 317;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public addExp(): AddExpContext;
	public addExp(_p: number): AddExpContext;
	// @RuleVersion(0)
	public addExp(_p?: number): AddExpContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: AddExpContext = new AddExpContext(this, this._ctx, _parentState);
		let _prevctx: AddExpContext = localctx;
		let _startState: number = 52;
		this.enterRecursionRule(localctx, 52, SysY2022EParser.RULE_addExp, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new Add1Context(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 319;
			this.mulExp(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 326;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new Add2Context(this, new AddExpContext(this, _parentctx, _parentState));
					this.pushNewRecursionContext(localctx, _startState, SysY2022EParser.RULE_addExp);
					this.state = 321;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 322;
					_la = this._input.LA(1);
					if(!(_la===22 || _la===25)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 323;
					this.mulExp(0);
					}
					}
				}
				this.state = 328;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public relExp(): RelExpContext;
	public relExp(_p: number): RelExpContext;
	// @RuleVersion(0)
	public relExp(_p?: number): RelExpContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: RelExpContext = new RelExpContext(this, this._ctx, _parentState);
		let _prevctx: RelExpContext = localctx;
		let _startState: number = 54;
		this.enterRecursionRule(localctx, 54, SysY2022EParser.RULE_relExp, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new Rel1Context(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 330;
			this.addExp(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 337;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new Rel2Context(this, new RelExpContext(this, _parentctx, _parentState));
					this.pushNewRecursionContext(localctx, _startState, SysY2022EParser.RULE_relExp);
					this.state = 332;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 333;
					_la = this._input.LA(1);
					if(!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 15) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 334;
					this.addExp(0);
					}
					}
				}
				this.state = 339;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public eqExp(): EqExpContext;
	public eqExp(_p: number): EqExpContext;
	// @RuleVersion(0)
	public eqExp(_p?: number): EqExpContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: EqExpContext = new EqExpContext(this, this._ctx, _parentState);
		let _prevctx: EqExpContext = localctx;
		let _startState: number = 56;
		this.enterRecursionRule(localctx, 56, SysY2022EParser.RULE_eqExp, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new Eq1Context(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 341;
			this.relExp(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 348;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 33, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new Eq2Context(this, new EqExpContext(this, _parentctx, _parentState));
					this.pushNewRecursionContext(localctx, _startState, SysY2022EParser.RULE_eqExp);
					this.state = 343;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 344;
					_la = this._input.LA(1);
					if(!(_la===31 || _la===32)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 345;
					this.relExp(0);
					}
					}
				}
				this.state = 350;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 33, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public lAndExp(): LAndExpContext;
	public lAndExp(_p: number): LAndExpContext;
	// @RuleVersion(0)
	public lAndExp(_p?: number): LAndExpContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: LAndExpContext = new LAndExpContext(this, this._ctx, _parentState);
		let _prevctx: LAndExpContext = localctx;
		let _startState: number = 58;
		this.enterRecursionRule(localctx, 58, SysY2022EParser.RULE_lAndExp, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new LAnd1Context(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 352;
			this.eqExp(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 359;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 34, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new LAnd2Context(this, new LAndExpContext(this, _parentctx, _parentState));
					this.pushNewRecursionContext(localctx, _startState, SysY2022EParser.RULE_lAndExp);
					this.state = 354;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 355;
					this.match(SysY2022EParser.AND);
					this.state = 356;
					this.eqExp(0);
					}
					}
				}
				this.state = 361;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 34, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public lOrExp(): LOrExpContext;
	public lOrExp(_p: number): LOrExpContext;
	// @RuleVersion(0)
	public lOrExp(_p?: number): LOrExpContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: LOrExpContext = new LOrExpContext(this, this._ctx, _parentState);
		let _prevctx: LOrExpContext = localctx;
		let _startState: number = 60;
		this.enterRecursionRule(localctx, 60, SysY2022EParser.RULE_lOrExp, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new LOr1Context(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 363;
			this.lAndExp(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 370;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new LOr2Context(this, new LOrExpContext(this, _parentctx, _parentState));
					this.pushNewRecursionContext(localctx, _startState, SysY2022EParser.RULE_lOrExp);
					this.state = 365;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 366;
					this.match(SysY2022EParser.OR);
					this.state = 367;
					this.lAndExp(0);
					}
					}
				}
				this.state = 372;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 35, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constExp(): ConstExpContext {
		let localctx: ConstExpContext = new ConstExpContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, SysY2022EParser.RULE_constExp);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 373;
			this.addExp(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 25:
			return this.mulExp_sempred(localctx as MulExpContext, predIndex);
		case 26:
			return this.addExp_sempred(localctx as AddExpContext, predIndex);
		case 27:
			return this.relExp_sempred(localctx as RelExpContext, predIndex);
		case 28:
			return this.eqExp_sempred(localctx as EqExpContext, predIndex);
		case 29:
			return this.lAndExp_sempred(localctx as LAndExpContext, predIndex);
		case 30:
			return this.lOrExp_sempred(localctx as LOrExpContext, predIndex);
		}
		return true;
	}
	private mulExp_sempred(localctx: MulExpContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private addExp_sempred(localctx: AddExpContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private relExp_sempred(localctx: RelExpContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private eqExp_sempred(localctx: EqExpContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private lAndExp_sempred(localctx: LAndExpContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private lOrExp_sempred(localctx: LOrExpContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,43,376,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	1,0,1,0,5,0,67,8,0,10,0,12,0,70,9,0,1,0,1,0,1,1,1,1,3,1,76,8,1,1,2,1,2,
	1,2,1,2,1,2,5,2,83,8,2,10,2,12,2,86,9,2,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,
	1,4,5,4,97,8,4,10,4,12,4,100,9,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,5,5,110,
	8,5,10,5,12,5,113,9,5,3,5,115,8,5,1,5,3,5,118,8,5,1,6,1,6,1,6,1,6,5,6,124,
	8,6,10,6,12,6,127,9,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,5,7,136,8,7,10,7,12,7,
	139,9,7,1,7,1,7,1,7,1,7,1,7,5,7,146,8,7,10,7,12,7,149,9,7,1,7,1,7,3,7,153,
	8,7,1,8,1,8,1,8,1,8,1,8,5,8,160,8,8,10,8,12,8,163,9,8,3,8,165,8,8,1,8,3,
	8,168,8,8,1,9,1,9,1,9,1,9,3,9,174,8,9,1,9,1,9,1,9,1,10,1,10,1,11,1,11,1,
	11,5,11,184,8,11,10,11,12,11,187,9,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
	1,12,5,12,197,8,12,10,12,12,12,200,9,12,3,12,202,8,12,1,13,1,13,5,13,206,
	8,13,10,13,12,13,209,9,13,1,13,1,13,1,14,1,14,3,14,215,8,14,1,15,1,15,1,
	15,1,15,1,15,1,15,3,15,223,8,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
	1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
	15,1,15,1,15,1,15,1,15,1,15,3,15,253,8,15,1,15,3,15,256,8,15,1,16,1,16,
	1,17,1,17,1,18,1,18,1,18,1,18,1,18,5,18,267,8,18,10,18,12,18,270,9,18,1,
	19,1,19,1,19,1,19,1,19,1,19,3,19,278,8,19,1,20,1,20,1,21,1,21,1,21,1,21,
	3,21,286,8,21,1,21,1,21,1,21,1,21,3,21,292,8,21,1,22,1,22,1,23,1,23,1,23,
	5,23,299,8,23,10,23,12,23,302,9,23,1,24,1,24,3,24,306,8,24,1,25,1,25,1,
	25,1,25,1,25,1,25,5,25,314,8,25,10,25,12,25,317,9,25,1,26,1,26,1,26,1,26,
	1,26,1,26,5,26,325,8,26,10,26,12,26,328,9,26,1,27,1,27,1,27,1,27,1,27,1,
	27,5,27,336,8,27,10,27,12,27,339,9,27,1,28,1,28,1,28,1,28,1,28,1,28,5,28,
	347,8,28,10,28,12,28,350,9,28,1,29,1,29,1,29,1,29,1,29,1,29,5,29,358,8,
	29,10,29,12,29,361,9,29,1,30,1,30,1,30,1,30,1,30,1,30,5,30,369,8,30,10,
	30,12,30,372,9,30,1,31,1,31,1,31,0,6,50,52,54,56,58,60,32,0,2,4,6,8,10,
	12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,
	60,62,0,8,1,0,1,2,1,0,1,3,1,0,37,38,2,0,22,23,25,25,1,0,26,28,2,0,22,22,
	25,25,1,0,33,36,1,0,31,32,388,0,68,1,0,0,0,2,75,1,0,0,0,4,77,1,0,0,0,6,
	89,1,0,0,0,8,91,1,0,0,0,10,117,1,0,0,0,12,119,1,0,0,0,14,152,1,0,0,0,16,
	167,1,0,0,0,18,169,1,0,0,0,20,178,1,0,0,0,22,180,1,0,0,0,24,188,1,0,0,0,
	26,203,1,0,0,0,28,214,1,0,0,0,30,255,1,0,0,0,32,257,1,0,0,0,34,259,1,0,
	0,0,36,261,1,0,0,0,38,277,1,0,0,0,40,279,1,0,0,0,42,291,1,0,0,0,44,293,
	1,0,0,0,46,295,1,0,0,0,48,305,1,0,0,0,50,307,1,0,0,0,52,318,1,0,0,0,54,
	329,1,0,0,0,56,340,1,0,0,0,58,351,1,0,0,0,60,362,1,0,0,0,62,373,1,0,0,0,
	64,67,3,2,1,0,65,67,3,18,9,0,66,64,1,0,0,0,66,65,1,0,0,0,67,70,1,0,0,0,
	68,66,1,0,0,0,68,69,1,0,0,0,69,71,1,0,0,0,70,68,1,0,0,0,71,72,5,0,0,1,72,
	1,1,0,0,0,73,76,3,4,2,0,74,76,3,12,6,0,75,73,1,0,0,0,75,74,1,0,0,0,76,3,
	1,0,0,0,77,78,5,4,0,0,78,79,3,6,3,0,79,84,3,8,4,0,80,81,5,18,0,0,81,83,
	3,8,4,0,82,80,1,0,0,0,83,86,1,0,0,0,84,82,1,0,0,0,84,85,1,0,0,0,85,87,1,
	0,0,0,86,84,1,0,0,0,87,88,5,19,0,0,88,5,1,0,0,0,89,90,7,0,0,0,90,7,1,0,
	0,0,91,98,5,39,0,0,92,93,5,14,0,0,93,94,3,62,31,0,94,95,5,15,0,0,95,97,
	1,0,0,0,96,92,1,0,0,0,97,100,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,101,
	1,0,0,0,100,98,1,0,0,0,101,102,5,24,0,0,102,103,3,10,5,0,103,9,1,0,0,0,
	104,118,3,62,31,0,105,114,5,16,0,0,106,111,3,10,5,0,107,108,5,18,0,0,108,
	110,3,10,5,0,109,107,1,0,0,0,110,113,1,0,0,0,111,109,1,0,0,0,111,112,1,
	0,0,0,112,115,1,0,0,0,113,111,1,0,0,0,114,106,1,0,0,0,114,115,1,0,0,0,115,
	116,1,0,0,0,116,118,5,17,0,0,117,104,1,0,0,0,117,105,1,0,0,0,118,11,1,0,
	0,0,119,120,3,6,3,0,120,125,3,14,7,0,121,122,5,18,0,0,122,124,3,14,7,0,
	123,121,1,0,0,0,124,127,1,0,0,0,125,123,1,0,0,0,125,126,1,0,0,0,126,128,
	1,0,0,0,127,125,1,0,0,0,128,129,5,19,0,0,129,13,1,0,0,0,130,137,5,39,0,
	0,131,132,5,14,0,0,132,133,3,62,31,0,133,134,5,15,0,0,134,136,1,0,0,0,135,
	131,1,0,0,0,136,139,1,0,0,0,137,135,1,0,0,0,137,138,1,0,0,0,138,153,1,0,
	0,0,139,137,1,0,0,0,140,147,5,39,0,0,141,142,5,14,0,0,142,143,3,62,31,0,
	143,144,5,15,0,0,144,146,1,0,0,0,145,141,1,0,0,0,146,149,1,0,0,0,147,145,
	1,0,0,0,147,148,1,0,0,0,148,150,1,0,0,0,149,147,1,0,0,0,150,151,5,24,0,
	0,151,153,3,16,8,0,152,130,1,0,0,0,152,140,1,0,0,0,153,15,1,0,0,0,154,168,
	3,32,16,0,155,164,5,16,0,0,156,161,3,16,8,0,157,158,5,18,0,0,158,160,3,
	16,8,0,159,157,1,0,0,0,160,163,1,0,0,0,161,159,1,0,0,0,161,162,1,0,0,0,
	162,165,1,0,0,0,163,161,1,0,0,0,164,156,1,0,0,0,164,165,1,0,0,0,165,166,
	1,0,0,0,166,168,5,17,0,0,167,154,1,0,0,0,167,155,1,0,0,0,168,17,1,0,0,0,
	169,170,3,20,10,0,170,171,5,39,0,0,171,173,5,12,0,0,172,174,3,22,11,0,173,
	172,1,0,0,0,173,174,1,0,0,0,174,175,1,0,0,0,175,176,5,13,0,0,176,177,3,
	26,13,0,177,19,1,0,0,0,178,179,7,1,0,0,179,21,1,0,0,0,180,185,3,24,12,0,
	181,182,5,18,0,0,182,184,3,24,12,0,183,181,1,0,0,0,184,187,1,0,0,0,185,
	183,1,0,0,0,185,186,1,0,0,0,186,23,1,0,0,0,187,185,1,0,0,0,188,189,3,6,
	3,0,189,201,5,39,0,0,190,191,5,14,0,0,191,198,5,15,0,0,192,193,5,14,0,0,
	193,194,3,62,31,0,194,195,5,15,0,0,195,197,1,0,0,0,196,192,1,0,0,0,197,
	200,1,0,0,0,198,196,1,0,0,0,198,199,1,0,0,0,199,202,1,0,0,0,200,198,1,0,
	0,0,201,190,1,0,0,0,201,202,1,0,0,0,202,25,1,0,0,0,203,207,5,16,0,0,204,
	206,3,28,14,0,205,204,1,0,0,0,206,209,1,0,0,0,207,205,1,0,0,0,207,208,1,
	0,0,0,208,210,1,0,0,0,209,207,1,0,0,0,210,211,5,17,0,0,211,27,1,0,0,0,212,
	215,3,2,1,0,213,215,3,30,15,0,214,212,1,0,0,0,214,213,1,0,0,0,215,29,1,
	0,0,0,216,217,3,36,18,0,217,218,5,24,0,0,218,219,3,32,16,0,219,220,5,19,
	0,0,220,256,1,0,0,0,221,223,3,32,16,0,222,221,1,0,0,0,222,223,1,0,0,0,223,
	224,1,0,0,0,224,256,5,19,0,0,225,256,3,26,13,0,226,227,5,6,0,0,227,228,
	5,12,0,0,228,229,3,34,17,0,229,230,5,13,0,0,230,231,3,30,15,0,231,256,1,
	0,0,0,232,233,5,6,0,0,233,234,5,12,0,0,234,235,3,34,17,0,235,236,5,13,0,
	0,236,237,3,30,15,0,237,238,5,7,0,0,238,239,3,30,15,0,239,256,1,0,0,0,240,
	241,5,8,0,0,241,242,5,12,0,0,242,243,3,34,17,0,243,244,5,13,0,0,244,245,
	3,30,15,0,245,256,1,0,0,0,246,247,5,9,0,0,247,256,5,19,0,0,248,249,5,10,
	0,0,249,256,5,19,0,0,250,252,5,5,0,0,251,253,3,32,16,0,252,251,1,0,0,0,
	252,253,1,0,0,0,253,254,1,0,0,0,254,256,5,19,0,0,255,216,1,0,0,0,255,222,
	1,0,0,0,255,225,1,0,0,0,255,226,1,0,0,0,255,232,1,0,0,0,255,240,1,0,0,0,
	255,246,1,0,0,0,255,248,1,0,0,0,255,250,1,0,0,0,256,31,1,0,0,0,257,258,
	3,52,26,0,258,33,1,0,0,0,259,260,3,60,30,0,260,35,1,0,0,0,261,268,5,39,
	0,0,262,263,5,14,0,0,263,264,3,32,16,0,264,265,5,15,0,0,265,267,1,0,0,0,
	266,262,1,0,0,0,267,270,1,0,0,0,268,266,1,0,0,0,268,269,1,0,0,0,269,37,
	1,0,0,0,270,268,1,0,0,0,271,272,5,12,0,0,272,273,3,32,16,0,273,274,5,13,
	0,0,274,278,1,0,0,0,275,278,3,36,18,0,276,278,3,40,20,0,277,271,1,0,0,0,
	277,275,1,0,0,0,277,276,1,0,0,0,278,39,1,0,0,0,279,280,7,2,0,0,280,41,1,
	0,0,0,281,292,3,38,19,0,282,283,5,39,0,0,283,285,5,12,0,0,284,286,3,46,
	23,0,285,284,1,0,0,0,285,286,1,0,0,0,286,287,1,0,0,0,287,292,5,13,0,0,288,
	289,3,44,22,0,289,290,3,42,21,0,290,292,1,0,0,0,291,281,1,0,0,0,291,282,
	1,0,0,0,291,288,1,0,0,0,292,43,1,0,0,0,293,294,7,3,0,0,294,45,1,0,0,0,295,
	300,3,48,24,0,296,297,5,18,0,0,297,299,3,48,24,0,298,296,1,0,0,0,299,302,
	1,0,0,0,300,298,1,0,0,0,300,301,1,0,0,0,301,47,1,0,0,0,302,300,1,0,0,0,
	303,306,3,32,16,0,304,306,5,40,0,0,305,303,1,0,0,0,305,304,1,0,0,0,306,
	49,1,0,0,0,307,308,6,25,-1,0,308,309,3,42,21,0,309,315,1,0,0,0,310,311,
	10,1,0,0,311,312,7,4,0,0,312,314,3,42,21,0,313,310,1,0,0,0,314,317,1,0,
	0,0,315,313,1,0,0,0,315,316,1,0,0,0,316,51,1,0,0,0,317,315,1,0,0,0,318,
	319,6,26,-1,0,319,320,3,50,25,0,320,326,1,0,0,0,321,322,10,1,0,0,322,323,
	7,5,0,0,323,325,3,50,25,0,324,321,1,0,0,0,325,328,1,0,0,0,326,324,1,0,0,
	0,326,327,1,0,0,0,327,53,1,0,0,0,328,326,1,0,0,0,329,330,6,27,-1,0,330,
	331,3,52,26,0,331,337,1,0,0,0,332,333,10,1,0,0,333,334,7,6,0,0,334,336,
	3,52,26,0,335,332,1,0,0,0,336,339,1,0,0,0,337,335,1,0,0,0,337,338,1,0,0,
	0,338,55,1,0,0,0,339,337,1,0,0,0,340,341,6,28,-1,0,341,342,3,54,27,0,342,
	348,1,0,0,0,343,344,10,1,0,0,344,345,7,7,0,0,345,347,3,54,27,0,346,343,
	1,0,0,0,347,350,1,0,0,0,348,346,1,0,0,0,348,349,1,0,0,0,349,57,1,0,0,0,
	350,348,1,0,0,0,351,352,6,29,-1,0,352,353,3,56,28,0,353,359,1,0,0,0,354,
	355,10,1,0,0,355,356,5,29,0,0,356,358,3,56,28,0,357,354,1,0,0,0,358,361,
	1,0,0,0,359,357,1,0,0,0,359,360,1,0,0,0,360,59,1,0,0,0,361,359,1,0,0,0,
	362,363,6,30,-1,0,363,364,3,58,29,0,364,370,1,0,0,0,365,366,10,1,0,0,366,
	367,5,30,0,0,367,369,3,58,29,0,368,365,1,0,0,0,369,372,1,0,0,0,370,368,
	1,0,0,0,370,371,1,0,0,0,371,61,1,0,0,0,372,370,1,0,0,0,373,374,3,52,26,
	0,374,63,1,0,0,0,36,66,68,75,84,98,111,114,117,125,137,147,152,161,164,
	167,173,185,198,201,207,214,222,252,255,268,277,285,291,300,305,315,326,
	337,348,359,370];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SysY2022EParser.__ATN) {
			SysY2022EParser.__ATN = new ATNDeserializer().deserialize(SysY2022EParser._serializedATN);
		}

		return SysY2022EParser.__ATN;
	}


	static DecisionsToDFA = SysY2022EParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class CompUnitContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(SysY2022EParser.EOF, 0);
	}
	public decl_list(): DeclContext[] {
		return this.getTypedRuleContexts(DeclContext) as DeclContext[];
	}
	public decl(i: number): DeclContext {
		return this.getTypedRuleContext(DeclContext, i) as DeclContext;
	}
	public funcDef_list(): FuncDefContext[] {
		return this.getTypedRuleContexts(FuncDefContext) as FuncDefContext[];
	}
	public funcDef(i: number): FuncDefContext {
		return this.getTypedRuleContext(FuncDefContext, i) as FuncDefContext;
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_compUnit;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterCompUnit) {
	 		listener.enterCompUnit(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitCompUnit) {
	 		listener.exitCompUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitCompUnit) {
			return visitor.visitCompUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public constDecl(): ConstDeclContext {
		return this.getTypedRuleContext(ConstDeclContext, 0) as ConstDeclContext;
	}
	public varDecl(): VarDeclContext {
		return this.getTypedRuleContext(VarDeclContext, 0) as VarDeclContext;
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_decl;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterDecl) {
	 		listener.enterDecl(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitDecl) {
	 		listener.exitDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitDecl) {
			return visitor.visitDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstDeclContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CONST(): TerminalNode {
		return this.getToken(SysY2022EParser.CONST, 0);
	}
	public bType(): BTypeContext {
		return this.getTypedRuleContext(BTypeContext, 0) as BTypeContext;
	}
	public constDef_list(): ConstDefContext[] {
		return this.getTypedRuleContexts(ConstDefContext) as ConstDefContext[];
	}
	public constDef(i: number): ConstDefContext {
		return this.getTypedRuleContext(ConstDefContext, i) as ConstDefContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SysY2022EParser.SEMICOLON, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SysY2022EParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SysY2022EParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_constDecl;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterConstDecl) {
	 		listener.enterConstDecl(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitConstDecl) {
	 		listener.exitConstDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitConstDecl) {
			return visitor.visitConstDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BTypeContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INT(): TerminalNode {
		return this.getToken(SysY2022EParser.INT, 0);
	}
	public FLOAT(): TerminalNode {
		return this.getToken(SysY2022EParser.FLOAT, 0);
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_bType;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterBType) {
	 		listener.enterBType(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitBType) {
	 		listener.exitBType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitBType) {
			return visitor.visitBType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstDefContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(SysY2022EParser.ID, 0);
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(SysY2022EParser.ASSIGN, 0);
	}
	public constInitVal(): ConstInitValContext {
		return this.getTypedRuleContext(ConstInitValContext, 0) as ConstInitValContext;
	}
	public LB_list(): TerminalNode[] {
	    	return this.getTokens(SysY2022EParser.LB);
	}
	public LB(i: number): TerminalNode {
		return this.getToken(SysY2022EParser.LB, i);
	}
	public constExp_list(): ConstExpContext[] {
		return this.getTypedRuleContexts(ConstExpContext) as ConstExpContext[];
	}
	public constExp(i: number): ConstExpContext {
		return this.getTypedRuleContext(ConstExpContext, i) as ConstExpContext;
	}
	public RB_list(): TerminalNode[] {
	    	return this.getTokens(SysY2022EParser.RB);
	}
	public RB(i: number): TerminalNode {
		return this.getToken(SysY2022EParser.RB, i);
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_constDef;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterConstDef) {
	 		listener.enterConstDef(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitConstDef) {
	 		listener.exitConstDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitConstDef) {
			return visitor.visitConstDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstInitValContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_constInitVal;
	}
	public copyFrom(ctx: ConstInitValContext): void {
		super.copyFrom(ctx);
	}
}
export class ListConstInitValContext extends ConstInitValContext {
	constructor(parser: SysY2022EParser, ctx: ConstInitValContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LC(): TerminalNode {
		return this.getToken(SysY2022EParser.LC, 0);
	}
	public RC(): TerminalNode {
		return this.getToken(SysY2022EParser.RC, 0);
	}
	public constInitVal_list(): ConstInitValContext[] {
		return this.getTypedRuleContexts(ConstInitValContext) as ConstInitValContext[];
	}
	public constInitVal(i: number): ConstInitValContext {
		return this.getTypedRuleContext(ConstInitValContext, i) as ConstInitValContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SysY2022EParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SysY2022EParser.COMMA, i);
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterListConstInitVal) {
	 		listener.enterListConstInitVal(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitListConstInitVal) {
	 		listener.exitListConstInitVal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitListConstInitVal) {
			return visitor.visitListConstInitVal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ScalarConstInitValContext extends ConstInitValContext {
	constructor(parser: SysY2022EParser, ctx: ConstInitValContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public constExp(): ConstExpContext {
		return this.getTypedRuleContext(ConstExpContext, 0) as ConstExpContext;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterScalarConstInitVal) {
	 		listener.enterScalarConstInitVal(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitScalarConstInitVal) {
	 		listener.exitScalarConstInitVal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitScalarConstInitVal) {
			return visitor.visitScalarConstInitVal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarDeclContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public bType(): BTypeContext {
		return this.getTypedRuleContext(BTypeContext, 0) as BTypeContext;
	}
	public varDef_list(): VarDefContext[] {
		return this.getTypedRuleContexts(VarDefContext) as VarDefContext[];
	}
	public varDef(i: number): VarDefContext {
		return this.getTypedRuleContext(VarDefContext, i) as VarDefContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SysY2022EParser.SEMICOLON, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SysY2022EParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SysY2022EParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_varDecl;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterVarDecl) {
	 		listener.enterVarDecl(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitVarDecl) {
	 		listener.exitVarDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitVarDecl) {
			return visitor.visitVarDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarDefContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_varDef;
	}
	public copyFrom(ctx: VarDefContext): void {
		super.copyFrom(ctx);
	}
}
export class UninitVarDefContext extends VarDefContext {
	constructor(parser: SysY2022EParser, ctx: VarDefContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ID(): TerminalNode {
		return this.getToken(SysY2022EParser.ID, 0);
	}
	public LB_list(): TerminalNode[] {
	    	return this.getTokens(SysY2022EParser.LB);
	}
	public LB(i: number): TerminalNode {
		return this.getToken(SysY2022EParser.LB, i);
	}
	public constExp_list(): ConstExpContext[] {
		return this.getTypedRuleContexts(ConstExpContext) as ConstExpContext[];
	}
	public constExp(i: number): ConstExpContext {
		return this.getTypedRuleContext(ConstExpContext, i) as ConstExpContext;
	}
	public RB_list(): TerminalNode[] {
	    	return this.getTokens(SysY2022EParser.RB);
	}
	public RB(i: number): TerminalNode {
		return this.getToken(SysY2022EParser.RB, i);
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterUninitVarDef) {
	 		listener.enterUninitVarDef(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitUninitVarDef) {
	 		listener.exitUninitVarDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitUninitVarDef) {
			return visitor.visitUninitVarDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InitVarDefContext extends VarDefContext {
	constructor(parser: SysY2022EParser, ctx: VarDefContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ID(): TerminalNode {
		return this.getToken(SysY2022EParser.ID, 0);
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(SysY2022EParser.ASSIGN, 0);
	}
	public initVal(): InitValContext {
		return this.getTypedRuleContext(InitValContext, 0) as InitValContext;
	}
	public LB_list(): TerminalNode[] {
	    	return this.getTokens(SysY2022EParser.LB);
	}
	public LB(i: number): TerminalNode {
		return this.getToken(SysY2022EParser.LB, i);
	}
	public constExp_list(): ConstExpContext[] {
		return this.getTypedRuleContexts(ConstExpContext) as ConstExpContext[];
	}
	public constExp(i: number): ConstExpContext {
		return this.getTypedRuleContext(ConstExpContext, i) as ConstExpContext;
	}
	public RB_list(): TerminalNode[] {
	    	return this.getTokens(SysY2022EParser.RB);
	}
	public RB(i: number): TerminalNode {
		return this.getToken(SysY2022EParser.RB, i);
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterInitVarDef) {
	 		listener.enterInitVarDef(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitInitVarDef) {
	 		listener.exitInitVarDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitInitVarDef) {
			return visitor.visitInitVarDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitValContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_initVal;
	}
	public copyFrom(ctx: InitValContext): void {
		super.copyFrom(ctx);
	}
}
export class ScalarInitValContext extends InitValContext {
	constructor(parser: SysY2022EParser, ctx: InitValContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterScalarInitVal) {
	 		listener.enterScalarInitVal(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitScalarInitVal) {
	 		listener.exitScalarInitVal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitScalarInitVal) {
			return visitor.visitScalarInitVal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListInitvalContext extends InitValContext {
	constructor(parser: SysY2022EParser, ctx: InitValContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LC(): TerminalNode {
		return this.getToken(SysY2022EParser.LC, 0);
	}
	public RC(): TerminalNode {
		return this.getToken(SysY2022EParser.RC, 0);
	}
	public initVal_list(): InitValContext[] {
		return this.getTypedRuleContexts(InitValContext) as InitValContext[];
	}
	public initVal(i: number): InitValContext {
		return this.getTypedRuleContext(InitValContext, i) as InitValContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SysY2022EParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SysY2022EParser.COMMA, i);
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterListInitval) {
	 		listener.enterListInitval(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitListInitval) {
	 		listener.exitListInitval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitListInitval) {
			return visitor.visitListInitval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncDefContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public funcType(): FuncTypeContext {
		return this.getTypedRuleContext(FuncTypeContext, 0) as FuncTypeContext;
	}
	public ID(): TerminalNode {
		return this.getToken(SysY2022EParser.ID, 0);
	}
	public LP(): TerminalNode {
		return this.getToken(SysY2022EParser.LP, 0);
	}
	public RP(): TerminalNode {
		return this.getToken(SysY2022EParser.RP, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public funcFParams(): FuncFParamsContext {
		return this.getTypedRuleContext(FuncFParamsContext, 0) as FuncFParamsContext;
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_funcDef;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterFuncDef) {
	 		listener.enterFuncDef(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitFuncDef) {
	 		listener.exitFuncDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitFuncDef) {
			return visitor.visitFuncDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncTypeContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VOID(): TerminalNode {
		return this.getToken(SysY2022EParser.VOID, 0);
	}
	public INT(): TerminalNode {
		return this.getToken(SysY2022EParser.INT, 0);
	}
	public FLOAT(): TerminalNode {
		return this.getToken(SysY2022EParser.FLOAT, 0);
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_funcType;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterFuncType) {
	 		listener.enterFuncType(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitFuncType) {
	 		listener.exitFuncType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitFuncType) {
			return visitor.visitFuncType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncFParamsContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public funcFParam_list(): FuncFParamContext[] {
		return this.getTypedRuleContexts(FuncFParamContext) as FuncFParamContext[];
	}
	public funcFParam(i: number): FuncFParamContext {
		return this.getTypedRuleContext(FuncFParamContext, i) as FuncFParamContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SysY2022EParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SysY2022EParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_funcFParams;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterFuncFParams) {
	 		listener.enterFuncFParams(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitFuncFParams) {
	 		listener.exitFuncFParams(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitFuncFParams) {
			return visitor.visitFuncFParams(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncFParamContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public bType(): BTypeContext {
		return this.getTypedRuleContext(BTypeContext, 0) as BTypeContext;
	}
	public ID(): TerminalNode {
		return this.getToken(SysY2022EParser.ID, 0);
	}
	public LB_list(): TerminalNode[] {
	    	return this.getTokens(SysY2022EParser.LB);
	}
	public LB(i: number): TerminalNode {
		return this.getToken(SysY2022EParser.LB, i);
	}
	public RB_list(): TerminalNode[] {
	    	return this.getTokens(SysY2022EParser.RB);
	}
	public RB(i: number): TerminalNode {
		return this.getToken(SysY2022EParser.RB, i);
	}
	public constExp_list(): ConstExpContext[] {
		return this.getTypedRuleContexts(ConstExpContext) as ConstExpContext[];
	}
	public constExp(i: number): ConstExpContext {
		return this.getTypedRuleContext(ConstExpContext, i) as ConstExpContext;
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_funcFParam;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterFuncFParam) {
	 		listener.enterFuncFParam(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitFuncFParam) {
	 		listener.exitFuncFParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitFuncFParam) {
			return visitor.visitFuncFParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LC(): TerminalNode {
		return this.getToken(SysY2022EParser.LC, 0);
	}
	public RC(): TerminalNode {
		return this.getToken(SysY2022EParser.RC, 0);
	}
	public blockItem_list(): BlockItemContext[] {
		return this.getTypedRuleContexts(BlockItemContext) as BlockItemContext[];
	}
	public blockItem(i: number): BlockItemContext {
		return this.getTypedRuleContext(BlockItemContext, i) as BlockItemContext;
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_block;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockItemContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public decl(): DeclContext {
		return this.getTypedRuleContext(DeclContext, 0) as DeclContext;
	}
	public stmt(): StmtContext {
		return this.getTypedRuleContext(StmtContext, 0) as StmtContext;
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_blockItem;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterBlockItem) {
	 		listener.enterBlockItem(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitBlockItem) {
	 		listener.exitBlockItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitBlockItem) {
			return visitor.visitBlockItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_stmt;
	}
	public copyFrom(ctx: StmtContext): void {
		super.copyFrom(ctx);
	}
}
export class WhileStmtContext extends StmtContext {
	constructor(parser: SysY2022EParser, ctx: StmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public WHILE(): TerminalNode {
		return this.getToken(SysY2022EParser.WHILE, 0);
	}
	public LP(): TerminalNode {
		return this.getToken(SysY2022EParser.LP, 0);
	}
	public cond(): CondContext {
		return this.getTypedRuleContext(CondContext, 0) as CondContext;
	}
	public RP(): TerminalNode {
		return this.getToken(SysY2022EParser.RP, 0);
	}
	public stmt(): StmtContext {
		return this.getTypedRuleContext(StmtContext, 0) as StmtContext;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterWhileStmt) {
	 		listener.enterWhileStmt(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitWhileStmt) {
	 		listener.exitWhileStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitWhileStmt) {
			return visitor.visitWhileStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BlockStmtContext extends StmtContext {
	constructor(parser: SysY2022EParser, ctx: StmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterBlockStmt) {
	 		listener.enterBlockStmt(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitBlockStmt) {
	 		listener.exitBlockStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitBlockStmt) {
			return visitor.visitBlockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignmentContext extends StmtContext {
	constructor(parser: SysY2022EParser, ctx: StmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public lVal(): LValContext {
		return this.getTypedRuleContext(LValContext, 0) as LValContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(SysY2022EParser.ASSIGN, 0);
	}
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SysY2022EParser.SEMICOLON, 0);
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterAssignment) {
	 		listener.enterAssignment(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitAssignment) {
	 		listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfStmt1Context extends StmtContext {
	constructor(parser: SysY2022EParser, ctx: StmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IF(): TerminalNode {
		return this.getToken(SysY2022EParser.IF, 0);
	}
	public LP(): TerminalNode {
		return this.getToken(SysY2022EParser.LP, 0);
	}
	public cond(): CondContext {
		return this.getTypedRuleContext(CondContext, 0) as CondContext;
	}
	public RP(): TerminalNode {
		return this.getToken(SysY2022EParser.RP, 0);
	}
	public stmt(): StmtContext {
		return this.getTypedRuleContext(StmtContext, 0) as StmtContext;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterIfStmt1) {
	 		listener.enterIfStmt1(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitIfStmt1) {
	 		listener.exitIfStmt1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitIfStmt1) {
			return visitor.visitIfStmt1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BreakStmtContext extends StmtContext {
	constructor(parser: SysY2022EParser, ctx: StmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BREAK(): TerminalNode {
		return this.getToken(SysY2022EParser.BREAK, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SysY2022EParser.SEMICOLON, 0);
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterBreakStmt) {
	 		listener.enterBreakStmt(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitBreakStmt) {
	 		listener.exitBreakStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitBreakStmt) {
			return visitor.visitBreakStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpStmtContext extends StmtContext {
	constructor(parser: SysY2022EParser, ctx: StmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SysY2022EParser.SEMICOLON, 0);
	}
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterExpStmt) {
	 		listener.enterExpStmt(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitExpStmt) {
	 		listener.exitExpStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitExpStmt) {
			return visitor.visitExpStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfStmt2Context extends StmtContext {
	constructor(parser: SysY2022EParser, ctx: StmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IF(): TerminalNode {
		return this.getToken(SysY2022EParser.IF, 0);
	}
	public LP(): TerminalNode {
		return this.getToken(SysY2022EParser.LP, 0);
	}
	public cond(): CondContext {
		return this.getTypedRuleContext(CondContext, 0) as CondContext;
	}
	public RP(): TerminalNode {
		return this.getToken(SysY2022EParser.RP, 0);
	}
	public stmt_list(): StmtContext[] {
		return this.getTypedRuleContexts(StmtContext) as StmtContext[];
	}
	public stmt(i: number): StmtContext {
		return this.getTypedRuleContext(StmtContext, i) as StmtContext;
	}
	public ELSE(): TerminalNode {
		return this.getToken(SysY2022EParser.ELSE, 0);
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterIfStmt2) {
	 		listener.enterIfStmt2(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitIfStmt2) {
	 		listener.exitIfStmt2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitIfStmt2) {
			return visitor.visitIfStmt2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReturnStmtContext extends StmtContext {
	constructor(parser: SysY2022EParser, ctx: StmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public RETURN(): TerminalNode {
		return this.getToken(SysY2022EParser.RETURN, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SysY2022EParser.SEMICOLON, 0);
	}
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterReturnStmt) {
	 		listener.enterReturnStmt(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitReturnStmt) {
	 		listener.exitReturnStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitReturnStmt) {
			return visitor.visitReturnStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ContinueStmtContext extends StmtContext {
	constructor(parser: SysY2022EParser, ctx: StmtContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CONTINUE(): TerminalNode {
		return this.getToken(SysY2022EParser.CONTINUE, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(SysY2022EParser.SEMICOLON, 0);
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterContinueStmt) {
	 		listener.enterContinueStmt(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitContinueStmt) {
	 		listener.exitContinueStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitContinueStmt) {
			return visitor.visitContinueStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public addExp(): AddExpContext {
		return this.getTypedRuleContext(AddExpContext, 0) as AddExpContext;
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_exp;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterExp) {
	 		listener.enterExp(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitExp) {
	 		listener.exitExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitExp) {
			return visitor.visitExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CondContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public lOrExp(): LOrExpContext {
		return this.getTypedRuleContext(LOrExpContext, 0) as LOrExpContext;
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_cond;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterCond) {
	 		listener.enterCond(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitCond) {
	 		listener.exitCond(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitCond) {
			return visitor.visitCond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LValContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(SysY2022EParser.ID, 0);
	}
	public LB_list(): TerminalNode[] {
	    	return this.getTokens(SysY2022EParser.LB);
	}
	public LB(i: number): TerminalNode {
		return this.getToken(SysY2022EParser.LB, i);
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public RB_list(): TerminalNode[] {
	    	return this.getTokens(SysY2022EParser.RB);
	}
	public RB(i: number): TerminalNode {
		return this.getToken(SysY2022EParser.RB, i);
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_lVal;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterLVal) {
	 		listener.enterLVal(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitLVal) {
	 		listener.exitLVal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitLVal) {
			return visitor.visitLVal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_primaryExp;
	}
	public copyFrom(ctx: PrimaryExpContext): void {
		super.copyFrom(ctx);
	}
}
export class PrimaryExp2Context extends PrimaryExpContext {
	constructor(parser: SysY2022EParser, ctx: PrimaryExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public lVal(): LValContext {
		return this.getTypedRuleContext(LValContext, 0) as LValContext;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterPrimaryExp2) {
	 		listener.enterPrimaryExp2(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitPrimaryExp2) {
	 		listener.exitPrimaryExp2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitPrimaryExp2) {
			return visitor.visitPrimaryExp2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PrimaryExp1Context extends PrimaryExpContext {
	constructor(parser: SysY2022EParser, ctx: PrimaryExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LP(): TerminalNode {
		return this.getToken(SysY2022EParser.LP, 0);
	}
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
	}
	public RP(): TerminalNode {
		return this.getToken(SysY2022EParser.RP, 0);
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterPrimaryExp1) {
	 		listener.enterPrimaryExp1(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitPrimaryExp1) {
	 		listener.exitPrimaryExp1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitPrimaryExp1) {
			return visitor.visitPrimaryExp1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PrimaryExp3Context extends PrimaryExpContext {
	constructor(parser: SysY2022EParser, ctx: PrimaryExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public number_(): NumberContext {
		return this.getTypedRuleContext(NumberContext, 0) as NumberContext;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterPrimaryExp3) {
	 		listener.enterPrimaryExp3(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitPrimaryExp3) {
	 		listener.exitPrimaryExp3(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitPrimaryExp3) {
			return visitor.visitPrimaryExp3(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INT_LIT(): TerminalNode {
		return this.getToken(SysY2022EParser.INT_LIT, 0);
	}
	public FLOAT_LIT(): TerminalNode {
		return this.getToken(SysY2022EParser.FLOAT_LIT, 0);
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_number;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterNumber) {
	 		listener.enterNumber(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitNumber) {
	 		listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_unaryExp;
	}
	public copyFrom(ctx: UnaryExpContext): void {
		super.copyFrom(ctx);
	}
}
export class Unary1Context extends UnaryExpContext {
	constructor(parser: SysY2022EParser, ctx: UnaryExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primaryExp(): PrimaryExpContext {
		return this.getTypedRuleContext(PrimaryExpContext, 0) as PrimaryExpContext;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterUnary1) {
	 		listener.enterUnary1(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitUnary1) {
	 		listener.exitUnary1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitUnary1) {
			return visitor.visitUnary1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Unary2Context extends UnaryExpContext {
	constructor(parser: SysY2022EParser, ctx: UnaryExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ID(): TerminalNode {
		return this.getToken(SysY2022EParser.ID, 0);
	}
	public LP(): TerminalNode {
		return this.getToken(SysY2022EParser.LP, 0);
	}
	public RP(): TerminalNode {
		return this.getToken(SysY2022EParser.RP, 0);
	}
	public funcRParams(): FuncRParamsContext {
		return this.getTypedRuleContext(FuncRParamsContext, 0) as FuncRParamsContext;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterUnary2) {
	 		listener.enterUnary2(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitUnary2) {
	 		listener.exitUnary2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitUnary2) {
			return visitor.visitUnary2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Unary3Context extends UnaryExpContext {
	constructor(parser: SysY2022EParser, ctx: UnaryExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public unaryOp(): UnaryOpContext {
		return this.getTypedRuleContext(UnaryOpContext, 0) as UnaryOpContext;
	}
	public unaryExp(): UnaryExpContext {
		return this.getTypedRuleContext(UnaryExpContext, 0) as UnaryExpContext;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterUnary3) {
	 		listener.enterUnary3(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitUnary3) {
	 		listener.exitUnary3(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitUnary3) {
			return visitor.visitUnary3(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryOpContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ADD(): TerminalNode {
		return this.getToken(SysY2022EParser.ADD, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(SysY2022EParser.MINUS, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(SysY2022EParser.NOT, 0);
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_unaryOp;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterUnaryOp) {
	 		listener.enterUnaryOp(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitUnaryOp) {
	 		listener.exitUnaryOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitUnaryOp) {
			return visitor.visitUnaryOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncRParamsContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public funcRParam_list(): FuncRParamContext[] {
		return this.getTypedRuleContexts(FuncRParamContext) as FuncRParamContext[];
	}
	public funcRParam(i: number): FuncRParamContext {
		return this.getTypedRuleContext(FuncRParamContext, i) as FuncRParamContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SysY2022EParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SysY2022EParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_funcRParams;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterFuncRParams) {
	 		listener.enterFuncRParams(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitFuncRParams) {
	 		listener.exitFuncRParams(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitFuncRParams) {
			return visitor.visitFuncRParams(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncRParamContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_funcRParam;
	}
	public copyFrom(ctx: FuncRParamContext): void {
		super.copyFrom(ctx);
	}
}
export class StringAsRParamContext extends FuncRParamContext {
	constructor(parser: SysY2022EParser, ctx: FuncRParamContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public STRING(): TerminalNode {
		return this.getToken(SysY2022EParser.STRING, 0);
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterStringAsRParam) {
	 		listener.enterStringAsRParam(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitStringAsRParam) {
	 		listener.exitStringAsRParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitStringAsRParam) {
			return visitor.visitStringAsRParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpAsRParamContext extends FuncRParamContext {
	constructor(parser: SysY2022EParser, ctx: FuncRParamContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterExpAsRParam) {
	 		listener.enterExpAsRParam(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitExpAsRParam) {
	 		listener.exitExpAsRParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitExpAsRParam) {
			return visitor.visitExpAsRParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MulExpContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_mulExp;
	}
	public copyFrom(ctx: MulExpContext): void {
		super.copyFrom(ctx);
	}
}
export class Mul2Context extends MulExpContext {
	constructor(parser: SysY2022EParser, ctx: MulExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public mulExp(): MulExpContext {
		return this.getTypedRuleContext(MulExpContext, 0) as MulExpContext;
	}
	public unaryExp(): UnaryExpContext {
		return this.getTypedRuleContext(UnaryExpContext, 0) as UnaryExpContext;
	}
	public MUL(): TerminalNode {
		return this.getToken(SysY2022EParser.MUL, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(SysY2022EParser.DIV, 0);
	}
	public MOD(): TerminalNode {
		return this.getToken(SysY2022EParser.MOD, 0);
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterMul2) {
	 		listener.enterMul2(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitMul2) {
	 		listener.exitMul2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitMul2) {
			return visitor.visitMul2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Mul1Context extends MulExpContext {
	constructor(parser: SysY2022EParser, ctx: MulExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public unaryExp(): UnaryExpContext {
		return this.getTypedRuleContext(UnaryExpContext, 0) as UnaryExpContext;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterMul1) {
	 		listener.enterMul1(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitMul1) {
	 		listener.exitMul1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitMul1) {
			return visitor.visitMul1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddExpContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_addExp;
	}
	public copyFrom(ctx: AddExpContext): void {
		super.copyFrom(ctx);
	}
}
export class Add2Context extends AddExpContext {
	constructor(parser: SysY2022EParser, ctx: AddExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public addExp(): AddExpContext {
		return this.getTypedRuleContext(AddExpContext, 0) as AddExpContext;
	}
	public mulExp(): MulExpContext {
		return this.getTypedRuleContext(MulExpContext, 0) as MulExpContext;
	}
	public ADD(): TerminalNode {
		return this.getToken(SysY2022EParser.ADD, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(SysY2022EParser.MINUS, 0);
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterAdd2) {
	 		listener.enterAdd2(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitAdd2) {
	 		listener.exitAdd2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitAdd2) {
			return visitor.visitAdd2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Add1Context extends AddExpContext {
	constructor(parser: SysY2022EParser, ctx: AddExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public mulExp(): MulExpContext {
		return this.getTypedRuleContext(MulExpContext, 0) as MulExpContext;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterAdd1) {
	 		listener.enterAdd1(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitAdd1) {
	 		listener.exitAdd1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitAdd1) {
			return visitor.visitAdd1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelExpContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_relExp;
	}
	public copyFrom(ctx: RelExpContext): void {
		super.copyFrom(ctx);
	}
}
export class Rel2Context extends RelExpContext {
	constructor(parser: SysY2022EParser, ctx: RelExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public relExp(): RelExpContext {
		return this.getTypedRuleContext(RelExpContext, 0) as RelExpContext;
	}
	public addExp(): AddExpContext {
		return this.getTypedRuleContext(AddExpContext, 0) as AddExpContext;
	}
	public LT(): TerminalNode {
		return this.getToken(SysY2022EParser.LT, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(SysY2022EParser.GT, 0);
	}
	public LE(): TerminalNode {
		return this.getToken(SysY2022EParser.LE, 0);
	}
	public GE(): TerminalNode {
		return this.getToken(SysY2022EParser.GE, 0);
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterRel2) {
	 		listener.enterRel2(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitRel2) {
	 		listener.exitRel2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitRel2) {
			return visitor.visitRel2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Rel1Context extends RelExpContext {
	constructor(parser: SysY2022EParser, ctx: RelExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public addExp(): AddExpContext {
		return this.getTypedRuleContext(AddExpContext, 0) as AddExpContext;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterRel1) {
	 		listener.enterRel1(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitRel1) {
	 		listener.exitRel1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitRel1) {
			return visitor.visitRel1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqExpContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_eqExp;
	}
	public copyFrom(ctx: EqExpContext): void {
		super.copyFrom(ctx);
	}
}
export class Eq1Context extends EqExpContext {
	constructor(parser: SysY2022EParser, ctx: EqExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public relExp(): RelExpContext {
		return this.getTypedRuleContext(RelExpContext, 0) as RelExpContext;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterEq1) {
	 		listener.enterEq1(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitEq1) {
	 		listener.exitEq1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitEq1) {
			return visitor.visitEq1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Eq2Context extends EqExpContext {
	constructor(parser: SysY2022EParser, ctx: EqExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public eqExp(): EqExpContext {
		return this.getTypedRuleContext(EqExpContext, 0) as EqExpContext;
	}
	public relExp(): RelExpContext {
		return this.getTypedRuleContext(RelExpContext, 0) as RelExpContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(SysY2022EParser.EQ, 0);
	}
	public NEQ(): TerminalNode {
		return this.getToken(SysY2022EParser.NEQ, 0);
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterEq2) {
	 		listener.enterEq2(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitEq2) {
	 		listener.exitEq2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitEq2) {
			return visitor.visitEq2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LAndExpContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_lAndExp;
	}
	public copyFrom(ctx: LAndExpContext): void {
		super.copyFrom(ctx);
	}
}
export class LAnd2Context extends LAndExpContext {
	constructor(parser: SysY2022EParser, ctx: LAndExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public lAndExp(): LAndExpContext {
		return this.getTypedRuleContext(LAndExpContext, 0) as LAndExpContext;
	}
	public AND(): TerminalNode {
		return this.getToken(SysY2022EParser.AND, 0);
	}
	public eqExp(): EqExpContext {
		return this.getTypedRuleContext(EqExpContext, 0) as EqExpContext;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterLAnd2) {
	 		listener.enterLAnd2(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitLAnd2) {
	 		listener.exitLAnd2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitLAnd2) {
			return visitor.visitLAnd2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LAnd1Context extends LAndExpContext {
	constructor(parser: SysY2022EParser, ctx: LAndExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public eqExp(): EqExpContext {
		return this.getTypedRuleContext(EqExpContext, 0) as EqExpContext;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterLAnd1) {
	 		listener.enterLAnd1(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitLAnd1) {
	 		listener.exitLAnd1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitLAnd1) {
			return visitor.visitLAnd1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LOrExpContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_lOrExp;
	}
	public copyFrom(ctx: LOrExpContext): void {
		super.copyFrom(ctx);
	}
}
export class LOr1Context extends LOrExpContext {
	constructor(parser: SysY2022EParser, ctx: LOrExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public lAndExp(): LAndExpContext {
		return this.getTypedRuleContext(LAndExpContext, 0) as LAndExpContext;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterLOr1) {
	 		listener.enterLOr1(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitLOr1) {
	 		listener.exitLOr1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitLOr1) {
			return visitor.visitLOr1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LOr2Context extends LOrExpContext {
	constructor(parser: SysY2022EParser, ctx: LOrExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public lOrExp(): LOrExpContext {
		return this.getTypedRuleContext(LOrExpContext, 0) as LOrExpContext;
	}
	public OR(): TerminalNode {
		return this.getToken(SysY2022EParser.OR, 0);
	}
	public lAndExp(): LAndExpContext {
		return this.getTypedRuleContext(LAndExpContext, 0) as LAndExpContext;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterLOr2) {
	 		listener.enterLOr2(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitLOr2) {
	 		listener.exitLOr2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitLOr2) {
			return visitor.visitLOr2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstExpContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public addExp(): AddExpContext {
		return this.getTypedRuleContext(AddExpContext, 0) as AddExpContext;
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_constExp;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterConstExp) {
	 		listener.enterConstExp(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitConstExp) {
	 		listener.exitConstExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitConstExp) {
			return visitor.visitConstExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
