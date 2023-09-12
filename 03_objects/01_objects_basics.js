const mySym = Symbol("key1");

const obj = {
    name : "Alok",
    age : 18,
    "address" : "Panna M.P.",
    [mySym] : "myKey1",
    pincode: 488001
}


// console.log(obj[mySym]);

// Object.freeze(obj);
// obj.name = "Ankush"

obj.sayHello = function(name){
    console.log(`Hello ${this.name} from ${name}`);
}

obj.sayHello("Ankush");
// console.log(obj);

