//For of Loop in Javascript

let arr = [1, 2, 3]


for(let v of arr){
    console.log(v);
}

for(let v of "MD Millat Khandokar"){
    console.log(v);
}


let obj = {
    a: 10,
    b: 20
}
// object is not iterable, so this not working
for(let v of obj){
    console.log(v);
}