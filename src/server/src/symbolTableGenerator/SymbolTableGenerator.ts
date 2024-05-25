import  SysY2022EListener  from '../listener/SysY2022EListener';
import { SysY2022EParser,ConstDefContext,UninitVarDefContext,InitVarDefContext,FuncDefContext, StructDeclContext } from '../parser/SysY2022EParser';
import { Symbol, SymbolType } from './Symbol';

export class SymbolTableGenerator extends SysY2022EListener {
    public symbolTable: Symbol[] = [];

    enterConstDef = (ctx: ConstDefContext) => {
        const name = ctx.ID().getText();
        const symbol = new Symbol(name, SymbolType.CONSTANT);
        this.symbolTable.push(symbol);
    }

    enterUninitVarDef = (ctx: UninitVarDefContext) => {
        const name = ctx.ID().getText();
        const symbol = new Symbol(name, SymbolType.VARIABLE);
        this.symbolTable.push(symbol);
    }

    enterInitVarDef = (ctx: InitVarDefContext) => {
        const name = ctx.ID().getText();
        const symbol = new Symbol(name, SymbolType.VARIABLE);
        this.symbolTable.push(symbol);
    }

    enterFuncDef = (ctx: FuncDefContext) => {
        const name = ctx.ID().getText();
        const symbol = new Symbol(name, SymbolType.FUNCTION);
        this.symbolTable.push(symbol);
    }


}