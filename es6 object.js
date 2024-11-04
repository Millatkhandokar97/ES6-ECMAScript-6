//ES6 object in javascript

let a = 10, b = 20

let obj = {
    a,
    b,
    print() {
        console.log(this);
    }
}
console.log(obj);

obj.print()

//147.class --> Destructuring in Javascript 

//object Destructuring
let person = {
    names: 'MD Millat',
    email: 'millatkhandokar26@gmail.com',
    address: {
        city: 'Bogura',
        country: 'Bangladesh'
    }
}

let { names, email, address, address: { city, country } } = person
console.log(person, names, email, address, city, country);


//array Destructuring
let ary = [1, 2, 3, 4, 5]
let [first, second, , , last] = ary
console.log(first, second, last);