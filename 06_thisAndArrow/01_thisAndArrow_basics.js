// console.log(this);

function one(value) {
    const name = value.toString();
    console.log(`Hello from ${name}`);
    console.log(this.name);
    // console.log(this);
}

one('Alok');

const two = () => {
    const name = "Alok";
    console.log(this.name);
    console.log(this);
}

two();

const three = (x,y) => (x+y)
console.log(three(1,3));

const four = (x,y) => x+y
console.log(four(7,10));

