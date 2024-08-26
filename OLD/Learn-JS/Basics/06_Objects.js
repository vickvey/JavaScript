var emptyObject = {};

var personObject = {
    firstName : "John"
    , lastName : "Smith"
}

console.log(personObject.firstName)
personObject["salary"] = 14000

console.log(personObject)

for (var member in personObject) {
    if(personObject.hasOwnProperty(member)) {
        console.log("the member " + member + " of personObject is " + personObject[member])
    }
}