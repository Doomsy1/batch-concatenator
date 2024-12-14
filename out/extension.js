"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const fs = __importStar(require("fs"));
function activate(context) {
    let disposable = vscode.commands.registerCommand('batchConcatenator.concatFiles', async () => {
        try {
            // Fetch all files in the workspace
            const workspaceFolders = vscode.workspace.workspaceFolders;
            if (!workspaceFolders) {
                vscode.window.showErrorMessage('No workspace folders found.');
                return;
            }
            let allFiles = [];
            for (const folder of workspaceFolders) {
                const files = await vscode.workspace.findFiles(new vscode.RelativePattern(folder, '**/*.*'), // Adjust the pattern as needed
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
                }
                catch (err) {
                    vscode.window.showErrorMessage(`Failed to read file: ${item.label}`);
                    return;
                }
            }
            // Write to clipboard
            await vscode.env.clipboard.writeText(concatenatedContent);
            vscode.window.showInformationMessage('Selected files concatenated and copied to clipboard.');
        }
        catch (error) {
            vscode.window.showErrorMessage(`Error: ${error instanceof Error ? error.message : String(error)}`);
        }
    });
    context.subscriptions.push(disposable);
}
function deactivate() { }
//# sourceMappingURL=extension.js.map