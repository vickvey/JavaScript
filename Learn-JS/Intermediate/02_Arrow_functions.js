// Arrow functions in JS

// Arrow functions are a feature of ES6, their behavior are generally the same of a function.

/**
 * These are anonymous functions with special syntax, they haven't their own this, arguments
 * or super.
 * They can't be used as constructors too.
 * Arrow functions are often used as callbacks of native JS functions like map, filter or sort.
 * The reason of their name is due to the use of => in the syntax.
 *
 * To define an arrow function, we use () => {} structure as follows:
 * ```bash
 * const greet = (name) => { return "Hello" + name + "!"; }
 * ```
**/

const greet = (name) => { return "Hello " + name + "!"; }
console.log(greet("Alex"))