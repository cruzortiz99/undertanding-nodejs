var { en } = require('./greetings.json')
var greet = function () {
  console.log(en);
}
// solo si se muta el objeto, no si se reemplaza
exports.greet = greet;