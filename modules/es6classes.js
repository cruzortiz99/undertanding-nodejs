'use strict';
module.exports = class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
  greet() {
    console.log(`es6 class with name: ${this.name} , and lastName: ${this.lastName}`)
  };
}