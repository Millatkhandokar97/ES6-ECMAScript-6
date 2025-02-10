import Shape from "./Shape";

class Rectangle extends Shape{
    constructor(width, height){
        super(this.color)
        this.width = width
        this.height = height
    }

    draw() {
        console.log('Drawing Method Overriding');
    }

    calculate() {
        return this.width * this.height
    }
}

export default Rectangle