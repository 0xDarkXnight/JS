const myArr = [0, 1, 2, 3, 4]
const myHeroes = ["iron man", "captain america", "thor"]
const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0])

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop() // Removes the last element of the array.
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))
// console.log(myArr)

const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

// slice, splice

console.log("A ", myArr)

const myn1 = new Array(myArr.slice[1,3])

console.log(myn1)
console.log("B ", myArr)

const myn2 = new Array(myArr.splice[1,3])

console.log("C", myArr)
console.log(myn2)
