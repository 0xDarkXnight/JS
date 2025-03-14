const user = {
    username: "Akshat",
    price: "999",

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}
user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

console.log(this) // empty object but not empty if we run this on console, it will return window object there.

// function test(){
//     const username = "Akshat"
//     console.log(this.username); // does not work inside a function, only works inside an object.
// }

// const test = function(){
//     const username = "Akshat"
//     console.log(this.username); // this doesn't work too.
// }

const test = () => {
    const username = "Akshat"
    console.log(this.username); // this doesn't work here as well and returns undefined everywhere.
}

test()

// const addTwoNumbers = (num1, num2) => {
//     return num1 + num2
// }
// const addTwoNumbers = (num1, num2) =>  num1 + num2
// const addTwoNumbers = (num1, num2) =>  (num1 + num2) // if {} then there is need to write return but if there is () then no need to write return.
const addTwoNumbers = (num1, num2) =>  ({username: "Akshat"}) 

console.log(addTwoNumbers(3, 4))