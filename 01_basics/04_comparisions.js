console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)
// the reason is that an equality check == and comparisons > < >= <= work differently
// comparisons convert null to a number, treating it as 0.

console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined < 0)
console.log(undefined >= 0)
console.log(undefined <= 0)

/// === also checks the datatype and == checks only the value.
console.log("2" == 2) //true
console.log("2" === 2) // false