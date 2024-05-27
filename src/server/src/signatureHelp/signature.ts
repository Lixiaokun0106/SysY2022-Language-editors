// 函数签名帮助信息类
import  SysY2022EListener  from '../listener/SysY2022EListener';
import { SysY2022EParser,FuncDefContext } from '../parser/SysY2022EParser';
import { SignatureRecord } from './signatureRecord';

export class FuncSignGenerator extends SysY2022EListener {
    public FuncSignMap: Map<string, SignatureRecord> = new Map<string, SignatureRecord>();

    enterFuncDef = (ctx: FuncDefContext) => {

        let funcName = ctx.ID().getText();
		let returnType = ctx.funcType().getText();
		let parameters: string[] = [];
		let paramList = ctx.funcFParams();
		if (paramList != null) {
			for (let i = 0; i < paramList.funcFParam.length; i++) {
				parameters.push(paramList.funcFParam(i).getText());
			}
		}
		//let documentation = ctx.getText();
		let documentation = `函数名: ${funcName}\n返回类型: ${returnType}\n参数: ${parameters.join(', ')}\n`;
		let signatureRecord: SignatureRecord = {
			parameters: parameters,
			returnType: returnType,
			documentation: documentation
		};
		this.FuncSignMap.set(funcName, signatureRecord);
    }

}