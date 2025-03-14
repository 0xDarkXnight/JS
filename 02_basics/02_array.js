const marvel_heroes = ["IronMan", "Thor", "SpiderMan"]
const dc_heroes = ["SuperMan", "Flash", "Batman"]

// marvel_heroes.push(dc_heroes) // it will be pushed as an array
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][2])

// const allHeroes = marvel_heroes.concat(dc_heroes)  // can only concat two so this is a limitation
// console.log(allHeroes)

const all_new_heroes = [...marvel_heroes, ...dc_heroes] // can be applied to any number of arrays
console.log(all_new_heroes)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Akshat"))
console.log(Array.from("Akshat"))
console.log(Array.from({name: "Akshat"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
