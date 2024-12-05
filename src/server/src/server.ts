/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import {
	createConnection,
	TextDocuments,
	Diagnostic,
	DiagnosticSeverity,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	CompletionItemKind,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult,
	DocumentDiagnosticReportKind,
	type DocumentDiagnosticReport,
	Hover,
	Position,
	CodeActionParams,CodeAction,Command,CodeActionKind,ExecuteCommandParams,
	Location,Range,SignatureHelp,SignatureInformation,TextEdit,RenameParams,WorkspaceEdit
} from 'vscode-languageserver/node';

// 导入antlr生成的类
import  {SysY2022ELexer}  from './lexer/SysY2022ELexer';
import  {SysY2022EParser}  from './parser/SysY2022EParser';
import { CharStream, CommonTokenStream,ParseTreeListener,ParseTreeWalker } from 'antlr4';
import { SymbolTableGenerator } from './symbolTableGenerator/SymbolTableGenerator';
import { FuncSignGenerator } from './signatureHelp/signature';
import { ReferenceRecordGeneretor } from './referenceHelp/referenceHelper';
import { SymbolType } from './symbolTableGenerator/Symbol';
import { SyntaxChecker } from './syntaxchecker/syntaxChecker';


import {
	TextDocument
} from 'vscode-languageserver-textdocument';


// 为服务器创建一个连接，使用Node的IPC作为传输。
// 还包括所有预览/建议的LSP功能。
const connection = createConnection(ProposedFeatures.all);

// 创建一个简单的文本文档管理器。
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;
let MySymbolGenerator = new SymbolTableGenerator();

connection.onInitialize((params: InitializeParams) => {
	const capabilities = params.capabilities;

	// 如果客户端支持`workspace/configuration`请求吗？
	// 如果不支持，我们将使用全局设置。
	hasConfigurationCapability = !!(
		capabilities.workspace && !!capabilities.workspace.configuration
	);
	hasWorkspaceFolderCapability = !!(
		capabilities.workspace && !!capabilities.workspace.workspaceFolders
	);
	hasDiagnosticRelatedInformationCapability = !!(
		capabilities.textDocument &&
		capabilities.textDocument.publishDiagnostics &&
		capabilities.textDocument.publishDiagnostics.relatedInformation
	);

	const result: InitializeResult = {
		capabilities: {
			// 告诉客户端这个服务器支持悬停。
			hoverProvider: true,
			// 告诉客户端服务器支持代码操作。
			codeActionProvider: true,
			executeCommandProvider: {
				commands: ['SysY2022E.fix']
			},
			// 告诉客户端服务器支持显示符号定义
			definitionProvider: true,
			// 告诉客户端服务器支持函数或方法签名帮助
			signatureHelpProvider: {
				triggerCharacters: ['(']
			},
			// 告诉客户端服务器支持显示对符号的所有引用
			referencesProvider: true,
			// 重命名功能
			//renameProvider: true,


			
			

			// 告诉客户端这个服务器支持代码的增量同步。
			textDocumentSync: TextDocumentSyncKind.Incremental,
			// 通知客户端此服务器支持代码完成。
			completionProvider: {
				resolveProvider: true
				//triggerCharacters: ['.', ':', '<', '>']
			},
			diagnosticProvider: {
				interFileDependencies: false,
				workspaceDiagnostics: false
			}
		}
	};
	if (hasWorkspaceFolderCapability) {
		result.capabilities.workspace = {
			workspaceFolders: {
				supported: true
			}
		};
	}
	return result;
});

connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		// 注册所有配置更改。
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			connection.console.log('Workspace folder change event received.');
		});
	}
});

connection.languages.diagnostics.on(async (params) => {
	const document = documents.get(params.textDocument.uri);
	if (document !== undefined) {
		return {
			kind: DocumentDiagnosticReportKind.Full,
			items: await validateTextDocument(document)
		} satisfies DocumentDiagnosticReport;
	} else {
		// We don't know the document. We can either try to read it from disk
		// or we don't report problems for it.
		return {
			kind: DocumentDiagnosticReportKind.Full,
			items: []
		} satisfies DocumentDiagnosticReport;
	}
});

