const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'secret-folder'),
  { withFileTypes: true },
  (err, files) => {
    console.log('\n');
    if (err)
      console.log(err);
    else {
      files.forEach(file => {
        if (file.isFile()) {
          fs.stat(path.join(__dirname, 'secret-folder', file.name), (error, stats) => {
            if (error) {
              console.log(error);
            }
            else {
              // console.log(`Information of: ${path.join(__dirname, 'secret-folder', file.name)}`);
              console.log(`${path.parse(file.name).name} - ${path.extname(file.name).slice(1)} - ${stats.size / 1024} kb\n`);
            }
          })
        }
      })
    }
  })

// node 03-files-in-folder