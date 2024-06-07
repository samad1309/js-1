const name = "samad"
const age = 21

console.log(`${name} is a student at AMU, his age is ${age}`)

let newString = "Working from 9 to 8"
console.log(newString)

let newStringOne = new String("Working-from-9-to-8 and trying to get a job")

console.log(newStringOne[7])
console.log(newStringOne.__proto__)

console.log(newStringOne.charAt(3))
console.log(newStringOne.indexOf('a'))


let anotherString = new String("this is a new String")

console.log(anotherString.substring(0,4))

console.log(anotherString)
const slicingString = anotherString.slice(2,-5)
console.log(slicingString)

let newStringTwo = "        so manyspaces   "
console.log(newStringTwo.trim())

const url = "https://samad.khan@yahooo.co.in/home%20login"

console.log(url.replace("%20"," "))

console.log(newStringOne.split("-"))





