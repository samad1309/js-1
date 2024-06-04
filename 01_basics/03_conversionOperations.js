let score = "samad"

console.log(typeof(score));

// String to NUmber
let valueInNumber = Number(score)
console.log(typeof(valueInNumber))
console.log(valueInNumber)
// Similarly
// "33" => 33
// "33abc" => NaN
// true => 1 false =>0


// " " => false "notemptystring" => true
nam = "Ken"
let inBoolean = Boolean(nam)
console.log(inBoolean)
console.log(typeof(inBoolean))

// Number to String
let isNum = 13
let isString = String(isNum)

console.log(isString)
console.log(typeof(isString))

console.log(isString + 3 + 4)
console.log(3 + 4 + isString)

// Learn about post increment and preincrement
let y = 1
let z = y++
let x = ++y


console.log(x)
console.log(y)
console.log(z)
