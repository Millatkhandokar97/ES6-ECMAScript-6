// Iterator With Symbol in Javascript

let arr = [1, 2, 3]

console.log(arr[Symbol.iterator]());

let iteratorArr = arr[Symbol.iterator]()
console.log(iteratorArr.next());
console.log(iteratorArr.next());
console.log(iteratorArr.next());
console.log(iteratorArr.next());


let str = 'Millat'

let iteStr = str[Symbol.iterator]()
console.log(iteStr.next());
console.log(iteStr.next());
console.log(iteStr.next());
console.log(iteStr.next());
console.log(iteStr.next());
console.log(iteStr.next());
console.log(iteStr.next());