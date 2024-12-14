# Batch Concatenator

**Quickly combine and copy multiple file contents with ease.**

Batch Concatenator allows you to select multiple files directly from VSCode's Explorer panel, press `Alt + Q`, and instantly concatenate their contents separated by line breaks (`\n`) into your clipboard. Streamline your workflow by merging code snippets, logs, or any text from several files without leaving your editor.

## Features

- **Seamless Integration:** Select multiple files directly within VSCode's Explorer panel.
- **Quick Concatenation:** Combine contents of selected files with a simple keyboard shortcut.
- **Clipboard Support:** Automatically copies the concatenated content to your clipboard.
- **Performance Optimized:** Efficiently handles large workspaces by excluding unnecessary directories like `node_modules`.

## Usage

1. **Select Files:**

   - In the Explorer panel, press `Alt + Q` or open the Command Palette (`Ctrl + Shift + P`) and select `Batch Concatenator: Concatenate Selected Files`.
   - A QuickPick dialog will appear listing all workspace files (excluding `node_modules`).
   - Use `Ctrl + Click` or `Shift + Click` to select multiple files.

2. **Concatenate and Copy:**

   - After selecting the desired files, press `Enter`.
   - The concatenated content of the selected files will be copied to your clipboard.
   - A notification will confirm the successful operation.

3. **Paste the Content:**

   - Open any text editor or file within VSCode.
   - Press `Ctrl + V` to paste the concatenated content.

## Keybindings

- **Concatenate Files:**
  - **Shortcut:** `Alt + Q`
