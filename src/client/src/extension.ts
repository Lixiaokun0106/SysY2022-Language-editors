/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from 'path';
import { workspace, ExtensionContext } from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient/node';

let client: LanguageClient;

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
		// 仅对纯文本文档注册服务器
		documentSelector: [{ scheme: 'file', language: 'SysY2022E' }],
		synchronize: {
			// 通知服务器关于工作区中包含的'.sy'文件的更改
			fileEvents: workspace.createFileSystemWatcher('**/*.sy')
		}
	};
	// 创建语言客户端并启动客户端
	client = new LanguageClient(
		'languageServerExample',
		'Language Server Example',
		serverOptions,
		clientOptions
	);
	console.log('client start');

	// 这将启动客户端，也会启动服务器
	client.start();

	console.log('Congratulations, your extension "client" is now active!');

}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
