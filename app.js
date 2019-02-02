var Emitter = require('events');
var { events } = require('./modules/eventsConfig');
var CustomEmiter = require('./modules/es5inheritance');
var { Male } = require('./modules/es6classes');
var emitter = new Emitter();

emitter.on(events.GREETING, function () {
  console.log('Somewhere, someone said hello');
});

emitter.on(events.GREETING, function () {
  console.log('A greeting accurred !');
})
var customEmiter = new CustomEmiter();
var person = new Male('Cruz', 'Ortiz');
person.greet();

emitter.emit(events.GREETING);
