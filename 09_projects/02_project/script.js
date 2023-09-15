const form = document.querySelector('.formClass');

form.addEventListener('submit', function (e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please enter a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please enter a valid weight ${weight}`;
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        const str = `BMI is ${bmi}`;

        if(bmi < 18.5){
            result.textContent =  `${str}. You are underweight`;
        }
        else if(bmi > 18.5 && bmi < 24.9){
            result.textContent = `${str}. You are healthy`;
        }
        else if(bmi > 25 && bmi < 29.9){
            result.textContent = `${str}. You are overweight`;
        }
        else if(bmi > 30){
            result.textContent = ` ${str}. You are obese`;
        }
    }

});

