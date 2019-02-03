var hello = 'hello';
var buffer = Buffer.alloc(hello.length, hello, 'utf8');

module.exports = buffer;