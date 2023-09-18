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