async function validateTextDocument(textDocument: TextDocument): Promise<Diagnostic[]> {
	// In this simple example we get the settings for every validate run.
	const settings = await getDocumentSettings(textDocument.uri);

	// The validator creates diagnostics for all uppercase words length 2 and more
	const text = textDocument.getText();
	const pattern = /\b[A-Z]{2,}\b/g;
	let m: RegExpExecArray | null;

	let problems = 0;
	const diagnostics: Diagnostic[] = [];
	while ((m = pattern.exec(text)) && problems < settings.maxNumberOfProblems) {
		problems++;
		const diagnostic: Diagnostic = {
			severity: DiagnosticSeverity.Warning,
			range: {
				start: textDocument.positionAt(m.index),
				end: textDocument.positionAt(m.index + m[0].length)
			},
			message: `${m[0]} is all uppercase.`,
			source: 'ex'
		};
		if (hasDiagnosticRelatedInformationCapability) {
			diagnostic.relatedInformation = [
				{
					location: {
						uri: textDocument.uri,
						range: Object.assign({}, diagnostic.range)
					},
					message: 'Spelling matters'
				},
				{
					location: {
						uri: textDocument.uri,
						range: Object.assign({}, diagnostic.range)
					},
					message: 'Particularly for names'
				}
			];
		}
		diagnostics.push(diagnostic);
	}
	return diagnostics;
}

// 样例设置
interface ExampleSettings {
	maxNumberOfProblems: number;
}

// 全局设置，当客户端不支持`workspace/configuration`请求时使用。
// 请注意，当使用此示例中提供的客户端时，情况并非如此
// 但可能会发生在其他客户端。
const defaultSettings: ExampleSettings = { maxNumberOfProblems: 1000 };
let globalSettings: ExampleSettings = defaultSettings;

// 缓存所有打开文档的设置
const documentSettings: Map<string, Thenable<ExampleSettings>> = new Map();

connection.onDidChangeConfiguration(change => {
	if (hasConfigurationCapability) {
		// 重置所有缓存的文档设置
		documentSettings.clear();
	} else {
		globalSettings = <ExampleSettings>(
			(change.settings.languageServerExample || defaultSettings)
		);
	}

	// 刷新诊断，因为`maxNumberOfProblems`可能已更改。
	// 我们可以在这里优化事情，首先重新获取设置，然后可以比较
	// 对现有设置，但这超出了此示例的范围。
	connection.languages.diagnostics.refresh();
});

function getDocumentSettings(resource: string): Thenable<ExampleSettings> {
	if (!hasConfigurationCapability) {
		return Promise.resolve(globalSettings);
	}
	let result = documentSettings.get(resource);
	if (!result) {
		result = connection.workspace.getConfiguration({
			scopeUri: resource,
			section: 'languageServer'
		});
		documentSettings.set(resource, result);
	}
	return result;
}

// 当文档关闭时，删除其设置
documents.onDidClose(e => {
	documentSettings.delete(e.document.uri);
});

