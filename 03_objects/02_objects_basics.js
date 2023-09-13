const obj1 = {
    id : 1,
    name : "Alok",
    role : "Customer"
}

// console.log(obj1.hasOwnProperty("id"));

const obj2 = {
    city : "Panna",
    State: "Madhya Pradesh",
    pincode: 488001
}

// const obj3 = {obj1, obj2};

// const obj3 = Object.assign({},obj1,obj2);

const obj3 = {...obj1, ...obj2}

console.log(obj3);




