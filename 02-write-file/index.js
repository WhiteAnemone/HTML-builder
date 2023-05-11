const path = require('path');
const fs = require('fs');
const readline = require('node:readline');
const { stdin: input, stdout: output, stderr: error } = require('node:process');
const writeStream = fs.createWriteStream(path.join(__dirname, 'text.txt'), 'utf-8');

const rl = readline.createInterface({ input, output });

output.write('Hello! Enter some text: \n')

rl.on('line', (input) => {
  writeStream.write(input);
  writeStream.write('\n');
  if (input.includes('exit')) {
    rl.close();
    process.exit();
  }
});

process.on('exit', code => {
  if (code === 0) {
    output.write('The text is written in file. Goobye!');
  } else {
    error.write(`Error: ${code}`);
  }
});

// node 02-write-file