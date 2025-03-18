const coding = ["js", "ruby", "python", "cpp"]

const value = coding.forEach((item) => {
    console.log(item);
    return
})

// console.log(value);   // cannot store value of forEach instead filter is used.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNumbers = myNums.filter((num) => num > 4)
const newNumbers = myNums.filter((num) => {
    return num > 4
})

const newNums = []

myNums.forEach((num) => {
    if(num > 4){
        newNums.push(num)
    }
})

console.log(newNums);