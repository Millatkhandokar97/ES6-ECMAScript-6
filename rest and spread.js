// Rest and Spread in javascript

function sum(...rest) {
    return rest.reduce((a, b) => a + b)
}
console.log(sum(1, 2, 3, 4, 5));


let a = [1, 2, 3]
console.log(...a);





