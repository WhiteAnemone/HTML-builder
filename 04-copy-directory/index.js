const fs = require('fs');
const path = require('path');

const copyDir = () => {
  fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, err => {
    if (err)
      console.log(err);
  });
  fs.readdir(path.join(__dirname, 'files-copy'),
    { withFileTypes: true },
    (err, files) => {
      if (err)
        console.log(err);
      else {
        files.forEach(file => {
          fs.unlink(path.join(__dirname, 'files-copy', file.name), (err) => {
            if (err) throw err;
          });
        })
      }
    })
  fs.readdir(path.join(__dirname, 'files'),
    { withFileTypes: true },
    (err, files) => {
      if (err)
        console.log(err);
      else {
        files.forEach(file => {
          fs.copyFile(path.join(__dirname, 'files', file.name), path.join(__dirname, 'files-copy', file.name), (err) => {
            if (err) {
              console.log("Error Found:", err);
            }
          })
        })
      }
    })
  console.log('All files were successfully copied.');
}

copyDir();

// node 04-copy-directory