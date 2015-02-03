var fs = require('fs'),
    lines = fs.readFileSync(process.argv[2], 'utf8').split('\n');

console.log(lines.length - 1);