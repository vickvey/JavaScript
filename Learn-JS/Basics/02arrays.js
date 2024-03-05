// Arrays

var myArray = [1, 2, 3]
var theSameArray = [1, 2, 3]

// Stack in JS using arrays
var myStack = []
myStack.push(10)
myStack.push(-56)
myStack.pop()
console.log(myStack)
console.log(myStack.pop())
console.log(myStack)

// Queue in JS using arrays (using shift and unshift)
var myQueue = [];
myQueue.push(1)
myQueue.push(2)
myQueue.push(3)

console.log(myQueue.shift())
console.log(myQueue.shift())

// unshift method is used to insert a variable at the beginning of an array

// splicing in JS removes certain part from an array to create a new array
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var splice = myArray.splice(3, 5)
console.log(myArray)