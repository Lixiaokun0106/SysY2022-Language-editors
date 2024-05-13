"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
var node_1 = require("vscode-languageserver/node");
// 导入antlr生成的类
var SysY2022ELexer_1 = require("./parser/SysY2022ELexer");
var SysY2022EParser_1 = require("./parser/SysY2022EParser");
var antlr4ts_1 = require("antlr4ts");
var vscode_languageserver_textdocument_1 = require("vscode-languageserver-textdocument");
// 为服务器创建一个连接，使用Node的IPC作为传输。
// 还包括所有预览/建议的LSP功能。
var connection = (0, node_1.createConnection)(node_1.ProposedFeatures.all);
// 创建一个简单的文本文档管理器。
var documents = new node_1.TextDocuments(vscode_languageserver_textdocument_1.TextDocument);
var hasConfigurationCapability = false;
var hasWorkspaceFolderCapability = false;
var hasDiagnosticRelatedInformationCapability = false;
connection.onInitialize(function (params) {
    var capabilities = params.capabilities;
    // 如果客户端支持`workspace/configuration`请求吗？
    // 如果不支持，我们将使用全局设置。
    hasConfigurationCapability = !!(capabilities.workspace && !!capabilities.workspace.configuration);
    hasWorkspaceFolderCapability = !!(capabilities.workspace && !!capabilities.workspace.workspaceFolders);
    hasDiagnosticRelatedInformationCapability = !!(capabilities.textDocument &&
        capabilities.textDocument.publishDiagnostics &&
        capabilities.textDocument.publishDiagnostics.relatedInformation);
    var result = {
        capabilities: {
            textDocumentSync: node_1.TextDocumentSyncKind.Incremental,
            // 通知客户端此服务器支持代码完成。
            completionProvider: {
                resolveProvider: true
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
connection.onInitialized(function () {
    if (hasConfigurationCapability) {
        // 注册所有配置更改。
        connection.client.register(node_1.DidChangeConfigurationNotification.type, undefined);
    }
    if (hasWorkspaceFolderCapability) {
        connection.workspace.onDidChangeWorkspaceFolders(function (_event) {
            connection.console.log('Workspace folder change event received.');
        });
    }
});
// 全局设置，当客户端不支持`workspace/configuration`请求时使用。
// 请注意，当使用此示例中提供的客户端时，情况并非如此
// 但可能会发生在其他客户端。
var defaultSettings = { maxNumberOfProblems: 1000 };
var globalSettings = defaultSettings;
// 缓存所有打开文档的设置
var documentSettings = new Map();
connection.onDidChangeConfiguration(function (change) {
    if (hasConfigurationCapability) {
        // 重置所有缓存的文档设置
        documentSettings.clear();
    }
    else {
        globalSettings = ((change.settings.languageServerExample || defaultSettings));
    }
    // 刷新诊断，因为`maxNumberOfProblems`可能已更改。
    // 我们可以在这里优化事情，首先重新获取设置，然后可以比较
    // 对现有设置，但这超出了此示例的范围。
    connection.languages.diagnostics.refresh();
});
function getDocumentSettings(resource) {
    if (!hasConfigurationCapability) {
        return Promise.resolve(globalSettings);
    }
    var result = documentSettings.get(resource);
    if (!result) {
        result = connection.workspace.getConfiguration({
            scopeUri: resource,
            section: 'languageServerExample'
        });
        documentSettings.set(resource, result);
    }
    return result;
}
// 当文档关闭时，删除其设置
documents.onDidClose(function (e) {
    documentSettings.delete(e.document.uri);
});
connection.languages.diagnostics.on(function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var document;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                document = documents.get(params.textDocument.uri);
                if (!(document !== undefined)) return [3 /*break*/, 2];
                _a = {
                    kind: node_1.DocumentDiagnosticReportKind.Full
                };
                return [4 /*yield*/, validateTextDocument(document)];
            case 1: return [2 /*return*/, (_a.items = _b.sent(),
                    _a)];
            case 2: 
            // 我们不知道文档。我们可以尝试从磁盘读取它
            // 或者我们不报告它的问题。
            return [2 /*return*/, {
                    kind: node_1.DocumentDiagnosticReportKind.Full,
                    items: []
                }];
        }
    });
}); });
// 文件内容发生更改时，将触发此事件。
// 当文件首次打开或其内容发生更改时，将发出此事件。
documents.onDidChangeContent(function (change) {
    validateTextDocument(change.document);
});
function validateTextDocument(textDocument) {
    return __awaiter(this, void 0, void 0, function () {
        var settings, text, pattern, m, problems, diagnostics, diagnostic;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getDocumentSettings(textDocument.uri)];
                case 1:
                    settings = _a.sent();
                    text = textDocument.getText();
                    pattern = /\b[A-Z]{2,}\b/g;
                    problems = 0;
                    diagnostics = [];
                    while ((m = pattern.exec(text)) && problems < settings.maxNumberOfProblems) {
                        problems++;
                        diagnostic = {
                            severity: node_1.DiagnosticSeverity.Warning,
                            range: {
                                start: textDocument.positionAt(m.index),
                                end: textDocument.positionAt(m.index + m[0].length)
                            },
                            message: "".concat(m[0], " is all uppercase."),
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
                    return [2 /*return*/, diagnostics];
            }
        });
    });
}
connection.onDidChangeWatchedFiles(function (_change) {
    // 文件发生更改
    connection.console.log('We received a file change event');
});
// 提供完成列表
connection.onCompletion(function (_textDocumentPosition) {
    // 传递参数包含请求代码完成的文本文档的位置。对于示例，我们忽略此信息并始终提供相同的完成项。
    return [
        {
            label: 'TypeScript',
            kind: node_1.CompletionItemKind.Text,
            data: 1
        },
        {
            label: 'JavaScript',
            kind: node_1.CompletionItemKind.Text,
            data: 2
        }
    ];
});
// 完成列表中选择的项目的附加信息
connection.onCompletionResolve(function (item) {
    if (item.data === 1) {
        item.detail = 'TypeScript details';
        item.documentation = 'TypeScript documentation';
    }
    else if (item.data === 2) {
        item.detail = 'JavaScript details';
        item.documentation = 'JavaScript documentation';
    }
    return item;
});
// 使文本文档管理器侦听连接
// 用于打开、更改和关闭文本文档事件
documents.listen(connection);
// 监听连接
connection.listen();
// 创建词法分析器和解析器
var input = "int a = 1;";
var chars = new antlr4ts_1.ANTLRInputStream(input);
var lexer = new SysY2022ELexer_1.SysY2022ELexer(chars);
var tokens = new antlr4ts_1.CommonTokenStream(lexer);
var parser = new SysY2022EParser_1.SysY2022EParser(tokens);
// AST
var tree = parser.program();
console.log(tree.toStringTree(parser));
