'use strict';
class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
  greet() {
    console.log('\n--New practice: Es5 classes and inheritace')
    console.log(`es6 class with name: ${this.name} , and lastName: ${this.lastName}`)
  };
}

class Male extends Person {
  constructor(name, lastName) {
    super(name, lastName);
    this.sex = 'Male';
  }
}

module.exports = {
  Person: Person,
  Male: Male
}