// 文件内容发生更改时，将触发此事件。
// 当文件首次打开或其内容发生更改时，将触发此事件。
documents.onDidOpen(change => {
	handleDocument(change.document)

	const document = change.document;
	const text = document.getText();
	// 创建词法分析器和解析器
	let inputStream = new CharStream(text);
	let lexer = new SysY2022ELexer(inputStream);
	let tokenStream = new CommonTokenStream(lexer);
	let parser = new SysY2022EParser(tokenStream);
	
	parser.buildParseTrees = true;
	
	
	let tree = parser.compUnit();


	const checker = new SyntaxChecker();
	checker.visit(tree);
	console.log(checker.errors);

	// 将错误转换为诊断信息
	let diagnostics: Diagnostic[] = checker.errors.map(error => ({
		severity: DiagnosticSeverity.Error,
		range: {
	  	start: document.positionAt(error.start),
	  	end: document.positionAt(error.stop)
		},
		message:  error.message ,
		source: 'SysY2022E Language Support',
		relatedInformation: [ // 相关信息
        {
            location: {
                uri: document.uri,
                range: {
                    start: document.positionAt(error.start),
                    end: document.positionAt(error.stop)
                }
            },
            message: error.suggestion // 这里的suggestion是修改建议
        }
    ]
  	}));
  
  	// 发送诊断信息
  	connection.sendDiagnostics({ uri: document.uri, diagnostics });

});
	
	
// 文件内容发生更改时，将触发此事件。
documents.onDidChangeContent(change => {
	handleDocument(change.document);

	const document = change.document;
	const text = document.getText();
	// 创建词法分析器和解析器
	let inputStream = new CharStream(text);
	let lexer = new SysY2022ELexer(inputStream);
	let tokenStream = new CommonTokenStream(lexer);
	let parser = new SysY2022EParser(tokenStream);
	
	parser.buildParseTrees = true;
	
	
	let tree = parser.compUnit();


	const checker = new SyntaxChecker();
	checker.visit(tree);
	console.log(checker.errors);

	// 将错误转换为诊断信息
	let diagnostics: Diagnostic[] = checker.errors.map(error => ({
		severity: DiagnosticSeverity.Error,
		range: {
	  	start: document.positionAt(error.start),
	  	end: document.positionAt(error.stop)
		},
		message:  error.message ,
		source: 'SysY2022E Language Support',
		relatedInformation: [ // 相关信息
        {
            location: {
                uri: document.uri,
                range: {
                    start: document.positionAt(error.start),
                    end: document.positionAt(error.stop)
                }
            },
            message: error.suggestion // 这里的suggestion是修改建议
        }
    ]
  	}));
  
  	// 发送诊断信息
  	connection.sendDiagnostics({ uri: document.uri, diagnostics });

});

// 处理文档的函数
async function handleDocument(document: TextDocument) {
	// 获取文档的内容
	let text = document.getText();
  
	// 在这里，你可以使用ANTLR对文档内容进行分析
	// 创建词法分析器和解析器
	let inputStream = new CharStream(text);
	let lexer = new SysY2022ELexer(inputStream);
	let tokenStream = new CommonTokenStream(lexer);
	let parser = new SysY2022EParser(tokenStream);
	parser.buildParseTrees = true;
	let tree = parser.compUnit();
	console.log(tree.toStringTree(parser.ruleNames, parser));

	// 生成符号表
	const walker = new ParseTreeWalker();
	walker.walk(MySymbolGenerator, tree);

  }





// 悬停提示
connection.onHover(
    (params: TextDocumentPositionParams): Hover => {
        const document = documents.get(params.textDocument.uri);
        if (document === undefined) {
            return {
                contents: 'No document found'
            };
        }
        const text = document.getText();
        // 创建词法分析器和解析器
        let inputStream = new CharStream(text);
        let lexer = new SysY2022ELexer(inputStream);
        let tokenStream = new CommonTokenStream(lexer);
        let parser = new SysY2022EParser(tokenStream);
        parser.buildParseTrees = true;
        let tree = parser.compUnit();

        // 生成符号表
        const walker = new ParseTreeWalker();
        const tempSymbolGenerator = new SymbolTableGenerator();
        walker.walk(tempSymbolGenerator, tree);

        const offset = document.offsetAt(params.position);
        const words = text.split(/\W+/);
        let word = '';
        let match;
		const regex = /\b([a-zA-Z_][a-zA-Z0-9_]*)\b/g;
		while (match = regex.exec(text)) {
    		if (match.index <= offset && regex.lastIndex >= offset) {
      			word = match[0];
        		break;
    		}
		}

        // 在符号表中查找符号
        const symbol = tempSymbolGenerator.symbolTable.find(s => s.name === word);

        if (symbol) {
            const position = Position.create(params.position.line, params.position.character);
            return {
                contents: {
                    kind: 'markdown',
                    value: `### Symbol Information
                            -Name: ${symbol.name}
                            -Type: ${SymbolType[symbol.type]}
							-Definition: ${symbol.line}:${symbol.column}`
                },
                range: {
                    start: position,
                    end: position
                }
            };
        } else {
            return {contents:''};
        }
    }
);


