const { stdout } = process;
const path = require('path');
const fs = require('fs');
const stream = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
let data = '';

stream.on('data', chunk => data += chunk);
stream.on('end', () => stdout.write(`Файл содержит текст:\n ${data}`));
stream.on('error', error => stdout.write('Error!', error.message));

// node 01-read-file