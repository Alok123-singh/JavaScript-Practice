const arr = [1,2,3,4,5]
console.log(arr[2]);

// arr.push(10);
// arr.push(20);
// arr.pop();
// console.log(arr);

arr.unshift(-1)
arr.unshift(-2)
arr.shift();
console.log(arr);

const arr1 = arr.slice(1,3)
console.log(arr1);

const arr2 = arr.splice(1,3);
console.log(arr2);
console.log(arr);

