var fs = require('fs');
// To read a file
var readable = fs.createReadStream(__dirname + '/stream.txt', {
  encoding: 'utf8',
  // Size of the buffer in bytes 
  highWaterMark: 12 * 1024
});
// To write a file
var writable = fs.createWriteStream(__dirname + '/streamcopy.txt', {
  encoding: 'utf8'
})
// It shows that the stream excecute the call back function after fill the buffer.Then if there is more data, repeats the process until there is no more data to process
readable.on('data', function (chunk) {
  console.log('\n --New practice: Stream reading file');
  console.log(chunk.length);
  // Copy the inside data of the file into an other file 
  writable.write(chunk, function (err) { console.log(err) });
});

module.exports = readable;