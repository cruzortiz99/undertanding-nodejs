// New way to deal with binary data in JavaScript, ES6 feature
var buffer = new ArrayBuffer(8);
var view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;
// It isn't stored because the buffer only holds two 8 bits numbers
view[2] = 50;
module.exports = {
  buffer: buffer,
  view: view
};