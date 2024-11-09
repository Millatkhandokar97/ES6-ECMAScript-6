//Arrow function & This in javascript

function person(){
    console.log(this);
}
person()
person.call({})

// let obj = {
//     names: 'MD Millat',
//     print: function() {
//         console.log(this);
//     }
// }

let obj = {
    names: 'MD Millat',
    print: function() {
        // let self = this
        setTimeout(() => {
            // console.log(self.names);
            console.log(`Hello ! ${this.names}`);
        },2000)
    }
}


obj.print()
let object = {
    names: 'MD Millat',
    print: () => {
        console.log(this);
    }
}
object.print()