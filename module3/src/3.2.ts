// OOP - Inheritence

class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep(numberOfSleep: number) {
        console.log(`${this.name} will sleep for ${numberOfSleep}`)
    }
}

class Student extends Person {
    constructor(name: string, age: number, address: string) {
        super(name, age, address)
    }
}

const student1 = new Student('Juhi', 23, 'Boalkhali');

class Teacher extends Person {
    designation: string
    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address)
        this.designation = designation
    }
    takeClass(numOfClass: number) {
        console.log(`${this.name} will take ${numOfClass}`);
    }
}

const teacher = new Teacher('Mr.Tea', 40, 'Uganda', 'professor');