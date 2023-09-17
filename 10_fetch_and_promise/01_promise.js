const promise = new Promise(function(resolve,reject){
    const error = false;
    if(!error){
        resolve({'username' : 'Alok', 'password' : '123'});
    }
    else{
        reject('Error found');
    }
})

promise.then(function(obj){
    return obj.username;
})
.then(function(username){
    console.log(username);
})
.catch(function(str) {
    console.log(str);
})
.finally(function(){
    console.log('Finally executed');
})
