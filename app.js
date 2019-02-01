var Emitter = require('./modules/emitter')

var emitter = new Emitter();

emitter.on('greet', function () {
  console.log('Somewhere, someone said hello');
});

emitter.on('greet', function () {
  console.log('A greeting accurred !');
})

emitter.emit('greet');
