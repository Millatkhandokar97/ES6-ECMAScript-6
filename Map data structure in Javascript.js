//Map in Javascript


let map = new Map([
    ['a', 10],
    ['b', 20],
    ['c', 30]
])

map.set('d', 40)

console.log(map);
console.log(map.delete('c'));
console.log(map.get('b'));
console.log(map.size);
console.log(map.values);
console.log(map.keys);
console.log(map.entries);

//provide everything is map keys
map.set({name: 'string'}, 55)

for(let [k, v] of map){
    console.log(k, v);
}

map.forEach((v, k)=>{
    console.log(k, v);
})