//Default Parameters in Javascript

function sqr (n=1){
    return n*n
}

console.log(sqr());


// function greet (name, msg){
//     console.log(`${msg}! ${name}`);
// }
// greet('MD MILLAT', 'Hello')
// greet(null, 'Hello')

function greet1 (msg='Hello', name='MD MILLAT'){
    console.log(`${msg}! ${name}`);
}
greet1('Hello', 'MD MILLAT')
greet1()//defall parameter some time makes an error