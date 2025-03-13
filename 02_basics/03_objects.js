// singleton
// object.create

// object literals

const mySym = Symbol["key1"]

const JsUser = {
    name: "Akshat",
    "fullName": "Akshat Goyal",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "akshat@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]); // can use both

console.log(JsUser["fullName"]); // only way.

console.log(JsUser[mySym]); // only way to print a symbol

JsUser.email = "akshat@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "akshat@deepseek.com" // no change if the object is already freezed
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
