class Animal{
    static alive = true

    static eat(){
        console.log(`${this.name} is eating!!!`)
    }
    static sleep(){
        console.log(`${this.name} is sleeping`)
    }
}

class dog extends Animal{
    static name = "Dog"
}

class cat extends Animal{
    static name = "Cat"
}

dog.eat()
dog.sleep()
cat.eat()
cat.sleep
console.log(cat.alive)
console.log(dog.alive)
