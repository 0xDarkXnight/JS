// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = "100"

const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 123124124324325324324234n

// Reference (Non Primitive)

// Arrays, Objects, Functions

const heroes = ["iron man", "captain america", "thor"]

let myObj = {
    name: "Akshat",
    age: 18
}

const myFunction = function(){
    console.log("Hello World")
}

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Akshat"

let anotherName = myName
anotherName = "BilluSaanda"

console.log(myName)
console.log(anotherName)

let userOne = {
    email: "user@user.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "user@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)