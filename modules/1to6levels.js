var Emitter = require('events');
var { events } = require('./classes/eventsConfig');
var CustomEmiter = require('./classes/es5inheritance');
var { Male } = require('./classes/es6classes');
var buffer = require('./buffer-stream-pipes/bufferTraining');
var { view } = require('./buffer-stream-pipes/typedarrays')
var greet = require('./callbacks/callbacks');
var hi = require('./buffer-stream-pipes/files');
var streamReadable = require('./buffer-stream-pipes/streams');
var pipe = require('./buffer-stream-pipes/pipes')
var emitter = new Emitter();

// EventEmitter practice
emitter.on(events.GREETING, function () {
  console.log('Somewhere, someone said hello');
});
emitter.on(events.GREETING, function () {
  console.log('A greeting accurred !');
});
// Es5-6 classes and inheritance
var customEmiter = new CustomEmiter();
var person = new Male('Cruz', 'Ortiz');
person.greet();
// EventEmitter practice
console.log('\n--New practice: EventEmitter practice');
emitter.emit(events.GREETING);
// Buffer practice 
console.log('\n--New practice: Buffer practice');
console.log(buffer, buffer.toString(), buffer.toJSON());
// Buffer: extracting unicode
console.log(buffer[2]);
// Buffer: writting in a buffer
buffer.write('wo');
console.log(buffer, buffer.toString(), buffer.toJSON());
// Buffer:typedArray
console.log(view);
module.exports = {
  app: '1 to 6 levels practices'
}