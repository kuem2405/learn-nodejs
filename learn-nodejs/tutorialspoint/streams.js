// var fs = require('fs');
// var data = '';

// // Create a readable stream
// var readerStream = fs.createReadStream('input.txt');

// // Set the encoding to be UTF8
// readerStream.setEncoding('UTF8');

// // Handle stream events --> data, end, and error
// readerStream.on('data', function(chunk) {
//     data += chunk;
// });

// readerStream.on('end', function(){
//     console.log(data);
// });

// readerStream.on('error', function(err) {
//     console.log(err.stack);
// });

// console.log('Program Ended.');
// var fs = require('fs');
// var data = 'Simply Easy Learning';

// //Create a writable stream
// var writerStream = fs.createWriteStream('output.txt');

// //Write the data to stream with encoding to the UTF8
// writerStream.write(data, 'UTF8');

// // Mark the end of file
// writerStream.end();

// // Handle stream events --> finish, and error
// writerStream.on('finish', function() {
//     console.log('Write conplated.');
// });

// writerStream.on('error', function(err) {
//     console.log(err.stack);
// });

// console.log('Program Ended');

// var fs = require('fs');

// // Create a readable stream
// var readerStream = fs.createReadStream('input.txt');

// // Create a writable stream
// var writerStream = fs.createWriteStream('output.txt');

// // Pipe the read and write operations
// // read input.txt and write data to output.txt
// readerStream.pipe(writerStream);

// console.log('Program Ended.');

var fs = require('fs');
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz

// fs.createReadStream('input.txt')
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('input.txt.gz'));

// console.log('File Compressed.');

// Decompressed the file input.txt.gz to input_unzip.txt
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input_unzip.txt'));

console.log('File Decompressed');