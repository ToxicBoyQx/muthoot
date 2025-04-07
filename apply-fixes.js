/**
 * Muthoot Finance Clone - Font & Icon Fix Applier
 * 
 * This script automatically adds the necessary font and icon fixes
 * to all HTML files in the project to match the original Muthoot Finance website.
 */

const fs = require('fs');
const path = require('path');

// Get all HTML files recursively
function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !filePath.includes('node_modules')) {
      getAllHtmlFiles(filePath, fileList);
    } else if (path.extname(file).toLowerCase() === '.html') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Add the fix code to HTML files
function addFixesToHtmlFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already contains our fixes
    if (content.includes('/css/font-fix.css') && content.includes('/css/icons-fix.css')) {
      console.log(`Skipping (already fixed): ${filePath}`);
      return;
    }
    
    // Create backup
    fs.writeFileSync(`${filePath}.bak`, content);
    
    // Head content to add
    const headContent = `
<!-- Font & Icon Fixes to match original website -->
<link rel="stylesheet" href="/css/font-fix.css">
<link rel="stylesheet" href="/css/icons-fix.css">`;
    
    // Body content to add
    const bodyContent = `
<!-- Font & Icon Fix Script -->
<script src="/js/font-icon-fix.js"></script>`;
    
    // Add to head
    if (content.includes('</head>')) {
      content = content.replace('</head>', `${headContent}\n</head>`);
    } else {
      console.log(`Warning: No </head> tag found in ${filePath}`);
    }
    
    // Add to body
    if (content.includes('</body>')) {
      content = content.replace('</body>', `${bodyContent}\n</body>`);
    } else {
      console.log(`Warning: No </body> tag found in ${filePath}`);
    }
    
    // Write back
    fs.writeFileSync(filePath, content);
    console.log(`Added fixes to: ${filePath}`);
  } catch (err) {
    console.error(`Error processing ${filePath}: ${err.message}`);
  }
}

// Ensure required directories exist
function ensureDirectoriesExist() {
  const dirs = ['css', 'js'];
  
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
      console.log(`Created directory: ${dir}`);
    }
  });
}

// Ensure required files exist
function ensureFilesExist() {
  const files = {
    'css/font-fix.css': 'css/font-fix.css',
    'css/icons-fix.css': 'css/icons-fix.css',
    'js/font-icon-fix.js': 'js/font-icon-fix.js'
  };
  
  for (const [destination, source] of Object.entries(files)) {
    if (!fs.existsSync(destination) && fs.existsSync(source)) {
      fs.copyFileSync(source, destination);
      console.log(`Copied ${source} to ${destination}`);
    } else if (!fs.existsSync(source)) {
      console.error(`Warning: Required source file not found: ${source}`);
    }
  }
}

// Start process
console.log('Starting Muthoot Finance Font & Icon Fix application...');

// Ensure required directories and files
ensureDirectoriesExist();
ensureFilesExist();

// Get all HTML files
const htmlFiles = getAllHtmlFiles('.');
console.log(`Found ${htmlFiles.length} HTML files to process.`);

// Apply fixes to each file
htmlFiles.forEach(file => {
  addFixesToHtmlFile(file);
});

console.log('✅ Completed adding font and icon fixes to all HTML files.');
console.log('Your Muthoot Finance clone now matches the original website\'s fonts and icons.'); 