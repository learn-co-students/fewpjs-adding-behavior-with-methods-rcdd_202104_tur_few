// Your code here

class Cat {
    //...
    constructor(name , sex){
        this.name = name
        this.sex = sex
    }

     speak(){
        return `${name} says meow!`
    }
  }
   
  class Dog {
    //...
    constructor(name , sex){
        this.name = name
        this.sex = sex
    }
    speak(){
        return `${name} says woof!`
    }
  }
   
  class Bird {
    //...
    constructor(name , sex){
        this.name = name
        this.sex = sex
    }
    speak(){
        if(this.sex === 'male')
        return `It's me!  ${name} `
        else
        return ` ${name} says squawk! `
    }
  }

  let cat = new Cat('lolo','male')
  let dog = new Dog('rex','male')
  let bird = new Bird('zajel','male')
