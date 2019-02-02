var Emitter = require('events');
var events = require('./modules/eventsConfig').events;
var CustomEmiter = require('./modules/emitter');

var emitter = new Emitter();

emitter.on(events.GREETING, function () {
  console.log('Somewhere, someone said hello');
});

emitter.on(events.GREETING, function () {
  console.log('A greeting accurred !');
})
var customEmiter = new CustomEmiter();
emitter.emit(events.GREETING);
