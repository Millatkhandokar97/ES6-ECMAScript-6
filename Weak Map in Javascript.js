//Weak Map in Javascript

let a={a: 10}, b={b: 20}

let weakMap = new WeakMap([[a, 10],[b, 20]])

a = null

console.log(weakMap);
console.log(weakMap.get(a));
console.log(weakMap.has(a));
console.log(weakMap.has(b));