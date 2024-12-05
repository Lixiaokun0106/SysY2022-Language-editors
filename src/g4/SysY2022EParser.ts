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
import SysY2022EListener from "./SysY2022EListener.js";
import SysY2022EVisitor from "./SysY2022EVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class SysY2022EParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly INT = 5;
	public static readonly FLOAT = 6;
	public static readonly VOID = 7;
	public static readonly CONST = 8;
	public static readonly RETURN = 9;
	public static readonly IF = 10;
	public static readonly ELSE = 11;
	public static readonly WHILE = 12;
	public static readonly BREAK = 13;
	public static readonly CONTINUE = 14;
	public static readonly FOR = 15;
	public static readonly LP = 16;
	public static readonly RP = 17;
	public static readonly LB = 18;
	public static readonly RB = 19;
	public static readonly LC = 20;
	public static readonly RC = 21;
	public static readonly COMMA = 22;
	public static readonly SEMICOLON = 23;
	public static readonly QUESTION = 24;
	public static readonly COLON = 25;
	public static readonly MINUS = 26;
	public static readonly NOT = 27;
	public static readonly ASSIGN = 28;
	public static readonly ADD = 29;
	public static readonly MUL = 30;
	public static readonly DIV = 31;
	public static readonly MOD = 32;
	public static readonly AND = 33;
	public static readonly OR = 34;
	public static readonly EQ = 35;
	public static readonly NEQ = 36;
	public static readonly LT = 37;
	public static readonly LE = 38;
	public static readonly GT = 39;
	public static readonly GE = 40;
	public static readonly INT_LIT = 41;
	public static readonly FLOAT_LIT = 42;
	public static readonly ID = 43;
	public static readonly STRING = 44;
	public static readonly WS = 45;
	public static readonly LINE_COMMENT = 46;
	public static readonly BLOCK_COMMENT = 47;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_compUnit = 0;
	public static readonly RULE_decl = 1;
	public static readonly RULE_constDecl = 2;
	public static readonly RULE_bType = 3;
	public static readonly RULE_constDef = 4;
	public static readonly RULE_constInitVal = 5;
	public static readonly RULE_structDecl = 6;
	public static readonly RULE_lambdaType = 7;
	public static readonly RULE_varDecl = 8;
	public static readonly RULE_varDef = 9;
	public static readonly RULE_initVal = 10;
	public static readonly RULE_funcDef = 11;
	public static readonly RULE_funcType = 12;
	public static readonly RULE_funcFParams = 13;
	public static readonly RULE_funcFParam = 14;
	public static readonly RULE_block = 15;
	public static readonly RULE_blockItem = 16;
	public static readonly RULE_stmt = 17;
	public static readonly RULE_exp = 18;
	public static readonly RULE_cond = 19;
	public static readonly RULE_lVal = 20;
	public static readonly RULE_primaryExp = 21;
	public static readonly RULE_lambdaExp = 22;
	public static readonly RULE_number = 23;
	public static readonly RULE_unaryExp = 24;
	public static readonly RULE_unaryOp = 25;
	public static readonly RULE_funcRParams = 26;
	public static readonly RULE_funcRParam = 27;
	public static readonly RULE_mulExp = 28;
	public static readonly RULE_addExp = 29;
	public static readonly RULE_relExp = 30;
	public static readonly RULE_eqExp = 31;
	public static readonly RULE_lAndExp = 32;
	public static readonly RULE_lOrExp = 33;
	public static readonly RULE_constExp = 34;
	public static readonly literalNames: (string | null)[] = [ null, "'struct'", 
                                                            "'->'", "'^'", 
                                                            "'.'", "'int'", 
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
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, "INT", 
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
		"structDecl", "lambdaType", "varDecl", "varDef", "initVal", "funcDef", 
		"funcType", "funcFParams", "funcFParam", "block", "blockItem", "stmt", 
		"exp", "cond", "lVal", "primaryExp", "lambdaExp", "number", "unaryExp", 
		"unaryOp", "funcRParams", "funcRParam", "mulExp", "addExp", "relExp", 
		"eqExp", "lAndExp", "lOrExp", "constExp",
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
			this.state = 74;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 66018) !== 0) || _la===43) {
				{
				this.state = 72;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 70;
					this.decl();
					}
					break;
				case 2:
					{
					this.state = 71;
					this.funcDef();
					}
					break;
				}
				}
				this.state = 76;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 77;
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
			this.state = 82;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 8:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 79;
				this.constDecl();
				}
				break;
			case 5:
			case 6:
			case 16:
			case 43:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 80;
				this.varDecl();
				}
				break;
			case 1:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 81;
				this.structDecl();
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
			this.state = 84;
			this.match(SysY2022EParser.CONST);
			this.state = 85;
			this.bType();
			this.state = 86;
			this.constDef();
			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===22) {
				{
				{
				this.state = 87;
				this.match(SysY2022EParser.COMMA);
				this.state = 88;
				this.constDef();
				}
				}
				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 94;
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
		try {
			this.state = 100;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 96;
				this.match(SysY2022EParser.INT);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 97;
				this.match(SysY2022EParser.FLOAT);
				}
				break;
			case 43:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 98;
				this.match(SysY2022EParser.ID);
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 99;
				this.lambdaType();
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
	public constDef(): ConstDefContext {
		let localctx: ConstDefContext = new ConstDefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, SysY2022EParser.RULE_constDef);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 102;
			this.match(SysY2022EParser.ID);
			this.state = 109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18) {
				{
				{
				this.state = 103;
				this.match(SysY2022EParser.LB);
				this.state = 104;
				this.constExp();
				this.state = 105;
				this.match(SysY2022EParser.RB);
				}
				}
				this.state = 111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 112;
			this.match(SysY2022EParser.ASSIGN);
			this.state = 113;
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
			this.state = 128;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 16:
			case 26:
			case 27:
			case 29:
			case 41:
			case 42:
			case 43:
				localctx = new ScalarConstInitValContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 115;
				this.constExp();
				}
				break;
			case 20:
				localctx = new ListConstInitValContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 116;
				this.match(SysY2022EParser.LC);
				this.state = 125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 739311624) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 7) !== 0)) {
					{
					this.state = 117;
					this.constInitVal();
					this.state = 122;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===22) {
						{
						{
						this.state = 118;
						this.match(SysY2022EParser.COMMA);
						this.state = 119;
						this.constInitVal();
						}
						}
						this.state = 124;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 127;
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
	public structDecl(): StructDeclContext {
		let localctx: StructDeclContext = new StructDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, SysY2022EParser.RULE_structDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 130;
			this.match(SysY2022EParser.T__0);
			this.state = 131;
			this.match(SysY2022EParser.ID);
			this.state = 132;
			this.match(SysY2022EParser.LC);
			this.state = 133;
			this.bType();
			this.state = 134;
			this.varDef();
			this.state = 141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===22) {
				{
				{
				this.state = 135;
				this.match(SysY2022EParser.COMMA);
				this.state = 136;
				this.bType();
				this.state = 137;
				this.varDef();
				}
				}
				this.state = 143;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 144;
			this.match(SysY2022EParser.RC);
			this.state = 145;
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
	public lambdaType(): LambdaTypeContext {
		let localctx: LambdaTypeContext = new LambdaTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, SysY2022EParser.RULE_lambdaType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 147;
			this.match(SysY2022EParser.LP);
			this.state = 148;
			this.bType();
			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===22) {
				{
				{
				this.state = 149;
				this.match(SysY2022EParser.COMMA);
				this.state = 150;
				this.bType();
				}
				}
				this.state = 155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 156;
			this.match(SysY2022EParser.RP);
			this.state = 157;
			this.match(SysY2022EParser.T__1);
			this.state = 158;
			this.bType();
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
		this.enterRule(localctx, 16, SysY2022EParser.RULE_varDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 160;
			this.bType();
			this.state = 161;
			this.varDef();
			this.state = 166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===22) {
				{
				{
				this.state = 162;
				this.match(SysY2022EParser.COMMA);
				this.state = 163;
				this.varDef();
				}
				}
				this.state = 168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 169;
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
		this.enterRule(localctx, 18, SysY2022EParser.RULE_varDef);
		let _la: number;
		try {
			this.state = 193;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				localctx = new UninitVarDefContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 171;
				this.match(SysY2022EParser.ID);
				this.state = 178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===18) {
					{
					{
					this.state = 172;
					this.match(SysY2022EParser.LB);
					this.state = 173;
					this.constExp();
					this.state = 174;
					this.match(SysY2022EParser.RB);
					}
					}
					this.state = 180;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 2:
				localctx = new InitVarDefContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 181;
				this.match(SysY2022EParser.ID);
				this.state = 188;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===18) {
					{
					{
					this.state = 182;
					this.match(SysY2022EParser.LB);
					this.state = 183;
					this.constExp();
					this.state = 184;
					this.match(SysY2022EParser.RB);
					}
					}
					this.state = 190;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 191;
				this.match(SysY2022EParser.ASSIGN);
				this.state = 192;
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
		this.enterRule(localctx, 20, SysY2022EParser.RULE_initVal);
		let _la: number;
		try {
			this.state = 208;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 16:
			case 26:
			case 27:
			case 29:
			case 41:
			case 42:
			case 43:
				localctx = new ScalarInitValContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 195;
				this.exp();
				}
				break;
			case 20:
				localctx = new ListInitvalContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 196;
				this.match(SysY2022EParser.LC);
				this.state = 205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 739311624) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 7) !== 0)) {
					{
					this.state = 197;
					this.initVal();
					this.state = 202;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===22) {
						{
						{
						this.state = 198;
						this.match(SysY2022EParser.COMMA);
						this.state = 199;
						this.initVal();
						}
						}
						this.state = 204;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 207;
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
		this.enterRule(localctx, 22, SysY2022EParser.RULE_funcDef);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 210;
			this.funcType();
			this.state = 211;
			this.match(SysY2022EParser.ID);
			this.state = 212;
			this.match(SysY2022EParser.LP);
			this.state = 214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 65632) !== 0) || _la===43) {
				{
				this.state = 213;
				this.funcFParams();
				}
			}

			this.state = 216;
			this.match(SysY2022EParser.RP);
			this.state = 217;
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
		this.enterRule(localctx, 24, SysY2022EParser.RULE_funcType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 219;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 224) !== 0))) {
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
		this.enterRule(localctx, 26, SysY2022EParser.RULE_funcFParams);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 221;
			this.funcFParam();
			this.state = 226;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===22) {
				{
				{
				this.state = 222;
				this.match(SysY2022EParser.COMMA);
				this.state = 223;
				this.funcFParam();
				}
				}
				this.state = 228;
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
		this.enterRule(localctx, 28, SysY2022EParser.RULE_funcFParam);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 229;
			this.bType();
			this.state = 230;
			this.match(SysY2022EParser.ID);
			this.state = 242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 231;
				this.match(SysY2022EParser.LB);
				this.state = 232;
				this.match(SysY2022EParser.RB);
				this.state = 239;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===18) {
					{
					{
					this.state = 233;
					this.match(SysY2022EParser.LB);
					this.state = 234;
					this.constExp();
					this.state = 235;
					this.match(SysY2022EParser.RB);
					}
					}
					this.state = 241;
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
		this.enterRule(localctx, 30, SysY2022EParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 244;
			this.match(SysY2022EParser.LC);
			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 747730794) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 7) !== 0)) {
				{
				{
				this.state = 245;
				this.blockItem();
				}
				}
				this.state = 250;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 251;
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
		this.enterRule(localctx, 32, SysY2022EParser.RULE_blockItem);
		try {
			this.state = 255;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 253;
				this.decl();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 254;
				this.stmt();
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
	public stmt(): StmtContext {
		let localctx: StmtContext = new StmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, SysY2022EParser.RULE_stmt);
		let _la: number;
		try {
			this.state = 296;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				localctx = new AssignmentContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 257;
				this.lVal();
				this.state = 258;
				this.match(SysY2022EParser.ASSIGN);
				this.state = 259;
				this.exp();
				this.state = 260;
				this.match(SysY2022EParser.SEMICOLON);
				}
				break;
			case 2:
				localctx = new ExpStmtContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 263;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 738263048) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 7) !== 0)) {
					{
					this.state = 262;
					this.exp();
					}
				}

				this.state = 265;
				this.match(SysY2022EParser.SEMICOLON);
				}
				break;
			case 3:
				localctx = new BlockStmtContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 266;
				this.block();
				}
				break;
			case 4:
				localctx = new IfStmt1Context(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 267;
				this.match(SysY2022EParser.IF);
				this.state = 268;
				this.match(SysY2022EParser.LP);
				this.state = 269;
				this.cond();
				this.state = 270;
				this.match(SysY2022EParser.RP);
				this.state = 271;
				this.stmt();
				}
				break;
			case 5:
				localctx = new IfStmt2Context(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 273;
				this.match(SysY2022EParser.IF);
				this.state = 274;
				this.match(SysY2022EParser.LP);
				this.state = 275;
				this.cond();
				this.state = 276;
				this.match(SysY2022EParser.RP);
				this.state = 277;
				this.stmt();
				this.state = 278;
				this.match(SysY2022EParser.ELSE);
				this.state = 279;
				this.stmt();
				}
				break;
			case 6:
				localctx = new WhileStmtContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 281;
				this.match(SysY2022EParser.WHILE);
				this.state = 282;
				this.match(SysY2022EParser.LP);
				this.state = 283;
				this.cond();
				this.state = 284;
				this.match(SysY2022EParser.RP);
				this.state = 285;
				this.stmt();
				}
				break;
			case 7:
				localctx = new BreakStmtContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 287;
				this.match(SysY2022EParser.BREAK);
				this.state = 288;
				this.match(SysY2022EParser.SEMICOLON);
				}
				break;
			case 8:
				localctx = new ContinueStmtContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 289;
				this.match(SysY2022EParser.CONTINUE);
				this.state = 290;
				this.match(SysY2022EParser.SEMICOLON);
				}
				break;
			case 9:
				localctx = new ReturnStmtContext(this, localctx);
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 291;
				this.match(SysY2022EParser.RETURN);
				this.state = 293;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 738263048) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 7) !== 0)) {
					{
					this.state = 292;
					this.exp();
					}
				}

				this.state = 295;
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
		this.enterRule(localctx, 36, SysY2022EParser.RULE_exp);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 298;
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
		this.enterRule(localctx, 38, SysY2022EParser.RULE_cond);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 300;
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
		this.enterRule(localctx, 40, SysY2022EParser.RULE_lVal);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 302;
			this.match(SysY2022EParser.ID);
			this.state = 309;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 303;
					this.match(SysY2022EParser.LB);
					this.state = 304;
					this.exp();
					this.state = 305;
					this.match(SysY2022EParser.RB);
					}
					}
				}
				this.state = 311;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
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
		this.enterRule(localctx, 42, SysY2022EParser.RULE_primaryExp);
		try {
			this.state = 319;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 16:
				localctx = new PrimaryExp1Context(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 312;
				this.match(SysY2022EParser.LP);
				this.state = 313;
				this.exp();
				this.state = 314;
				this.match(SysY2022EParser.RP);
				}
				break;
			case 43:
				localctx = new PrimaryExp2Context(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 316;
				this.lVal();
				}
				break;
			case 41:
			case 42:
				localctx = new PrimaryExp3Context(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 317;
				this.number_();
				}
				break;
			case 3:
				localctx = new PrimaryExp4Context(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 318;
				this.lambdaExp();
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
	public lambdaExp(): LambdaExpContext {
		let localctx: LambdaExpContext = new LambdaExpContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, SysY2022EParser.RULE_lambdaExp);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 321;
			this.match(SysY2022EParser.T__2);
			this.state = 322;
			this.match(SysY2022EParser.LP);
			this.state = 323;
			this.bType();
			this.state = 324;
			this.varDef();
			this.state = 331;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===22) {
				{
				{
				this.state = 325;
				this.match(SysY2022EParser.COMMA);
				this.state = 326;
				this.bType();
				this.state = 327;
				this.varDef();
				}
				}
				this.state = 333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 334;
			this.match(SysY2022EParser.RP);
			this.state = 335;
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
	public number_(): NumberContext {
		let localctx: NumberContext = new NumberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, SysY2022EParser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 337;
			_la = this._input.LA(1);
			if(!(_la===41 || _la===42)) {
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

	public unaryExp(): UnaryExpContext;
	public unaryExp(_p: number): UnaryExpContext;
	// @RuleVersion(0)
	public unaryExp(_p?: number): UnaryExpContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: UnaryExpContext = new UnaryExpContext(this, this._ctx, _parentState);
		let _prevctx: UnaryExpContext = localctx;
		let _startState: number = 48;
		this.enterRecursionRule(localctx, 48, SysY2022EParser.RULE_unaryExp, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 350;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				localctx = new Unary1Context(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 340;
				this.primaryExp();
				}
				break;
			case 2:
				{
				localctx = new Unary2Context(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 341;
				this.match(SysY2022EParser.ID);
				this.state = 342;
				this.match(SysY2022EParser.LP);
				this.state = 344;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 738263048) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 15) !== 0)) {
					{
					this.state = 343;
					this.funcRParams();
					}
				}

				this.state = 346;
				this.match(SysY2022EParser.RP);
				}
				break;
			case 3:
				{
				localctx = new Unary3Context(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 347;
				this.unaryOp();
				this.state = 348;
				this.unaryExp(2);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 357;
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
					localctx = new Unary4Context(this, new UnaryExpContext(this, _parentctx, _parentState));
					this.pushNewRecursionContext(localctx, _startState, SysY2022EParser.RULE_unaryExp);
					this.state = 352;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 353;
					this.match(SysY2022EParser.T__3);
					this.state = 354;
					this.match(SysY2022EParser.ID);
					}
					}
				}
				this.state = 359;
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
	// @RuleVersion(0)
	public unaryOp(): UnaryOpContext {
		let localctx: UnaryOpContext = new UnaryOpContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, SysY2022EParser.RULE_unaryOp);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 360;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 738197504) !== 0))) {
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
		this.enterRule(localctx, 52, SysY2022EParser.RULE_funcRParams);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 362;
			this.funcRParam();
			this.state = 367;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===22) {
				{
				{
				this.state = 363;
				this.match(SysY2022EParser.COMMA);
				this.state = 364;
				this.funcRParam();
				}
				}
				this.state = 369;
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
		this.enterRule(localctx, 54, SysY2022EParser.RULE_funcRParam);
		try {
			this.state = 372;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 16:
			case 26:
			case 27:
			case 29:
			case 41:
			case 42:
			case 43:
				localctx = new ExpAsRParamContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 370;
				this.exp();
				}
				break;
			case 44:
				localctx = new StringAsRParamContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 371;
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
		let _startState: number = 56;
		this.enterRecursionRule(localctx, 56, SysY2022EParser.RULE_mulExp, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new Mul1Context(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 375;
			this.unaryExp(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 382;
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
					localctx = new Mul2Context(this, new MulExpContext(this, _parentctx, _parentState));
					this.pushNewRecursionContext(localctx, _startState, SysY2022EParser.RULE_mulExp);
					this.state = 377;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 378;
					_la = this._input.LA(1);
					if(!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & 7) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 379;
					this.unaryExp(0);
					}
					}
				}
				this.state = 384;
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
		let _startState: number = 58;
		this.enterRecursionRule(localctx, 58, SysY2022EParser.RULE_addExp, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new Add1Context(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 386;
			this.mulExp(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 393;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 36, this._ctx);
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
					this.state = 388;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 389;
					_la = this._input.LA(1);
					if(!(_la===26 || _la===29)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 390;
					this.mulExp(0);
					}
					}
				}
				this.state = 395;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 36, this._ctx);
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
		let _startState: number = 60;
		this.enterRecursionRule(localctx, 60, SysY2022EParser.RULE_relExp, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new Rel1Context(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 397;
			this.addExp(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 404;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
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
					this.state = 399;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 400;
					_la = this._input.LA(1);
					if(!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 15) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 401;
					this.addExp(0);
					}
					}
				}
				this.state = 406;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
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
		let _startState: number = 62;
		this.enterRecursionRule(localctx, 62, SysY2022EParser.RULE_eqExp, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new Eq1Context(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 408;
			this.relExp(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 415;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
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
					this.state = 410;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 411;
					_la = this._input.LA(1);
					if(!(_la===35 || _la===36)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 412;
					this.relExp(0);
					}
					}
				}
				this.state = 417;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
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
		let _startState: number = 64;
		this.enterRecursionRule(localctx, 64, SysY2022EParser.RULE_lAndExp, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new LAnd1Context(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 419;
			this.eqExp(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 426;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 39, this._ctx);
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
					this.state = 421;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 422;
					this.match(SysY2022EParser.AND);
					this.state = 423;
					this.eqExp(0);
					}
					}
				}
				this.state = 428;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 39, this._ctx);
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
		let _startState: number = 66;
		this.enterRecursionRule(localctx, 66, SysY2022EParser.RULE_lOrExp, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new LOr1Context(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 430;
			this.lAndExp(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 437;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
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
					this.state = 432;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 433;
					this.match(SysY2022EParser.OR);
					this.state = 434;
					this.lAndExp(0);
					}
					}
				}
				this.state = 439;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
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
		this.enterRule(localctx, 68, SysY2022EParser.RULE_constExp);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 440;
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
		case 24:
			return this.unaryExp_sempred(localctx as UnaryExpContext, predIndex);
		case 28:
			return this.mulExp_sempred(localctx as MulExpContext, predIndex);
		case 29:
			return this.addExp_sempred(localctx as AddExpContext, predIndex);
		case 30:
			return this.relExp_sempred(localctx as RelExpContext, predIndex);
		case 31:
			return this.eqExp_sempred(localctx as EqExpContext, predIndex);
		case 32:
			return this.lAndExp_sempred(localctx as LAndExpContext, predIndex);
		case 33:
			return this.lOrExp_sempred(localctx as LOrExpContext, predIndex);
		}
		return true;
	}
	private unaryExp_sempred(localctx: UnaryExpContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private mulExp_sempred(localctx: MulExpContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private addExp_sempred(localctx: AddExpContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private relExp_sempred(localctx: RelExpContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private eqExp_sempred(localctx: EqExpContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private lAndExp_sempred(localctx: LAndExpContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private lOrExp_sempred(localctx: LOrExpContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,47,443,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,1,0,1,0,5,0,73,8,0,10,0,12,0,76,9,0,1,0,1,
	0,1,1,1,1,1,1,3,1,83,8,1,1,2,1,2,1,2,1,2,1,2,5,2,90,8,2,10,2,12,2,93,9,
	2,1,2,1,2,1,3,1,3,1,3,1,3,3,3,101,8,3,1,4,1,4,1,4,1,4,1,4,5,4,108,8,4,10,
	4,12,4,111,9,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,5,5,121,8,5,10,5,12,5,124,
	9,5,3,5,126,8,5,1,5,3,5,129,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,5,6,
	140,8,6,10,6,12,6,143,9,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,5,7,152,8,7,10,7,
	12,7,155,9,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,5,8,165,8,8,10,8,12,8,168,
	9,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,5,9,177,8,9,10,9,12,9,180,9,9,1,9,1,9,1,
	9,1,9,1,9,5,9,187,8,9,10,9,12,9,190,9,9,1,9,1,9,3,9,194,8,9,1,10,1,10,1,
	10,1,10,1,10,5,10,201,8,10,10,10,12,10,204,9,10,3,10,206,8,10,1,10,3,10,
	209,8,10,1,11,1,11,1,11,1,11,3,11,215,8,11,1,11,1,11,1,11,1,12,1,12,1,13,
	1,13,1,13,5,13,225,8,13,10,13,12,13,228,9,13,1,14,1,14,1,14,1,14,1,14,1,
	14,1,14,1,14,5,14,238,8,14,10,14,12,14,241,9,14,3,14,243,8,14,1,15,1,15,
	5,15,247,8,15,10,15,12,15,250,9,15,1,15,1,15,1,16,1,16,3,16,256,8,16,1,
	17,1,17,1,17,1,17,1,17,1,17,3,17,264,8,17,1,17,1,17,1,17,1,17,1,17,1,17,
	1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,
	17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,294,8,17,1,17,3,17,297,8,17,
	1,18,1,18,1,19,1,19,1,20,1,20,1,20,1,20,1,20,5,20,308,8,20,10,20,12,20,
	311,9,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,3,21,320,8,21,1,22,1,22,1,22,
	1,22,1,22,1,22,1,22,1,22,5,22,330,8,22,10,22,12,22,333,9,22,1,22,1,22,1,
	22,1,23,1,23,1,24,1,24,1,24,1,24,1,24,3,24,345,8,24,1,24,1,24,1,24,1,24,
	3,24,351,8,24,1,24,1,24,1,24,5,24,356,8,24,10,24,12,24,359,9,24,1,25,1,
	25,1,26,1,26,1,26,5,26,366,8,26,10,26,12,26,369,9,26,1,27,1,27,3,27,373,
	8,27,1,28,1,28,1,28,1,28,1,28,1,28,5,28,381,8,28,10,28,12,28,384,9,28,1,
	29,1,29,1,29,1,29,1,29,1,29,5,29,392,8,29,10,29,12,29,395,9,29,1,30,1,30,
	1,30,1,30,1,30,1,30,5,30,403,8,30,10,30,12,30,406,9,30,1,31,1,31,1,31,1,
	31,1,31,1,31,5,31,414,8,31,10,31,12,31,417,9,31,1,32,1,32,1,32,1,32,1,32,
	1,32,5,32,425,8,32,10,32,12,32,428,9,32,1,33,1,33,1,33,1,33,1,33,1,33,5,
	33,436,8,33,10,33,12,33,439,9,33,1,34,1,34,1,34,0,7,48,56,58,60,62,64,66,
	35,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,
	50,52,54,56,58,60,62,64,66,68,0,7,1,0,5,7,1,0,41,42,2,0,26,27,29,29,1,0,
	30,32,2,0,26,26,29,29,1,0,37,40,1,0,35,36,461,0,74,1,0,0,0,2,82,1,0,0,0,
	4,84,1,0,0,0,6,100,1,0,0,0,8,102,1,0,0,0,10,128,1,0,0,0,12,130,1,0,0,0,
	14,147,1,0,0,0,16,160,1,0,0,0,18,193,1,0,0,0,20,208,1,0,0,0,22,210,1,0,
	0,0,24,219,1,0,0,0,26,221,1,0,0,0,28,229,1,0,0,0,30,244,1,0,0,0,32,255,
	1,0,0,0,34,296,1,0,0,0,36,298,1,0,0,0,38,300,1,0,0,0,40,302,1,0,0,0,42,
	319,1,0,0,0,44,321,1,0,0,0,46,337,1,0,0,0,48,350,1,0,0,0,50,360,1,0,0,0,
	52,362,1,0,0,0,54,372,1,0,0,0,56,374,1,0,0,0,58,385,1,0,0,0,60,396,1,0,
	0,0,62,407,1,0,0,0,64,418,1,0,0,0,66,429,1,0,0,0,68,440,1,0,0,0,70,73,3,
	2,1,0,71,73,3,22,11,0,72,70,1,0,0,0,72,71,1,0,0,0,73,76,1,0,0,0,74,72,1,
	0,0,0,74,75,1,0,0,0,75,77,1,0,0,0,76,74,1,0,0,0,77,78,5,0,0,1,78,1,1,0,
	0,0,79,83,3,4,2,0,80,83,3,16,8,0,81,83,3,12,6,0,82,79,1,0,0,0,82,80,1,0,
	0,0,82,81,1,0,0,0,83,3,1,0,0,0,84,85,5,8,0,0,85,86,3,6,3,0,86,91,3,8,4,
	0,87,88,5,22,0,0,88,90,3,8,4,0,89,87,1,0,0,0,90,93,1,0,0,0,91,89,1,0,0,
	0,91,92,1,0,0,0,92,94,1,0,0,0,93,91,1,0,0,0,94,95,5,23,0,0,95,5,1,0,0,0,
	96,101,5,5,0,0,97,101,5,6,0,0,98,101,5,43,0,0,99,101,3,14,7,0,100,96,1,
	0,0,0,100,97,1,0,0,0,100,98,1,0,0,0,100,99,1,0,0,0,101,7,1,0,0,0,102,109,
	5,43,0,0,103,104,5,18,0,0,104,105,3,68,34,0,105,106,5,19,0,0,106,108,1,
	0,0,0,107,103,1,0,0,0,108,111,1,0,0,0,109,107,1,0,0,0,109,110,1,0,0,0,110,
	112,1,0,0,0,111,109,1,0,0,0,112,113,5,28,0,0,113,114,3,10,5,0,114,9,1,0,
	0,0,115,129,3,68,34,0,116,125,5,20,0,0,117,122,3,10,5,0,118,119,5,22,0,
	0,119,121,3,10,5,0,120,118,1,0,0,0,121,124,1,0,0,0,122,120,1,0,0,0,122,
	123,1,0,0,0,123,126,1,0,0,0,124,122,1,0,0,0,125,117,1,0,0,0,125,126,1,0,
	0,0,126,127,1,0,0,0,127,129,5,21,0,0,128,115,1,0,0,0,128,116,1,0,0,0,129,
	11,1,0,0,0,130,131,5,1,0,0,131,132,5,43,0,0,132,133,5,20,0,0,133,134,3,
	6,3,0,134,141,3,18,9,0,135,136,5,22,0,0,136,137,3,6,3,0,137,138,3,18,9,
	0,138,140,1,0,0,0,139,135,1,0,0,0,140,143,1,0,0,0,141,139,1,0,0,0,141,142,
	1,0,0,0,142,144,1,0,0,0,143,141,1,0,0,0,144,145,5,21,0,0,145,146,5,23,0,
	0,146,13,1,0,0,0,147,148,5,16,0,0,148,153,3,6,3,0,149,150,5,22,0,0,150,
	152,3,6,3,0,151,149,1,0,0,0,152,155,1,0,0,0,153,151,1,0,0,0,153,154,1,0,
	0,0,154,156,1,0,0,0,155,153,1,0,0,0,156,157,5,17,0,0,157,158,5,2,0,0,158,
	159,3,6,3,0,159,15,1,0,0,0,160,161,3,6,3,0,161,166,3,18,9,0,162,163,5,22,
	0,0,163,165,3,18,9,0,164,162,1,0,0,0,165,168,1,0,0,0,166,164,1,0,0,0,166,
	167,1,0,0,0,167,169,1,0,0,0,168,166,1,0,0,0,169,170,5,23,0,0,170,17,1,0,
	0,0,171,178,5,43,0,0,172,173,5,18,0,0,173,174,3,68,34,0,174,175,5,19,0,
	0,175,177,1,0,0,0,176,172,1,0,0,0,177,180,1,0,0,0,178,176,1,0,0,0,178,179,
	1,0,0,0,179,194,1,0,0,0,180,178,1,0,0,0,181,188,5,43,0,0,182,183,5,18,0,
	0,183,184,3,68,34,0,184,185,5,19,0,0,185,187,1,0,0,0,186,182,1,0,0,0,187,
	190,1,0,0,0,188,186,1,0,0,0,188,189,1,0,0,0,189,191,1,0,0,0,190,188,1,0,
	0,0,191,192,5,28,0,0,192,194,3,20,10,0,193,171,1,0,0,0,193,181,1,0,0,0,
	194,19,1,0,0,0,195,209,3,36,18,0,196,205,5,20,0,0,197,202,3,20,10,0,198,
	199,5,22,0,0,199,201,3,20,10,0,200,198,1,0,0,0,201,204,1,0,0,0,202,200,
	1,0,0,0,202,203,1,0,0,0,203,206,1,0,0,0,204,202,1,0,0,0,205,197,1,0,0,0,
	205,206,1,0,0,0,206,207,1,0,0,0,207,209,5,21,0,0,208,195,1,0,0,0,208,196,
	1,0,0,0,209,21,1,0,0,0,210,211,3,24,12,0,211,212,5,43,0,0,212,214,5,16,
	0,0,213,215,3,26,13,0,214,213,1,0,0,0,214,215,1,0,0,0,215,216,1,0,0,0,216,
	217,5,17,0,0,217,218,3,30,15,0,218,23,1,0,0,0,219,220,7,0,0,0,220,25,1,
	0,0,0,221,226,3,28,14,0,222,223,5,22,0,0,223,225,3,28,14,0,224,222,1,0,
	0,0,225,228,1,0,0,0,226,224,1,0,0,0,226,227,1,0,0,0,227,27,1,0,0,0,228,
	226,1,0,0,0,229,230,3,6,3,0,230,242,5,43,0,0,231,232,5,18,0,0,232,239,5,
	19,0,0,233,234,5,18,0,0,234,235,3,68,34,0,235,236,5,19,0,0,236,238,1,0,
	0,0,237,233,1,0,0,0,238,241,1,0,0,0,239,237,1,0,0,0,239,240,1,0,0,0,240,
	243,1,0,0,0,241,239,1,0,0,0,242,231,1,0,0,0,242,243,1,0,0,0,243,29,1,0,
	0,0,244,248,5,20,0,0,245,247,3,32,16,0,246,245,1,0,0,0,247,250,1,0,0,0,
	248,246,1,0,0,0,248,249,1,0,0,0,249,251,1,0,0,0,250,248,1,0,0,0,251,252,
	5,21,0,0,252,31,1,0,0,0,253,256,3,2,1,0,254,256,3,34,17,0,255,253,1,0,0,
	0,255,254,1,0,0,0,256,33,1,0,0,0,257,258,3,40,20,0,258,259,5,28,0,0,259,
	260,3,36,18,0,260,261,5,23,0,0,261,297,1,0,0,0,262,264,3,36,18,0,263,262,
	1,0,0,0,263,264,1,0,0,0,264,265,1,0,0,0,265,297,5,23,0,0,266,297,3,30,15,
	0,267,268,5,10,0,0,268,269,5,16,0,0,269,270,3,38,19,0,270,271,5,17,0,0,
	271,272,3,34,17,0,272,297,1,0,0,0,273,274,5,10,0,0,274,275,5,16,0,0,275,
	276,3,38,19,0,276,277,5,17,0,0,277,278,3,34,17,0,278,279,5,11,0,0,279,280,
	3,34,17,0,280,297,1,0,0,0,281,282,5,12,0,0,282,283,5,16,0,0,283,284,3,38,
	19,0,284,285,5,17,0,0,285,286,3,34,17,0,286,297,1,0,0,0,287,288,5,13,0,
	0,288,297,5,23,0,0,289,290,5,14,0,0,290,297,5,23,0,0,291,293,5,9,0,0,292,
	294,3,36,18,0,293,292,1,0,0,0,293,294,1,0,0,0,294,295,1,0,0,0,295,297,5,
	23,0,0,296,257,1,0,0,0,296,263,1,0,0,0,296,266,1,0,0,0,296,267,1,0,0,0,
	296,273,1,0,0,0,296,281,1,0,0,0,296,287,1,0,0,0,296,289,1,0,0,0,296,291,
	1,0,0,0,297,35,1,0,0,0,298,299,3,58,29,0,299,37,1,0,0,0,300,301,3,66,33,
	0,301,39,1,0,0,0,302,309,5,43,0,0,303,304,5,18,0,0,304,305,3,36,18,0,305,
	306,5,19,0,0,306,308,1,0,0,0,307,303,1,0,0,0,308,311,1,0,0,0,309,307,1,
	0,0,0,309,310,1,0,0,0,310,41,1,0,0,0,311,309,1,0,0,0,312,313,5,16,0,0,313,
	314,3,36,18,0,314,315,5,17,0,0,315,320,1,0,0,0,316,320,3,40,20,0,317,320,
	3,46,23,0,318,320,3,44,22,0,319,312,1,0,0,0,319,316,1,0,0,0,319,317,1,0,
	0,0,319,318,1,0,0,0,320,43,1,0,0,0,321,322,5,3,0,0,322,323,5,16,0,0,323,
	324,3,6,3,0,324,331,3,18,9,0,325,326,5,22,0,0,326,327,3,6,3,0,327,328,3,
	18,9,0,328,330,1,0,0,0,329,325,1,0,0,0,330,333,1,0,0,0,331,329,1,0,0,0,
	331,332,1,0,0,0,332,334,1,0,0,0,333,331,1,0,0,0,334,335,5,17,0,0,335,336,
	3,30,15,0,336,45,1,0,0,0,337,338,7,1,0,0,338,47,1,0,0,0,339,340,6,24,-1,
	0,340,351,3,42,21,0,341,342,5,43,0,0,342,344,5,16,0,0,343,345,3,52,26,0,
	344,343,1,0,0,0,344,345,1,0,0,0,345,346,1,0,0,0,346,351,5,17,0,0,347,348,
	3,50,25,0,348,349,3,48,24,2,349,351,1,0,0,0,350,339,1,0,0,0,350,341,1,0,
	0,0,350,347,1,0,0,0,351,357,1,0,0,0,352,353,10,1,0,0,353,354,5,4,0,0,354,
	356,5,43,0,0,355,352,1,0,0,0,356,359,1,0,0,0,357,355,1,0,0,0,357,358,1,
	0,0,0,358,49,1,0,0,0,359,357,1,0,0,0,360,361,7,2,0,0,361,51,1,0,0,0,362,
	367,3,54,27,0,363,364,5,22,0,0,364,366,3,54,27,0,365,363,1,0,0,0,366,369,
	1,0,0,0,367,365,1,0,0,0,367,368,1,0,0,0,368,53,1,0,0,0,369,367,1,0,0,0,
	370,373,3,36,18,0,371,373,5,44,0,0,372,370,1,0,0,0,372,371,1,0,0,0,373,
	55,1,0,0,0,374,375,6,28,-1,0,375,376,3,48,24,0,376,382,1,0,0,0,377,378,
	10,1,0,0,378,379,7,3,0,0,379,381,3,48,24,0,380,377,1,0,0,0,381,384,1,0,
	0,0,382,380,1,0,0,0,382,383,1,0,0,0,383,57,1,0,0,0,384,382,1,0,0,0,385,
	386,6,29,-1,0,386,387,3,56,28,0,387,393,1,0,0,0,388,389,10,1,0,0,389,390,
	7,4,0,0,390,392,3,56,28,0,391,388,1,0,0,0,392,395,1,0,0,0,393,391,1,0,0,
	0,393,394,1,0,0,0,394,59,1,0,0,0,395,393,1,0,0,0,396,397,6,30,-1,0,397,
	398,3,58,29,0,398,404,1,0,0,0,399,400,10,1,0,0,400,401,7,5,0,0,401,403,
	3,58,29,0,402,399,1,0,0,0,403,406,1,0,0,0,404,402,1,0,0,0,404,405,1,0,0,
	0,405,61,1,0,0,0,406,404,1,0,0,0,407,408,6,31,-1,0,408,409,3,60,30,0,409,
	415,1,0,0,0,410,411,10,1,0,0,411,412,7,6,0,0,412,414,3,60,30,0,413,410,
	1,0,0,0,414,417,1,0,0,0,415,413,1,0,0,0,415,416,1,0,0,0,416,63,1,0,0,0,
	417,415,1,0,0,0,418,419,6,32,-1,0,419,420,3,62,31,0,420,426,1,0,0,0,421,
	422,10,1,0,0,422,423,5,33,0,0,423,425,3,62,31,0,424,421,1,0,0,0,425,428,
	1,0,0,0,426,424,1,0,0,0,426,427,1,0,0,0,427,65,1,0,0,0,428,426,1,0,0,0,
	429,430,6,33,-1,0,430,431,3,64,32,0,431,437,1,0,0,0,432,433,10,1,0,0,433,
	434,5,34,0,0,434,436,3,64,32,0,435,432,1,0,0,0,436,439,1,0,0,0,437,435,
	1,0,0,0,437,438,1,0,0,0,438,67,1,0,0,0,439,437,1,0,0,0,440,441,3,58,29,
	0,441,69,1,0,0,0,41,72,74,82,91,100,109,122,125,128,141,153,166,178,188,
	193,202,205,208,214,226,239,242,248,255,263,293,296,309,319,331,344,350,
	357,367,372,382,393,404,415,426,437];

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
	public structDecl(): StructDeclContext {
		return this.getTypedRuleContext(StructDeclContext, 0) as StructDeclContext;
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
	public ID(): TerminalNode {
		return this.getToken(SysY2022EParser.ID, 0);
	}
	public lambdaType(): LambdaTypeContext {
		return this.getTypedRuleContext(LambdaTypeContext, 0) as LambdaTypeContext;
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


export class StructDeclContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(SysY2022EParser.ID, 0);
	}
	public LC(): TerminalNode {
		return this.getToken(SysY2022EParser.LC, 0);
	}
	public bType_list(): BTypeContext[] {
		return this.getTypedRuleContexts(BTypeContext) as BTypeContext[];
	}
	public bType(i: number): BTypeContext {
		return this.getTypedRuleContext(BTypeContext, i) as BTypeContext;
	}
	public varDef_list(): VarDefContext[] {
		return this.getTypedRuleContexts(VarDefContext) as VarDefContext[];
	}
	public varDef(i: number): VarDefContext {
		return this.getTypedRuleContext(VarDefContext, i) as VarDefContext;
	}
	public RC(): TerminalNode {
		return this.getToken(SysY2022EParser.RC, 0);
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
    	return SysY2022EParser.RULE_structDecl;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterStructDecl) {
	 		listener.enterStructDecl(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitStructDecl) {
	 		listener.exitStructDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitStructDecl) {
			return visitor.visitStructDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaTypeContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LP(): TerminalNode {
		return this.getToken(SysY2022EParser.LP, 0);
	}
	public bType_list(): BTypeContext[] {
		return this.getTypedRuleContexts(BTypeContext) as BTypeContext[];
	}
	public bType(i: number): BTypeContext {
		return this.getTypedRuleContext(BTypeContext, i) as BTypeContext;
	}
	public RP(): TerminalNode {
		return this.getToken(SysY2022EParser.RP, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SysY2022EParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SysY2022EParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_lambdaType;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterLambdaType) {
	 		listener.enterLambdaType(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitLambdaType) {
	 		listener.exitLambdaType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitLambdaType) {
			return visitor.visitLambdaType(this);
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
export class PrimaryExp4Context extends PrimaryExpContext {
	constructor(parser: SysY2022EParser, ctx: PrimaryExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public lambdaExp(): LambdaExpContext {
		return this.getTypedRuleContext(LambdaExpContext, 0) as LambdaExpContext;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterPrimaryExp4) {
	 		listener.enterPrimaryExp4(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitPrimaryExp4) {
	 		listener.exitPrimaryExp4(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitPrimaryExp4) {
			return visitor.visitPrimaryExp4(this);
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


export class LambdaExpContext extends ParserRuleContext {
	constructor(parser?: SysY2022EParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LP(): TerminalNode {
		return this.getToken(SysY2022EParser.LP, 0);
	}
	public bType_list(): BTypeContext[] {
		return this.getTypedRuleContexts(BTypeContext) as BTypeContext[];
	}
	public bType(i: number): BTypeContext {
		return this.getTypedRuleContext(BTypeContext, i) as BTypeContext;
	}
	public varDef_list(): VarDefContext[] {
		return this.getTypedRuleContexts(VarDefContext) as VarDefContext[];
	}
	public varDef(i: number): VarDefContext {
		return this.getTypedRuleContext(VarDefContext, i) as VarDefContext;
	}
	public RP(): TerminalNode {
		return this.getToken(SysY2022EParser.RP, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(SysY2022EParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(SysY2022EParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return SysY2022EParser.RULE_lambdaExp;
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterLambdaExp) {
	 		listener.enterLambdaExp(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitLambdaExp) {
	 		listener.exitLambdaExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitLambdaExp) {
			return visitor.visitLambdaExp(this);
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
export class Unary4Context extends UnaryExpContext {
	constructor(parser: SysY2022EParser, ctx: UnaryExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public unaryExp(): UnaryExpContext {
		return this.getTypedRuleContext(UnaryExpContext, 0) as UnaryExpContext;
	}
	public ID(): TerminalNode {
		return this.getToken(SysY2022EParser.ID, 0);
	}
	public enterRule(listener: SysY2022EListener): void {
	    if(listener.enterUnary4) {
	 		listener.enterUnary4(this);
		}
	}
	public exitRule(listener: SysY2022EListener): void {
	    if(listener.exitUnary4) {
	 		listener.exitUnary4(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SysY2022EVisitor<Result>): Result {
		if (visitor.visitUnary4) {
			return visitor.visitUnary4(this);
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
