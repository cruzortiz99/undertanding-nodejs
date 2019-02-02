// Parent Class
function Emitter(events) {
  this.events = events || {};
}
Emitter.prototype.on = function (type, listener) {
  this.events[type] = this.events[type] || []
  this.events[type].push(listener);
}
Emitter.prototype.emit = function (type) {
  if (this.events[type]) {
    this.events[type].forEach(listener => {
      listener();
    });
  }
}
// Child Class
function Emitter2(newEvents) {
  Emitter.call(this, {});
  this.newEvents = newEvents;
}
// Building inheritance
Emitter2.prototype = Object.create(Emitter.prototype);
Emitter2.prototype.constructor = Emitter2;

// Instances
var emitter = new Emitter({});
var emiter2 = new Emitter2('hola');

console.log(emiter2, emitter);

// Only 1 public class 
module.exports = Emitter;
