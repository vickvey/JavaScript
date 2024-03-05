// Promises in JS

// Promises are basics of asynchronous programming in JavaScript, and are very important to master.

/**
 * What is Asynchronous Programming?
 *
 * Asynchronous programming, or in short, async programming,
 * is a method of programming which enables different parts of code to run at changing times,
 * instead of immediately.
 *
 * This is mostly required when we want to fetch information from some remote server,
 * and write code which does something with what the server returned:
 */

// function getServerStatus() {
//     const result = fetch("/server/status")
//
//     // THIS WILL NOT WORK!
//     result.then(function(status) {
//         console.log("The status from the server is: ", status.ok);
//     });
// }

function sumAsync(x, y) {
    // This returns the promise, not the value
    return new Promise((resolve, reject) => {
        // run this in 500ms from now
        setTimeout(() => {
            if (x < 0 || y < 0) {
                reject("Negative values received");
            } else {
                resolve(x + y);
            }
        }, 500)

        // we don't need to return anything
    })
}

sumAsync(-5, 7).then((result) => {
    console.log("The result of the addition is: ", result);
}).catch((error) => {
    console.log("Error received: ", error)
})