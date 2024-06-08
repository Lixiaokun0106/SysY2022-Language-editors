/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from 'path';
import { workspace, ExtensionContext } from 'vscode';
import * as vscode from 'vscode';
import { runAnalysis } from './runAnalysis';
import { GoRenameProvider } from './Rename';
import { MyRefactorProvider } from './Codeaction';
import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind,
	CodeActionRequest
} from 'vscode-languageclient/node';

let client: LanguageClient;
const GO_MODE: vscode.DocumentFilter = { language: 'SysY2022E', scheme: 'file' };

export function activate(context: ExtensionContext) {
	// 服务器是用node实现的
	const serverModule = context.asAbsolutePath(
		path.join('server', 'out', 'server.js')
	);
	

	// 如果拓展在调试模式下启动，则使用调试服务器选项，否则使用运行选项
	const serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: {
			module: serverModule,
			transport: TransportKind.ipc,
		}
	};

	// 控制语言客户端的选项
	const clientOptions: LanguageClientOptions = {
		documentSelector: [{ scheme: 'file', language: 'SysY2022E' }],
		synchronize: {
			// 通知服务器关于工作区中包含的'.sy'文件的更改
			fileEvents: workspace.createFileSystemWatcher('**/*.sy')
		}
	};
	// 创建语言客户端并启动客户端
	client = new LanguageClient(
		'SysY2022ElanguageSupport',
		'SysY2022E Language Support',
		serverOptions,
		clientOptions
	);
	console.log('client start');

	// 这将启动客户端，也会启动服务器
	client.start();

	console.log('Congratulations, your extension "client" is now active!');

    // 注册analysis命令
	let analysis = vscode.commands.registerCommand('extension.runAnalysis', () => {
		runAnalysis();
	});
	context.subscriptions.push(analysis);


	//  重命名
	context.subscriptions.push(
		vscode.languages.registerRenameProvider(
			GO_MODE,new GoRenameProvider()
		)
	);
	
	// 代码重构
	context.subscriptions.push(
		vscode.languages.registerCodeActionsProvider(
			GO_MODE, new MyRefactorProvider()
		)
	);



}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
