var Emitter = require('events');
var { events } = require('./modules/classes/eventsConfig');
var CustomEmiter = require('./modules/classes/es5inheritance');
var { Male } = require('./modules/classes/es6classes');
var buffer = require('./modules/buffer-stream-pipes/bufferTraining');
var { view } = require('./modules/buffer-stream-pipes/typedarrays')
var greet = require('./modules/callbacks/callbacks');
var hi = require('./modules/buffer-stream-pipes/files');
var streamReadable = require('./modules/buffer-stream-pipes/streams');
var pipe = require('./modules/buffer-stream-pipes/pipes')
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
