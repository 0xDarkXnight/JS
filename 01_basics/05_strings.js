const name = "Akshat"
const repoCount = 50

// console.log(name + repoCount + "Value")

console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Billu-Saanda-dot-com")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(4));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(-21,5)
console.log(anotherString);

const newStringOne = "    Akshat    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://akshat.com/akshat%20goyal"
console.log(url.replace('%20', '-'))
console.log(url.includes('akshat'))
console.log(url.includes('billu'))

console.log(gameName.split('-'))
console.log(gameName.split('-',2))