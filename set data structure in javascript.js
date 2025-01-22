// Set in Javascript

let set = new Set([1, 2, 3])

set.add(5)
set.add(6)
set.add(2)
set.add(1)

console.log(set);
console.log(set.size);


let set1 = new Set()

set1.add(1)
set1.add(2)
set1.add(3)
set1.add(4)
console.log(set1.delete(4));
console.log(set1);
console.log(set1.has(3));
console.log(set1.clear);

let keyIterate = set.values()
console.log(keyIterate);
console.log(keyIterate.next());


// function isIterable(obj){
//     return typeof obj[Symbol.iterator] === 'function'
// }

// console.log(isIterable(set));


for (let v of set){
    console.log(v);
}

console.log(set.entries());
