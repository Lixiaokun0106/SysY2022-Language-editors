import  SysY2022EListener  from '../listener/SysY2022EListener';
import { SysY2022EParser,ConstDefContext,UninitVarDefContext,InitVarDefContext,FuncDefContext, StructDeclContext } from '../parser/SysY2022EParser';
import { Symbol, SymbolType } from './Symbol';

export class SymbolTableGenerator extends SysY2022EListener {
    public symbolTable: Symbol[] = [];

    enterConstDef = (ctx: ConstDefContext) => {
        // name
        const name = ctx.ID().getText();
        // 获得位置信息
        const line = ctx.start.line;
        const column = ctx.start.column;
        const symbol = new Symbol(name, SymbolType.CONSTANT,line,column);
        this.symbolTable.push(symbol);
    }

    enterUninitVarDef = (ctx: UninitVarDefContext) => {
        const name = ctx.ID().getText();
        const line = ctx.start.line;
        const column = ctx.start.column;
        const symbol = new Symbol(name, SymbolType.VARIABLE,line,column);
        this.symbolTable.push(symbol);
    }

    enterInitVarDef = (ctx: InitVarDefContext) => {
        const name = ctx.ID().getText();
        const line = ctx.start.line;
        const column = ctx.start.column;
        const symbol = new Symbol(name, SymbolType.VARIABLE,line,column);
        this.symbolTable.push(symbol);
    }

    enterFuncDef = (ctx: FuncDefContext) => {
        const name = ctx.ID().getText();
        const line = ctx.start.line;
        const column = ctx.start.column;
        const symbol = new Symbol(name, SymbolType.FUNCTION,line,column);
        this.symbolTable.push(symbol);
    }

    enterStructDecl = (ctx: StructDeclContext) => {
        const name = ctx.STRUCTNAME().getText();
        const line = ctx.start.line;
        const column = ctx.start.column;
        const symbol = new Symbol(name, SymbolType.STRUCTOR,line,column);
        this.symbolTable.push(symbol);
    }


}