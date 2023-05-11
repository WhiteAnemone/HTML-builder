const fs = require('fs');
const path = require('path');
const writeStream = fs.createWriteStream(path.join(__dirname, 'project-dist', 'bundle.css'), 'utf-8');

let array;

fs.readdir(path.join(__dirname, 'styles'),
  { withFileTypes: true },
  (err, files) => {
    if (err)
      console.log(err);
    else {
      fs.writeFile(path.join(__dirname, 'project-dist', 'bundle.css'), '', function () { console.log('done') });
      files.forEach(file => {
        if (file.isFile() && path.extname(file.name) == '.css') {
          console.log(file);
          fs.readFile(path.join(__dirname, 'styles', file.name), function (err, data) {
            if (err) throw err;
            array = [];
            array.push(data.toString());
            writeStream.write(array.join('\n'));
            writeStream.write('\n');
          });
        }
      })
    }
  })

  // node 05-merge-styles