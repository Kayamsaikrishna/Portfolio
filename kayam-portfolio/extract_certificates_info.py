import os
import pdfplumber
import pytesseract
from PIL import Image
import pandas as pd
from pathlib import Path

# Set up pytesseract path (you may need to adjust this based on your installation)
# For Windows, you might need to specify the path to tesseract.exe
# pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

def extract_text_from_pdf(pdf_path):
    """Extract text from PDF file"""
    try:
        text = ""
        with pdfplumber.open(pdf_path) as pdf:
            for page in pdf.pages:
                text += page.extract_text() + "\n"
        return text
    except Exception as e:
        print(f"Error extracting text from PDF {pdf_path}: {str(e)}")
        return ""

def extract_text_from_image(image_path):
    """Extract text from image file using OCR"""
    try:
        image = Image.open(image_path)
        text = pytesseract.image_to_string(image)
        return text
    except Exception as e:
        print(f"Error extracting text from image {image_path}: {str(e)}")
        return ""

def analyze_certificate(file_path):
    """Analyze a certificate file and extract key information"""
    file_path = Path(file_path)
    file_name = file_path.name
    file_extension = file_path.suffix.lower()
    
    print(f"Analyzing: {file_name}")
    
    # Extract text based on file type
    if file_extension == '.pdf':
        text = extract_text_from_pdf(file_path)
    elif file_extension in ['.jpg', '.jpeg', '.png']:
        text = extract_text_from_image(file_path)
    else:
        print(f"Unsupported file type: {file_extension}")
        return None
    
    # Basic analysis - you can enhance this based on your certificate formats
    lines = text.split('\n')
    lines = [line.strip() for line in lines if line.strip()]
    
    # Try to identify key information
    title = ""
    issuer = ""
    date = ""
    description = ""
    
    # Common keywords to look for
    title_keywords = ['certificate', 'certification', 'completion']
    issuer_keywords = ['issued by', 'issuer', 'organization', 'institution', 'university', 'institute']
    date_keywords = ['date', 'completed', 'issued', 'completion']
    
    # Simple extraction logic (you may need to customize this)
    if lines:
        # Assume first non-empty line might be the title
        title = lines[0] if len(lines) > 0 else file_name.replace(file_extension, '')
        
        # Look for issuer information
        for line in lines:
            if any(keyword in line.lower() for keyword in issuer_keywords):
                issuer = line
                break
        if not issuer and len(lines) > 1:
            # Assume second line might be issuer
            issuer = lines[1]
    
    # Create a summary
    info = {
        'file_name': file_name,
        'title': title,
        'issuer': issuer,
        'date': date,
        'description': description,
        'full_text': text[:500] + "..." if len(text) > 500 else text  # First 500 chars
    }
    
    return info

def main():
    # Directory containing certificates
    certificates_dir = "src/assets/Certificates"
    
    # Check if directory exists
    if not os.path.exists(certificates_dir):
        print(f"Directory {certificates_dir} not found. Please run this script from the project root.")
        return
    
    # Get all certificate files
    certificate_files = list(Path(certificates_dir).glob("*"))
    
    # Filter for supported file types
    supported_files = [f for f in certificate_files if f.suffix.lower() in ['.pdf', '.jpg', '.jpeg', '.png']]
    
    print(f"Found {len(supported_files)} certificate files to analyze.\n")
    
    # Analyze each certificate
    results = []
    for cert_file in supported_files:
        info = analyze_certificate(cert_file)
        if info:
            results.append(info)
            print(f"Title: {info['title']}")
            print(f"Issuer: {info['issuer']}")
            print(f"---")
    
    # Save results to CSV
    if results:
        df = pd.DataFrame(results)
        df.to_csv('certificate_info.csv', index=False)
        print(f"\nExtracted information saved to certificate_info.csv")
        print("Please review the CSV file and provide the accurate details for each certificate.")

if __name__ == "__main__":
    main()