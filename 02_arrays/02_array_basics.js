const marvel_heros = ["IronMan","Thor","Spriderman","Captain America"]
const dc_heros = ["Superman","Flash","Batman","Aquaman"]

marvel_heros.push(dc_heros);
// console.log(marvel_heros); // it adds dc_heros as a whole array into marvel_heros and not element wise

const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all_heros = [...marvel_heros, ...dc_heros];
// console.log(all_heros);

const arr = [1,2,3,[3,4,6],[6,7,8,[2,1,3]]];
const arr1 = arr.flat(Infinity);
// console.log(arr1);

let isArray = Array.isArray("Hello");
// console.log(isArray);

let convertedArray = Array.from("hello");
// console.log(convertedArray);

let x = 1;
let y = 2;
let z = 3;

let newArray = Array.of(x,y,z);
// console.log(newArray);

