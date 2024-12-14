import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('batchConcatenator.concatFiles', async () => {
    try {
      // Fetch all files in the workspace
      const workspaceFolders = vscode.workspace.workspaceFolders;
      if (!workspaceFolders) {
        vscode.window.showErrorMessage('No workspace folders found.');
        return;
      }

      let allFiles: vscode.Uri[] = [];

      for (const folder of workspaceFolders) {
        const files = await vscode.workspace.findFiles(
          new vscode.RelativePattern(folder, '**/*.*'), // Adjust the pattern as needed
          '**/node_modules/**', // Exclude node_modules
          1000 // Limit to 1000 files to prevent performance issues
        );
        allFiles = allFiles.concat(files);
      }

      if (allFiles.length === 0) {
        vscode.window.showWarningMessage('No files found in the workspace.');
        return;
      }

      // Prepare QuickPick items
      const fileItems = allFiles.map(file => {
        const relativePath = vscode.workspace.asRelativePath(file);
        return {
          label: relativePath,
          description: file.fsPath
        };
      });

      // Show QuickPick with multiple selection
      const selectedItems = await vscode.window.showQuickPick(fileItems, {
        canPickMany: true,
        placeHolder: 'Select files to concatenate'
      });

      if (!selectedItems || selectedItems.length === 0) {
        vscode.window.showWarningMessage('No files selected.');
        return;
      }

      // Read and concatenate file contents
      let concatenatedContent = '';
      for (const item of selectedItems) {
        try {
          const content = fs.readFileSync(item.description, 'utf8');
          concatenatedContent += content + '\n';
        } catch (err) {
          vscode.window.showErrorMessage(`Failed to read file: ${item.label}`);
          return;
        }
      }

      // Write to clipboard
      await vscode.env.clipboard.writeText(concatenatedContent);
      vscode.window.showInformationMessage('Selected files concatenated and copied to clipboard.');
    } catch (error) {
      vscode.window.showErrorMessage(`Error: ${error instanceof Error ? error.message : String(error)}`);
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
