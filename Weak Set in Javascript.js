//Weak Set in Javascript


let a={a: 10}, b={b: 20}

let set = new Set([a, b])

a = null 

console.log(set);
console.log(set.has());

let arr = [...set]
console.log(arr[0]);


let c={c: 10}, d={d: 20}

let weakSet = new WeakSet([c, d])
c = null

console.log(weakSet);
console.log(weakSet.has());