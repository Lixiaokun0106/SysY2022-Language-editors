import * as vscode from 'vscode';
import { exec } from 'child_process';
import * as path from 'path';
import * as fs from 'fs';

export function runAnalysis() {
    const editor = vscode.window.activeTextEditor;

    if (editor) {
        const document = editor.document;
        const filePath = document.fileName;

        const workspaceFolders = vscode.workspace.workspaceFolders;
        if (!workspaceFolders) {
            vscode.window.showErrorMessage('没有打开的工作空间');
            return;
        }

        const scriptPath = path.join(__dirname,'..','..', 'run_analysis.bat');
		const checkerPath = path.join(__dirname,'..','..','checker');
		// checkerOutPath为当前打开的文件同目录下的check_output.txt
		const checkerOutPath = path.join(document.fileName,'..','check_output.txt');

		const cmd = `"${scriptPath}" "${checkerPath}" "${filePath}" "${checkerOutPath}"`;
		console.log(cmd);
		
		
		// 将cmd在终端中以命令行的形式执行
        exec(cmd, (error,stdout,stderr) => {
			if (error) {
				console.error(`执行的错误: ${error}`);
				return;
			}
			if (stderr) {
				console.error(`stderr: ${stderr}`);
			}
            vscode.window.showInformationMessage(`批处理文件执行成功\n${stdout}`);
        });

		// 读取文件
		const output = fs.readFileSync(checkerOutPath, 'utf8');

		// 解析输出并给用户显示消息
		const errorCount = (output.match(/: error: /g) || []).length;
		const warningCount = (output.match(/: warning: /g) || []).length;
		const styleCount = (output.match(/: style: /g) || []).length;
		const performanceCount = (output.match(/: performance: /g) || []).length;
		const portabilityCount = (output.match(/: portability: /g) || []).length;
		const infoCount = (output.match(/: information: /g) || []).length;

		if (errorCount > 0) {
		    vscode.window.showErrorMessage(`检查完成，发现 ${errorCount} 个错误`);
		}
		if (warningCount > 0) {
		    vscode.window.showWarningMessage(`检查完成，发现 ${warningCount} 个警告`);
		}
		if (styleCount > 0) {
		    vscode.window.showInformationMessage(`检查完成，发现 ${styleCount} 个样式问题`);
		}
		if (performanceCount > 0) {
		    vscode.window.showInformationMessage(`检查完成，发现 ${performanceCount} 个性能问题`);
		}
		if (portabilityCount > 0) {
		    vscode.window.showInformationMessage(`检查完成，发现 ${portabilityCount} 个可移植性问题`);
		}
		if (infoCount > 0) {
		    vscode.window.showInformationMessage(`检查完成，发现 ${infoCount} 个信息`);
		}
		
    } else {
        vscode.window.showErrorMessage('没有打开的文件');
    }
}

