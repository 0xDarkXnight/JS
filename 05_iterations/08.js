const myNums = [1, 2, 3]

const initialValue = 0
// const myTotal = myNums.reduce((accumulator, currentValue) => {
//     console.log(`acc is ${accumulator} and current value is ${currentValue}`)
//     return accumulator + currentValue
// }, initialValue)

const myTotal = myNums.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)

console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const totalBill = shoppingCart.reduce((accumulator, currentValue) => accumulator + currentValue.price , 0)

console.log(totalBill)