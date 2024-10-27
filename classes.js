//Javascript Examples 
//JavaScript classes, constructors


class Car{
    constructor(name, brand){
        this.name = name
        this.brand = brand
    }
    diplayCar(){ 
        return this.name + " " + this.brand
    }
}

class NewCar extends Car{
    constructor(name,band,makeyear){
        super(name,band)
        this.makeyear = 2023
    }
    displayFullCar(){
        console.log(this.diplayCar() + " " + this.makeyear)
    }
}

const car = new NewCar("corrolla","Toyota",2023);
console.log("JS Classes results: ")
car.displayFullCar();


// Arrow functions

function hello(){
    return "Hello JS Community! qith standard function!"
}

console.log(hello())

//Now lets do this with the Arrow functions

helloArrow = () => {
    return "Hello JS Community! from arrow function!"
}

console.log(helloArrow())