// 自动修复功能
connection.onCodeAction((params: CodeActionParams) => {
    const diagnostics = params.context.diagnostics;
    const codeActions: CodeAction[] = [];

    for (const diagnostic of diagnostics) {
        const codeAction = CodeAction.create(
            'Fix this issue', // 标题
            Command.create('Fix', 'SysY2022E.fix', diagnostic), // 命令
            CodeActionKind.QuickFix // 类型
        );
        codeAction.diagnostics = [diagnostic];
        codeActions.push(codeAction);
    }

    return codeActions;
});
connection.onExecuteCommand((params: ExecuteCommandParams) => {
    if (params.command === 'SysY2022E.fix') {
		// 获取诊断信息
		//@ts-ignore
		const diagnostic = params.arguments[0] as Diagnostic;
		

        // 根据 diagnostic 来修复问题
		console.log(diagnostic);
    }
});












connection.onDidChangeWatchedFiles(_change => {
	// 文件发生更改
	connection.console.log('We received a file change event');
});


// 提供完成列表
connection.onCompletion(
	(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
		// 传递参数包含请求代码完成的文本文档的位置。
		return [
			{
				label: 'int',
				kind: CompletionItemKind.Text,
				data: 1
			},
			{
				label: 'float',
				kind: CompletionItemKind.Text,
				data: 2
			},
			{
				label: 'void',
				kind: CompletionItemKind.Text,
				data: 3
			},
			{
				label: 'const',
				kind: CompletionItemKind.Text,
				data: 4
			},
			{
				label: 'return',
				kind: CompletionItemKind.Text,
				data: 5
			},
			{
				label: 'if',
				kind: CompletionItemKind.Text,
				data: 6
			},
			{
				label: 'else',
				kind: CompletionItemKind.Text,
				data: 7
			},
			{
				label: 'while',
				kind: CompletionItemKind.Text,
				data: 8
			},
			{
				label: 'break',
				kind: CompletionItemKind.Text,
				data: 9
			},
			{
				label: 'continue',
				kind: CompletionItemKind.Text,
				data: 10
			},
			{
				label: 'for',
				kind: CompletionItemKind.Text,
				data: 11
			},
			{
				label: 'struct',
				kind: CompletionItemKind.Text,
				data: 12
			}

		];
	}
);


// 完成列表中选择的项目的附加信息
connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
		if (item.data == 1) {
			item.detail = 'int details';
			item.documentation = 'Detailed documentation';
		} 
		if (item.data == 2) {
			item.detail = 'float details';
			item.documentation = 'Detailed documentation';
		}
		if (item.data == 3) {
			item.detail = 'void details';
			item.documentation = 'Detailed documentation';
		}
		if (item.data === 4) {
			item.detail = 'const details';
			item.documentation = 'Detailed documentation';
		}
		if (item.data === 5) {
			item.detail = 'return details';
			item.documentation = 'Detailed documentation';
		}
		if (item.data === 6) {
			item.detail = 'if details';
			item.documentation = 'Detailed documentation';
		}
		if (item.data === 7) {
			item.detail = 'else details';
			item.documentation = 'Detailed documentation';
		}
		if (item.data === 8) {
			item.detail = 'while details';
			item.documentation = 'Detailed documentation';
		}
		if (item.data === 9) {
			item.detail = 'break details';
			item.documentation = 'Detailed documentation';
		}
		if (item.data === 10) {
			item.detail = 'continue details';
			item.documentation = 'Detailed documentation';
		}
		if (item.data === 11) {
			item.detail = 'for details';
			item.documentation = 'Detailed documentation';
		}
		if (item.data === 12) {
			item.detail = 'struct details';
			item.documentation = 'Detailed documentation';
		}
		return item;
	}
);


