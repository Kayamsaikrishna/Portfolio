const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Directory containing markdown files
const mdDir = path.join(__dirname, 'src', 'assets', 'projects-documentation');
const pdfDir = path.join(__dirname, 'src', 'assets', 'projects-documentation-pdf');

// Create PDF directory if it doesn't exist
if (!fs.existsSync(pdfDir)) {
  fs.mkdirSync(pdfDir, { recursive: true });
}

// Read all markdown files
fs.readdir(mdDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Filter for .md files
  const mdFiles = files.filter(file => path.extname(file) === '.md');

  // Convert each markdown file to PDF
  mdFiles.forEach(file => {
    const mdPath = path.join(mdDir, file);
    const pdfPath = path.join(pdfDir, file.replace('.md', '.pdf'));
    
    // Use markdown-pdf CLI to convert
    const command = `npx markdown-pdf "${mdPath}" -o "${pdfPath}"`;
    
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error converting ${file} to PDF:`, error);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`Converted ${file} to PDF`);
    });
  });
});