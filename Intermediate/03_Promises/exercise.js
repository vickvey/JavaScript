function upperCaseAsync(s) {
    // write your code here
    return new Promise((resolve, reject) => {
        if (s == null) {
            reject()
        } else {
            resolve(s.toUpperCase())
        }
    })
}

upperCaseAsync("steve").then(console.log);
upperCaseAsync(null).catch((x) => {
    console.log("No string received!");
});