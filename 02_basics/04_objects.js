// const tinderUser = new Object() // singleton object
const tinderUser = {} // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Berlin"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Akshat",
            lastName: "Goyal"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName); // context would be regularUser.fullname?.userFullName.firstName if I want to check that is there a fullname object inside my regularUser object and if yes then proceed.

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id:3,
        email: "c@gmail.com"
    }
]

console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // output is in form of array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "JS by chai aur code",
    courseprice: "999",
    courseInstructor: "Hitesh Choudhary"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor)
console.log(instructor);

// const navbar = (/*props.company =>*/ {company}) => {

// }

// navbar(company = "Hitesh")    // this is a part of React.

// {
//     "name": "Akshat",
//     "coursename": "JS",
//     "price": "free"
// }

[
    {},
    {},
    {}
]                     // the JSON could be an array too.