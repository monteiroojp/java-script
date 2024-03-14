class Product{
    constructor(name, price){
        this.name = 'name'
        this.price = price
    }

    displyProduct(){
        console.log(`O nome do produto é ${this.name} and the price is R$${this.price}`)
    }
    calculateTotal(saleTax){
        return this.price + (this.price * saleTax)
    }
}



class MathUntil{
    static PI = Math.PI

    static calculateDiameter(radius){
        return radius * 2
    }
    static calculateCircuference(radius){
        return 2*this.PI*radius
    }
}

console.log(MathUntil.calculateCircuference(5))

let object = new MathUntil

