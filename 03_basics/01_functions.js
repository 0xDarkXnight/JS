// function sayMyName(){
//     console.log("A");
//     console.log("K");
//     console.log("S");
//     console.log("H");
//     console.log("A");
//     console.log("T");
// }

// sayMyName()

// function addTwoNumbers (number1, number2) {
//     console.log(number1 + number2);
// } // this doesn't return anything so the value cannot be stored in a variable.

// addTwoNumbers(3, "a")

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
    console.log("Akshat"); // this will never be executed as it is written below the return statement.
}

const result = addTwoNumbers(3, 5)

console.log("Result:", result);

function loginUserMessage(username = "akshat" /*initialisation. if nothing is passed then this will get executed and if something is passed then if will get overridden*/){
    if(username === undefined /*=>!username*/){
        console.log("Please enter a username.");
        return
    }
    return `${username} just logged in.`
}

// console.log(loginUserMessage("Akshat"))
console.log(loginUserMessage()); // undefined(not null) just logged in.

function calculateCartPrize(var1, var2, ...num1){
    return num1
}

console.log(calculateCartPrize(200, 400, 500, 2000));

const user = {
    username: "Akshat",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "BilluSaanda",
    price: 199
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 500, 1000, 2000]))