// 显示符号定义
connection.onDefinition(
	(params: TextDocumentPositionParams): Thenable<Location | null> => {
		const document = documents.get(params.textDocument.uri);
		if (document === undefined) {
			return Promise.resolve(null);
		}
		const text = document.getText();
		// 创建词法分析器和解析器
		let inputStream = new CharStream(text);
		let lexer = new SysY2022ELexer(inputStream);
		let tokenStream = new CommonTokenStream(lexer);
		let parser = new SysY2022EParser(tokenStream);
		parser.buildParseTrees = true;
		let tree = parser.compUnit();

		// 生成符号表
		const walker = new ParseTreeWalker();
		const tempSymbolGenerator = new SymbolTableGenerator();
		walker.walk(tempSymbolGenerator, tree);

		const offset = document.offsetAt(params.position);
		const words = text.split(/\W+/);
		let word = '';
		let match;
		const regex = /\b([a-zA-Z_][a-zA-Z0-9_]*)\b/g;
		while (match = regex.exec(text)) {
			if (match.index <= offset && regex.lastIndex >= offset) {
				word = match[0];
				break;
			}
		}

		// 在符号表中查找符号
		const symbol = tempSymbolGenerator.symbolTable.find(s => s.name === word);
        
		if (symbol) {
			let startLine = symbol.line-1;
			let startColumn = symbol.column-1;
			let endLine = symbol.line-1;
			let endColumn = symbol.column + word.length;
			if(startLine < 0){startLine = 0;}
			if(startColumn < 0){startColumn = 0;}
			if(endLine < 0){endLine = 0;}
			if(endColumn < 0){endColumn = 0;}

            const range = Range.create(startLine, startColumn, endLine, endColumn);
            const location: Location = { uri: params.textDocument.uri, range };
            return Promise.resolve(location);
        } else {
            return Promise.resolve(null);
        }
	}
);

// 显示函数或方法签名帮助
connection.onSignatureHelp(
    (params: TextDocumentPositionParams): SignatureHelp => {
        const document = documents.get(params.textDocument.uri);
        if (document === undefined) {
            return { signatures: [], activeSignature: undefined, activeParameter: undefined };
        }
        const text = document.getText();
        // 创建词法分析器和解析器
        let inputStream = new CharStream(text);
        let lexer = new SysY2022ELexer(inputStream);
        let tokenStream = new CommonTokenStream(lexer);
        let parser = new SysY2022EParser(tokenStream);
        parser.buildParseTrees = true;
        let tree = parser.compUnit();

        // 生成函数签名帮助信息
        const walker = new ParseTreeWalker();
        const tempFuncSignGenerator = new FuncSignGenerator();
        walker.walk(tempFuncSignGenerator, tree);

        // 获取当前位置的单词
        const positionOffset = document.offsetAt(params.position);
        const wordMatch = /\b\w+\b/g;
        let match;
        let word:string= '';
        while ((match = wordMatch.exec(text)) !== null) {
            if (match.index <= positionOffset && wordMatch.lastIndex <= positionOffset) {
                word = match[0];
                
            }
        }

        // 在函数签名帮助信息中查找函数
        const funcSign = tempFuncSignGenerator.FuncSignMap.get(word);
        console.log(word)
        console.log(funcSign);
        if (funcSign) {
            const signature: SignatureInformation = {
                label: `${word}(${funcSign.parameters.join(', ')})`,
                documentation: funcSign.documentation
            };
            return {
                signatures: [signature],
                activeSignature: 0,
                activeParameter: 0
            };
        } else {
            return { signatures: [], activeSignature: undefined, activeParameter: undefined };
        }
    }
);

