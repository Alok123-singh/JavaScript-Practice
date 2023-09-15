const buttons = document.querySelectorAll('.button');
console.log(buttons);

const body = document.querySelector('body')

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target.id);
        body.style.backgroundColor = e.target.id;
    })
});

