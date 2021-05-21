class Cat {
    constructor(name, sex) {
        this["name"] = name;
        this["sex"] = sex;
    };
    speak() {
        let result = `${this.name}` + " says meow!";
        console.log(result);
        return result;
    };
};

class Dog {
    constructor(name, sex) {
        this["name"] = name;
        this["sex"] = sex;
    };
    speak() {
        let result = `${this.name}` + " says woof!";
        console.log(result);
        return result;
    }
};

class Bird {
    constructor(name, sex) {
        this["name"] = name;
        this["sex"] = sex;
    };
    speak() {
        if (this.sex === "male") {
            let result = "It's me! " + `${this.name}` + ", the parrot!";
            console.log(result);
            return result;
        }
        else if (this.sex === "female") {
            let result = `${this.name}` + " says squawk!";
            console.log(result);
            return result;
        }

    }
};