// 显示对符号的所有引用
connection.onReferences(
	(params: TextDocumentPositionParams): Location[] => {
		const document = documents.get(params.textDocument.uri);
		if (document === undefined) {
			return [];
		}
		const text = document.getText();
		// 创建词法分析器和解析器
		let inputStream = new CharStream(text);
		let lexer = new SysY2022ELexer(inputStream);
		let tokenStream = new CommonTokenStream(lexer);
		let parser = new SysY2022EParser(tokenStream);
		parser.buildParseTrees = true;
		let tree = parser.compUnit();

		// 生成引用表
		const walker = new ParseTreeWalker();
		const tempReferenceGenerator = new ReferenceRecordGeneretor();
		walker.walk(tempReferenceGenerator, tree);

		const offset = document.offsetAt(params.position);
		const words = text.split(/\W+/);
		let word = '';
		let match;
		const regex = /\b([a-zA-Z_][a-zA-Z0-9_]*)\b/g;
		while (match = regex.exec(text)) {
			if (match.index <= offset && regex.lastIndex >= offset) {
				word = match[0];
				break;
			}
		}

		// 遍历引用表,记录所有引用,准备显示给用户
		const locations: Location[] = [];
		for (const reference of tempReferenceGenerator.reference) {
			if (reference.name === word) {
				let startLine = reference.line-1;
				let startColumn = reference.column-1;
				let endLine = reference.line-1;
				let endColumn = reference.column + word.length;
				if(startLine < 0){startLine = 0;}
				if(startColumn < 0){startColumn = 0;}
				if(endLine < 0){endLine = 0;}
				if(endColumn < 0){endColumn = 0;}

				const location = Location.create(params.textDocument.uri, Range.create(startLine, startColumn, endLine, endColumn));
				locations.push(location);
			}
		}
		return locations;

	}
);

// 重命名
/*
connection.onRenameRequest(
	(params: RenameParams): WorkspaceEdit => {
		const document = documents.get(params.textDocument.uri);
		if (document === undefined) {
			return { changes: {} };
		}
		const text = document.getText();
		// 创建词法分析器和解析器
		let inputStream = new CharStream(text);
		let lexer = new SysY2022ELexer(inputStream);
		let tokenStream = new CommonTokenStream(lexer);
		let parser = new SysY2022EParser(tokenStream);
		parser.buildParseTrees = true;
		let tree = parser.compUnit();

		// 生成引用表
		const walker = new ParseTreeWalker();
		const tempReferenceGenerator = new ReferenceRecordGeneretor();
		walker.walk(tempReferenceGenerator, tree);

		// 获取当前位置的单词
		const positionOffset = document.offsetAt(params.position);
		const wordMatch = /\b\w+\b/g;
		let match;
		let word:string= '';
		while ((match = wordMatch.exec(text)) !== null) {
			if (match.index <= positionOffset && wordMatch.lastIndex <= positionOffset ) {
				word = match[0];
				
			} 
		}

		// 遍历引用表,记录所有引用,准备重命名
		const changes: { [uri: string]: TextEdit[] } = {};
		for (const reference of tempReferenceGenerator.reference) {
			if (reference.name === word) {
				let startLine = reference.line-1;
				let startColumn = reference.column-1;
				let endLine = reference.line-1;
				let endColumn = reference.column-1 + word.length;
				if(startLine < 0){startLine = 0;}
				if(startColumn < 0){startColumn = 0;}
				if(endLine < 0){endLine = 0;}
				if(endColumn < 0){endColumn = 0;}

				const range = Range.create(startLine, startColumn, endLine, endColumn);
				const newText = params.newName;
				const edit = TextEdit.replace(range, newText);
				if (changes[params.textDocument.uri] === undefined) {
					changes[params.textDocument.uri] = [];
				}
				changes[params.textDocument.uri].push(edit);
			}
		}
		return { changes };
	}
);
*/



// 使文本文档管理器侦听连接
// 用于打开、更改和关闭文本文档事件
documents.listen(connection);

// 监听连接
connection.listen();
