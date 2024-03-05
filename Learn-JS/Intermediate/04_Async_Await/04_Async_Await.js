// Async and Await in JS

/**
 * The async and await keywords in JavaScript are used to make asynchronous programming easy,
 * by introducing something called coroutines.
 * A coroutine is a function which can pause its execution and return control to the main loop
 * until some event occurs.
 * */

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

function sumAsync(x, y) {
    return new Promise((resolve, reject) => {
        sleep(500).then(() => {
            resolve(x + y);
        });
    });
}

async function _sumAsync(x, y) {
    // this code waits here for 500 milliseconds
    await sleep(500);
    // done waiting. let's calculate and return the value
    return x + y
}

// let's use this function now
sumAsync(5, 7).then((result) => {
    console.log("The result of the addition is:", result);
});

// _sumAsync is an async function, which means it returns a Promise.
_sumAsync(5, 7).then(console.log)