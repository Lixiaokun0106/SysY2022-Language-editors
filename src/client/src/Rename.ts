import * as vscode from 'vscode';

export class GoRenameProvider implements vscode.RenameProvider {
    public provideRenameEdits(
        document: vscode.TextDocument, position: vscode.Position,
        newName: string, token: vscode.CancellationToken):
        Thenable<vscode.WorkspaceEdit> {

        return new Promise((resolve, reject) => {
            let wordRange = document.getWordRangeAtPosition(position);
            if (!wordRange) {
                return reject("No word selected.");
            }

            let oldName = document.getText(wordRange);

            let edit = new vscode.WorkspaceEdit();
            for (let i = 0; i < document.lineCount; i++) {
                let line = document.lineAt(i);
                let index = line.text.indexOf(oldName);

                while (index >= 0) {
                    let range = new vscode.Range(i, index, i, index + oldName.length);
                    edit.replace(document.uri, range, newName);
                    index = line.text.indexOf(oldName, index + newName.length);
                }
            }

            resolve(edit);
        });
    }
}