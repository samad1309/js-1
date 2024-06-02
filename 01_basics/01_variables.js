const accountId = "3456"

let accountName = "Rahul"  // most widely used way to declare variables

var accountPassword = "345R" // old method to declare varibales but due to scope being not well defined, it was put out of practice, Issues in  inblock scope and functional scope

accountCity = "Jaipur" //Not recommended at all

let accountState; //Will be undefined by default

console.log("accountId");

// accountId = "231" (not possible since it is a constant)

console.table([accountId,accountName,accountPassword,accountCity,accountState])