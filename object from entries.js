//Object From Entries in Javascript


let obj = {
    a: 10,
    b: 20
}
console.log(Object.entries(obj));

let objAry = [
    ['a', 10],
    ['b', 20]
]
console.log(Object.fromEntries(objAry));