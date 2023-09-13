function fun(x,y,name) {
    if(name == undefined){
        console.log("No username recieved!!");
    }
    else console.log(`Hello ${name}. Welcome inside this function`);
    return (x+y);
}

// let result = fun(6,9,"Alok");
// console.log(result);


const obj1 = {
    company : "Amazon",
    department: "Seller and fullfilment tech."
}

function fun1(myObj){
    console.log(`Your company name is ${myObj.company} and department name is ${myObj.department}`);
}

// fun1(obj1);

fun1({
    company: "Amazon",
    department: "AWS"
});

let arr1 = [200,400,100,1020]

function fun2(myArray){
    return myArray[1];
}

console.log(fun2(arr1));
