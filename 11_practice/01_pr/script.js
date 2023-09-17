const anchor = document.querySelector('#anchor');

let cnt = 0;
anchor.addEventListener('click',function(e){
    anchor.innerHTML = `clicked ${cnt} times`;
    const newAnchor = document.createElement('a');
    newAnchor.setAttribute('href','https://www.youtube.com')
    newAnchor.setAttribute('target','_blank');
    anchor.parentNode.appendChild(newAnchor);
    newAnchor.style.color = 'yellow';
    newAnchor.innerHTML = "Youtube";
    console.log(cnt);
    cnt++;
})




