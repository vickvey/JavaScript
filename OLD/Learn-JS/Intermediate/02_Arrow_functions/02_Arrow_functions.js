// Arrow functions in JS

const greet = (name) => { return "Hello " + name + "!"}
console.log(greet("Alex"))

// In case that the function only receives one argument, we can omit the parentheses:
const greet2 = name => {return "Hello " + name + "!"}
console.log(greet2("Bob"))

// And in case that we want to do an explicit return of the function, and we have only one line of code, we
// avoid the return statement and omit brackets too:

const greet3 = name => "Hello " + name + "!";
console.log(greet3("Charles"))

// Use an arrow as a callback compared to a normal function:
let numbers = [3, 5, 8, 9, 2];

// Old way
function multiplyByTwo(number) {
    return number * 2;
}

let multipliedNumbers = numbers.map(multiplyByTwo);
console.log(multipliedNumbers)

// Using an ES6 arrow functions
const multiplyByTwo_af = number => number * 2;
let multipliedNumbers_af = numbers.map(multiplyByTwo_af)
console.log(multipliedNumbers_af)