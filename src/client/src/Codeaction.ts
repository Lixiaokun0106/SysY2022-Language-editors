import * as vscode from 'vscode';

export class MyRefactorProvider implements vscode.CodeActionProvider {
    provideCodeActions(document: vscode.TextDocument, range: vscode.Range, context: vscode.CodeActionContext, token: vscode.CancellationToken): vscode.ProviderResult<(vscode.Command | vscode.CodeAction)[]> {
        // 转化为大写
        const action_1 = new vscode.CodeAction('转换为大写', vscode.CodeActionKind.Refactor);
        // 设置这个 CodeAction 的编辑操作
        action_1.edit = new vscode.WorkspaceEdit();
        // 获取选定区域的文本
        const text_1 = document.getText(range);
        // 创建一个新的 TextEdit，将选定的文本转换为大写
        const edit_1 = vscode.TextEdit.replace(range, text_1.toUpperCase());
        // 将这个 TextEdit 添加到 CodeAction 的编辑操作中
        action_1.edit.set(document.uri, [edit_1]);


		// 抽取新函数
		const action_2 = new vscode.CodeAction('抽取为新函数', vscode.CodeActionKind.Refactor);
		// 设置这个 CodeAction 的编辑操作
		action_2.edit = new vscode.WorkspaceEdit();
		// 获取选定区域的文本
		const text_2 = document.getText(range);
		// 将选定区域的代码提取到一个新的函数中
		const edit_2 = vscode.TextEdit.insert(range.start, `void newFunction() {\n${text_2}\n}\n`);
		// 将这个 TextEdit 添加到 CodeAction 的编辑操作中
		action_2.edit.set(document.uri, [edit_2]);


		// 内联函数
		const action_3 = new vscode.CodeAction('内联函数', vscode.CodeActionKind.Refactor);
		// 设置这个 CodeAction 的编辑操作
		action_3.edit = new vscode.WorkspaceEdit();
		// 获取选定区域的文本
		const text_3 = document.getText(range);
		// 创建一个正则表达式，匹配函数的定义
		const functionDefinitionRegex_1 = new RegExp(`int ${text_3}\\((.*?)\\)\\s*\\{([\\s\\S]*?)\\}\\s*`, 'g');
		const functionDefinitionRegex_2 = new RegExp(`float ${text_3}\\((.*?)\\)\\s*\\{([\\s\\S]*?)\\}\\s*`, 'g');
		const functionDefinitionRegex_3 = new RegExp(`void ${text_3}\\((.*?)\\)\\s*\\{([\\s\\S]*?)\\}\\s*`, 'g');		
		// 在文档中找到函数的定义
		const match_1 = functionDefinitionRegex_1.exec(document.getText());
		const match_2 = functionDefinitionRegex_2.exec(document.getText());
		const match_3 = functionDefinitionRegex_3.exec(document.getText());
		console.log(match_1)
		console.log(match_2)
		console.log(match_3)
		

		if (match_1 || match_2 || match_3) {
			// 获取函数的体
			let functionBody = '';
			if (match_1) {
				functionBody = match_1[2];
			}
			if (match_2) {
				functionBody = match_2[2];
			}
			if (match_3) {
				functionBody = match_3[2];
			}
			// 创建一个正则表达式，匹配函数的调用
			const functionCallRegex = new RegExp(`\\b${text_3}\\(\\s*\\);`, 'g');			const matches = [...document.getText().matchAll(functionCallRegex)];
			console.log(matches)
			// 为每个函数调用创建一个 TextEdit，将函数调用替换为函数的体
			const edits = matches.map(match => vscode.TextEdit.replace(new vscode.Range(document.positionAt(match.index), document.positionAt(match.index + match[0].length)), functionBody));
			// 将这些 TextEdit 添加到 CodeAction 的编辑操作中
			action_3.edit.set(document.uri, edits);
			// 创建一个 TextEdit，删除函数的定义
			//const deleteEdit = vscode.TextEdit.delete(new vscode.Range(document.positionAt(functionDefinitionRegex.lastIndex - match[0].length), document.positionAt(functionDefinitionRegex.lastIndex)));
			// 将这个 TextEdit 添加到 CodeAction 的编辑操作中
			//action_3.edit.set(document.uri, [deleteEdit]);
		}

		
		



		





        // 返回 CodeAction
        return [action_1, action_2, action_3];
    }
}