"use strict";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name}`);
  }
}

const peter = new Person("peter", 20);
console.log(peter.name);
console.log(peter.age);
peter.speak();
