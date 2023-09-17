const promise = fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
// console.log(promise);

promise.then(function(response){
    const data = response.json();
    // console.log(data);
    return data;
})
.then(function(data){
    console.log(data.bpi.USD.rate);
})
.catch(function(){
    console.log('Were not able to fetch data');
})

