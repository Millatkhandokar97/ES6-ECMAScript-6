// Inheritance in ES6 in Javascript

class Shape {
    constructor(color){
        this.color = color
    }
    draw(){
        console.log('Drawing...');
    }
}

class Rectangle extends Shape{
    constructor(width, height){
        super(this.color)
        this.width = width
        this.height = height
    }

    calculate() {
        return this.width * this.height
    }
}

let rect = new Rectangle('green', 4, 5)

console.log(rect);

rect.draw()