# Certificate Information Extraction

This guide explains how to extract information from your certificate files using the provided Python script.

## Prerequisites

1. Python 3.7 or higher
2. Required Python packages (install using the requirements.txt file)
3. For image processing, you'll need Tesseract OCR installed on your system

## Installation

1. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

2. For Windows users, install Tesseract OCR:
   - Download from: https://github.com/UB-Mannheim/tesseract/wiki
   - Add Tesseract to your system PATH
   - Uncomment and adjust the path in the Python script if needed

3. For macOS users (with Homebrew):
   ```bash
   brew install tesseract
   ```

4. For Linux users (Ubuntu/Debian):
   ```bash
   sudo apt-get install tesseract-ocr
   ```

## Usage

Run the script from the project root directory:
```bash
python extract_certificates_info.py
```

## Output

The script will:
1. Analyze all PDF and image files in the `src/assets/Certificates` directory
2. Extract text content from each certificate
3. Save the extracted information to `certificate_info.csv`

## Next Steps

After running the script:
1. Open `certificate_info.csv` to review the extracted information
2. Manually verify and correct the information as needed
3. Provide the accurate details to update your portfolio with the correct certificate information

Note: The automatic extraction may not be 100% accurate, especially for complex layouts or low-quality images. Manual review and correction will be necessary for the best results.