// const anchor = document.querySelector('#anchor');

// let cnt = 0;
// anchor.addEventListener('click',function(e){
//     anchor.innerHTML = `clicked ${cnt} times`;
//     const newAnchor = document.createElement('a');
//     newAnchor.setAttribute('href','https://www.youtube.com')
//     newAnchor.setAttribute('target','_blank');
//     anchor.parentNode.appendChild(newAnchor);
//     newAnchor.style.color = 'yellow';
//     newAnchor.innerHTML = "Youtube";
//     console.log(cnt);
//     cnt++;
// })



// const obj = {
//     firstName: "Alok",
//     lastName : "Singh"
// }

// obj.show = function(){
//     return `FullName is ${this.firstName} ${this.lastName}`;
// }

// console.log(obj.show());

// let array = [1,2,3];

// array.fun = function(){
//     for(let i = 0; i < this.length; i++){
//         console.log(this[i]);
//     }
//     console.log('Alok');
// }

// array.fun();

// Object.prototype.fun1 = function(){
//     console.log('Added');
// }

// array.fun1();



async function one(){
    const promise = new Promise(function(resolve,reject){
        const error = false;
        if(!error){
            setTimeout(function(){
                console.log('task executed');
            },2000);
            resolve('Resolved');
        }
        else{
            reject('Rejected');
        }
    });

    let response = await promise;
    console.log(response);
}

one();


