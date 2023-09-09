const accountId = 14
let accountEmail = "alok@google.com"
var accountPassword = "1234"
accountCity = "Panna" // not recommended
let accountState

accountEmail = "alok@gmail.com"
accountPassword = "543"
accountCity = "Satna"

// accountId = 15 // not allowed

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
prefer not to use var because of issue in block scope and functional scope
*/