var Emitter = require('events');
var { events } = require('./modules/eventsConfig');
var CustomEmiter = require('./modules/es5inheritance');
var { Male } = require('./modules/es6classes');
var buffer = require('./modules/bufferTraining');
var { view } = require('./modules/typedarrays')
var greet = require('./modules/callbacks');
var hi = require('./modules/files')
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
