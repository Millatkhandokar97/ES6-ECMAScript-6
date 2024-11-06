//Custom Iterate in javascript


let obj = {
    start: 1,
    end: 10,
    [Symbol.iterator]: function () {
        let currentValue = this.start
        const self = this
        return {
            next() {
                return {
                    done: currentValue > self.end,
                    value: currentValue > self.end ? undefine : currentValue++
                }
            }
        }
    }
}


// for (let v of obj){
//     console.log(v);
// }

let iterator = obj[Symbol.iterator]()
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());