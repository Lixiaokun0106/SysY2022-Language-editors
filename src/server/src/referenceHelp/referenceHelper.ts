import  SysY2022EListener  from '../listener/SysY2022EListener';
import { SysY2022EParser,ConstDefContext,UninitVarDefContext,InitVarDefContext,
		FuncDefContext, StructDeclContext, BTypeContext, FuncFParamContext, LVal1Context,
		LVal2Context, 
		Unary2Context} from '../parser/SysY2022EParser';
import { ReferenceRecord } from './referenceRecord';

export class ReferenceRecordGeneretor extends SysY2022EListener {
    // 列表用于存储所有的引用
	public reference = new Array<ReferenceRecord>();
	

	enterBType = (ctx: BTypeContext) => {
		if(ctx.STRUCTNAME()!==null){
			const name = ctx.STRUCTNAME().getText();
			const line = ctx.start.line;
			const column = ctx.start.column;
			//const inputStream = ctx.start.getInputStream();
			//const uri = inputStream.getSourceName();
			const content = ctx.getText();
			this.reference.push({ name, line, column, content });
		}
	}
	
	enterConstDef = (ctx: ConstDefContext) => {
        const name = ctx.ID().getText();
		const line = ctx.start.line;
		const column = ctx.start.column;
		const content = ctx.getText();
		this.reference.push({ name, line, column, content });
    }

	enterStructDecl = (ctx: StructDeclContext) => {
		const name = ctx.STRUCTNAME().getText();
		const line = ctx.start.line;
		const column = ctx.start.column;
		const content = ctx.getText();
		this.reference.push({ name, line, column, content });
	}

	enterUninitVarDef = (ctx: UninitVarDefContext) => {
		const name = ctx.ID().getText();
		const line = ctx.start.line;
		const column = ctx.start.column;
		const content = ctx.getText();
		this.reference.push({ name, line, column, content });
	}

	enterInitVarDef = (ctx: InitVarDefContext) => {
		const name = ctx.ID().getText();
		const line = ctx.start.line;
		const column = ctx.start.column;
		const content = ctx.getText();
		this.reference.push({ name, line, column, content });
	}

	enterFuncDef = (ctx: FuncDefContext) => {
		const name = ctx.ID().getText();
		const line = ctx.start.line;
		const column = ctx.start.column;
		const content = ctx.getText();
		this.reference.push({ name, line, column, content });
	}

	enterFuncFParam = (ctx: FuncFParamContext) => {
		const name = ctx.ID().getText();
		const line = ctx.start.line;
		const column = ctx.start.column;
		const content = ctx.getText();
		this.reference.push({ name, line, column, content });
	}

	enterLVal1 = (ctx: LVal1Context) => {
		const name = ctx.ID().getText();
		const line = ctx.start.line;
		const column = ctx.start.column;
		const content = ctx.getText();
		this.reference.push({ name, line, column, content });
	}

	enterLVal2 = (ctx: LVal2Context) => {
		const name1 = ctx.ID(0).getText();
		const name2 = ctx.ID(1).getText();
		const line = ctx.start.line;
		const column = ctx.start.column;
		const content = ctx.getText();
		this.reference.push({ name:name1, line, column, content });
		this.reference.push({ name:name2, line, column, content });
	}

	enterUnary2 = (ctx: Unary2Context) => {
		const name = ctx.ID().getText();
		const line = ctx.start.line;
		const column = ctx.start.column;
		const content = ctx.getText();
		this.reference.push({ name, line, column, content });
	}

}