# Batch Concatenator

**Quickly combine and copy multiple file contents.**

Press `Alt + Q`, select your desired files, and concatenate their contents separated by line breaks (`\n`) into your clipboard.


## Usage

1. **Select Files:**

   - In the Explorer panel, press `Alt + Q` or open the Command Palette (`Ctrl + Shift + P`) and select `Batch Concatenator: Concatenate Files`.
   - A QuickPick dialog will appear listing all workspace files (excluding `node_modules` and folders with over 50 files).
   - Use `Ctrl + Click` or `Shift + Click` to select multiple files.

2. **Concatenate and Copy:**

   - After selecting the desired files, click `OK` or press `Enter`.
   - The concatenated content of the selected files will be copied to your clipboard.
   - A notification will confirm the successful operation.

3. **Paste the Content:**

   - Open any text editor or file within VSCode.
   - Press `Ctrl + V` to paste the concatenated content.

## Keybindings

- **Concatenate Files:**
  - **Shortcut:** `Alt + Q`
