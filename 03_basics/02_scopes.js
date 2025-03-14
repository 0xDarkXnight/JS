var c = 300
let a = 100

if(true){
    let a = 10
    const b = 20
    var c = 30 // or just c = 30
    // console.log("Inner:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Akshat"
    function two(){
        const website = "YouTube"
        // console.log(username)
    }
    // console.log(website)

    two()
}

one()

if(true){
    const username = "Akshat"
    if(username === "Akshat"){
        const website = "YouTube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// INTERESTING

addOne(5) // this will work here
function addOne(num){
    return num + 1
}
addOne(5)

addTwo(5) // this won't work here
const addTwo = function(num){
    return num + 2
}
addTwo(5)