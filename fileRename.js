const fs = require('fs');
const path = require('path');

// Directory path
const directoryPath = '';

// Read files from directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.log('Error reading directory:', err);
    return;
  }

  files.forEach(file => {
    // Check if the file name contains a colon
    if (file.includes(':')) {
      const newFileName = file.replace(/:/g, '-');
      const oldFilePath = path.join(directoryPath, file);
      const newFilePath = path.join(directoryPath, newFileName);

      // Rename the file
      fs.rename(oldFilePath, newFilePath, (err) => {
        if (err) {
          console.log(`Error renaming ${file}:`, err);
        } else {
          console.log(`${file} has been renamed to ${newFileName}`);
        }
      });
    }
  });
});
