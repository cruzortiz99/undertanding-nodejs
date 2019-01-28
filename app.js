var greet = require('./modules/greet.js');
greet();

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastname = lastName;
}
Person.prototype.greet = function () {
  console.log('Hello, ' + this.firstName + ' ' + this.lastname);
}
var john = new Person('John', 'Doe');
console.log(john.greet());
