console.log("We are learning about the modules in node.js")

//********** in general*********** */
// const sum = (a,b) => a + b; 
// const sub = (a,b) => a - b;  
// const mul = (a,b) => a * b;  
// const div = (a,b) => a / b;  

// console.log("add two no:",sum(10,5))

//**********now we learn import funcction*********** */


const { sum } = require("./utils.js"); //importing the functions from utils.js file  
console.log("add two no:", sum(10, 5)); //calling the sum function from utils.js file

//**********now we learn import funcction*********** */
