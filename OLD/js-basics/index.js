// This is my first JavaScript code
console.log("Hello World!");

// Default value of JavaScript variables
// is undefined.

function square(number) {
    return number*number;
}

function greet(name) {
    console.log("Welcome " + name);
    console.log("This is a function");
}

var beg = 20;
const A = 50;

let a = 5;
let b = 10;

// Variables cannot be a reserved keyword
console.log("The value of A is:", A);
console.log("The value is :", beg);
console.log("My name is Alex Dcousta.");
console.log(a + b);

// calling the function
greet('John');
greet("Mary");

let number = square(4);
console.log(number);