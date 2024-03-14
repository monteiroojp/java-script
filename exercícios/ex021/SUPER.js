class Animal{

    constructor(name, age){
        this.name = name
        this.age = age
    }
}

class Rabit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age)
        this.runSpeed = runSpeed
    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age)
        this.runSpeed = swimSpeed
    }
}

class bird extends Animal{
    constructor(name, age, flySpeed){
        super(name, age)
        this.runSpeed = flySpeed
    }
   
}



const animal1 = new Rabit('rabit', 2, '20m/s')
const animal2 = new Fish('fish', 3, '30m/s')
const animal3 = new bird('bird', 5, '50m/s')

console.log(animal1)
console.log(animal2)
console.log(animal3)
