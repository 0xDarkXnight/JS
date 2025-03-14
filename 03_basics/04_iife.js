// Immediately Invoked Function Expressions (IIFE)

(function test(){
    console.log(`DB connected`);
})(); // Named IIFE

((name) => {
    console.log(`DB connected to ${name}`);
})("Akshat"); // Unnamed IIFE