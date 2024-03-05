// Callbacks in JS

// Callbacks in JS are functions that are passed as arguments to other functions.
// This is very important feature of asynchronous programming, and it enables the function
// that receives the callback to call our code when it finishes a long task, while allowing us
// to continue the execution of the code.

let callback = function() {
    console.log("Done callback!")
}

setTimeout(callback, 5000)

// anonymous functions are feature of JS you can not name them but use it at the moment
setTimeout(function () {
    console.log("This is returned by anonymous function!")
}, 5000)