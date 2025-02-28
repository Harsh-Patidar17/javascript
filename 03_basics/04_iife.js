//Immediately Invoked Function Expressions(IIFE)

(function chai(){ // named IIFE
    console.log("damn");// global scope ke pollution se problem hoti h kayi baar  
})(); // kindly use semicolon  
// toh us pollutuion ko hata ke liye humne iife banaya h 

( (name) => {
    console.log(`DB connected two ${name}`)
}) ("harsh")

 