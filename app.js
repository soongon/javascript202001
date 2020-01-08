const fs = require('fs');

fs.readFile('./test.txt', 'utf8', function (err, content) {
    if (err) {
        console.log(err);
    }
    console.log(content);
});

console.log('end of program..');

