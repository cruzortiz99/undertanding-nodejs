var fs = require('fs');
var zlib = require('zlib');
// Pipes made possible to join a writable stream to a readable stream, the flow goes readable->writable 
var readable = fs.createReadStream(__dirname + '/pipes.txt', {
  encoding: 'utf8',
  highWaterMark: 64 * 1024
});
var writable = fs.createWriteStream(__dirname + '/pipescopy.txt', {
  encoding: 'utf8'
});
var compressed = fs.createWriteStream(__dirname + '/pipe.txt.gz');
// Transform stream (readable & writable)
var gzip = zlib.createGzip();
console.log('\n--New practie: Pipes');
readable.pipe(writable)
// Chaining methods: Reads a file, compressed with gzip, then the compressed file is writed into a file 
readable.pipe(gzip).pipe(compressed);

var pipe = { readable: readable, writable: writable, gzip: gzip };
module.exports = pipe;
