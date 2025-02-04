// Private Data with Symbol in Javascript

const _radius = Symbol()
const _name = Symbol()
class Circle{
    constructor(radius, name){
        this[_radius] = radius
        this[_name] = name
    }
    draw(){
        console.log('Drawing...');
    }
}

let c1 = new Circle(2, 'Millat')
console.log(c1);


//get symbol property

console.log(Object.getOwnPropertyNames(c1));
console.log(Object.getOwnPropertySymbols(c1));