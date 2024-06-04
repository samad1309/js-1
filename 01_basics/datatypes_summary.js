// Primitive and Non Primitive Data types

// Primitive Datatypes
// These are called by Value (i.e Data is copied from memory and changes are made in the copy)

//7:  String, Number, Boolean, null, undefined, Symbol, BigInt

const name = "samad" 
let num = 34
let num1 = 34.566
let isAdult = false
let temperature = null
let school;
let id = Symbol("245")
let anotherId = Symbol("245")

console.log(`Is anotherId equal to id?`, id===anotherId);


console.table([["name",name,typeof(name)],
            ["num",num,typeof(num)],
            ["num1",num1,typeof(num1)],
            ["isAdult",isAdult,typeof(isAdult)],
            ["temperature",temperature,typeof(temperature)],
            ["school",school,typeof(school)],["id",id,typeof(id)],
            ["anotherId",anotherId,typeof(anotherId)]])

// Non-Prmimitve datatypes or Reference types
// These are the values whose references can be allocated directly in the memory

// 3: Array, Objects, Functions

/* JS is a dynamically typed language because the interpreter assigns the variables a type at runtime, based on the value of the variable at that time */

let listOfStudents = ["uzair","Sahid","Samad","Ahmad"]

let studentId = {
    name: "Samad",
    age: 21,
    section : "A4CO"
}

console.log(`The class of the student`, studentId.name,`is`,studentId.section)

// Typeof of a function is Object Function
let myFunction = function(){
    console.log("This is a function")
}

console.table([["listOfStudents",listOfStudents,typeof(listOfStudents)],
            ["studentId",studentId,typeof(studentId)],
            ["myFunction",myFunction,typeof(myFunction)]])




