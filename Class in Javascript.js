// Class in Javascript

class Rectangle{
    constructor(width, height){
        this.width = width
        this.height = height
    }
    draw(){
        console.log('Drawing...');
    }
}

let rect1 = new Rectangle(45, 23)
console.log(rect1);
console.log(typeof Rectangle);