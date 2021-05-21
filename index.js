// Your code here

class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak() {
    return `${this.name} says meow!`;
  }
}

// let cat = new Cat(100.24, '03/04/2018', 'Grocery Shopping');
 
class Dog {
  constructor(name, sex) {
  this.name = name;
  this.sex = sex;
  }
  speak() {
    return `${this.name} says woof!`;
  }
}
 
class Bird {
  constructor(name, sex) {
  this.name = name;
  this.sex = sex;
  }
  speak() {
    if (this.sex === "male") {
      return `It's me! ${this.name}, the parrot!`;
    } else {
      return `${this.name} says squawk!`;
    }
  }
}