//Generators in Javascript

let obj = {
    start: 10,
    end: 20,

    [Symbol.iterator]: function * (){
        let currentValue = this.start
        while(currentValue <= this.end){
            yield currentValue++
        }
    }
}




// let iterate = obj[Symbol.iterator]()
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());

let arr = [11, 22, 33]
// function* generator(){
//     yield 1
//     yield 2
//     yield 3
//     yield 4
// }

// let it = generator()
// console.log(it.next(arr));
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());


function* generate(collection){
    for(let i = 0; i < collection.length; i++){
        yield collection[i]
    }
}
let its = generate(arr)

console.log(its.next());
console.log(its.next());
console.log(its.next());
console.log(its.next());
