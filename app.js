var Emitter = require('events');
var events = require('./modules/eventsConfig').events;

var emitter = new Emitter();

emitter.on(events.GREETING, function () {
  console.log('Somewhere, someone said hello');
});

emitter.on(events.GREETING, function () {
  console.log('A greeting accurred !');
})

emitter.emit(events.GREETING);
