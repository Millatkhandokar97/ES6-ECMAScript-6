// Iterator Basics in Javascript

let arr = [1, 2, 3]

function createIterator(collection){
    let i = 0
    return {
        next(){
            return {
                done: i >= collection.length,
            value: collection[i++]            }
        }
    }
}

let iterate = createIterator(arr)
console.dir(iterate.next);
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());