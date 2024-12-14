# Batch Concatenator

**Quickly combine and copy multiple file contents with ease.**

Batch Concatenator allows you to select multiple files directly from VSCode's Explorer panel, press `Alt + Q`, and instantly concatenate their contents separated by line breaks (`\n`) into your clipboard. Streamline your workflow by merging code snippets, logs, or any text from several files without leaving your editor.

## Features

- **Seamless Integration:** Select multiple files directly within VSCode's Explorer panel.
- **Quick Concatenation:** Combine contents of selected files with a simple keyboard shortcut.
- **Clipboard Support:** Automatically copies the concatenated content to your clipboard.
- **Performance Optimized:** Efficiently handles large workspaces by excluding unnecessary directories like `node_modules`.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Doomsy1/batch-concatenator.git
   ```

2. **Navigate to the Extension Directory:**

   ```bash
   cd batch-concatenator
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Compile the Extension:**

   ```bash
   npm run compile
   ```

5. **Launch the Extension in VSCode:**

   - Open the project in VSCode.
   - Press `F5` to launch the Extension Development Host.

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
  - **When:** The Explorer viewlet is visible and has focus.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**
2. **Create a New Branch:**

   ```bash
   git checkout -b feature/YourFeatureName
   ```

3. **Commit Your Changes:**

   ```bash
   git commit -m "Add some feature"
   ```

4. **Push to the Branch:**

   ```bash
   git push origin feature/YourFeatureName
   ```

5. **Open a Pull Request**

Please ensure your code adheres to the project's coding standards and passes all linting checks.
