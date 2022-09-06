"use strict";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name}`);
  }

  speakAge() {
    console.log(`${this.age}`);
  }
}

const peter = new Person("peter", 20);
console.log(peter.name);
console.log(peter.age);
peter.speak();
