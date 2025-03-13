let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// console.log(typeof myDate);

// let newDate = new Date(2023, 0, 23)
// let newDate = new Date(2023, 0, 23, 5, 3)
// let newDate = new Date("2023-01-23")
let newDate = new Date("01-14-2023")
console.log(newDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(newDate.getTime());
console.log(Math.floor(Date.now()/1000));

console.log(myDate.getMonth() + 1);
console.log(myDate.getDate());
console.log(myDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}))