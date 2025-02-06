// Getter & Setter in ES6
// 'use strict'

const _radius = new WeakMap()
const _name = new WeakMap()
const _resize = new WeakMap()

class Circle{
    constructor(radius, name){
        this.size = 100
        _radius.set = (this, radius)
        _name.set = (this, name)
        _resize.set(this, ()=>{
            console.log(this.size);
        })
    }

    get radius() {
        return _radius.get(this)
    }

    draw(){
        console.log('Drawing...');
        console.log(_radius.get(this), _name.get(this));
        _resize.get(this)()
    }
}

let c1 = new Circle(2, 'Millat')
let c2 = new Circle(5, 'hossain')
c1.draw()

console.log(c1.radius);
console.log(c2.draw());
