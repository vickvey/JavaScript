// Modern-JS/src/index.js

// function getVowelCount_NF(str) {
//     let count = 0;
//     for (let i = 0; i<str.length; i++) {
//         if (str[i] == 'a' ||
//             str[i] == 'e' ||
//             str[i] == 'i' ||
//             str[i] == 'o' ||
//             str[i] == 'u' ) {
//             count++;
//         }
//     }
//     return count;
// }

// const getVowelCount = (str) => {
//     let count = 0;
//     for (let i = 0; i<str.length; i++) {
//         if (str[i] === 'a' ||
//             str[i] === 'e' ||
//             str[i] === 'i' ||
//             str[i] === 'o' ||
//             str[i] === 'u' ) {
//             count++;
//         }
//     }
//     return count;
// }

const arr = [1, 2, 3, 4, 5];

arr.forEach((val, idx, array) => {
    console.log(`The square of value at index ${idx**2} is ${val**2}, for the array [${arr}]!`)
});



