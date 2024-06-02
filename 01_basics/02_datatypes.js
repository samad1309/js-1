"use strict"; //treat all JS code as newer version

// alert(4 + 2)  will not work, we are using node.js, not a browser

console.log(4 +
    2
); //code will work fine, but READABILITY is important too

// Data Types

let name = "samad"

let age = 21

let isAdult = true

let state; //undefined

// Run the code to see the type of all the data types.
// String, age, boolean, null
console.table([
    [name,typeof(name)],
    [age,typeof(age)],
    [isAdult,typeof(isAdult)],
    [state,typeof(state)],
    [null,typeof(null)]
])
