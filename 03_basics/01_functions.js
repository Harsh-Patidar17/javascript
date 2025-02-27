function addNumber(number1,number2){
    console.log(number1+number2)
}
addNumber(3,4)

function loginUserMessage(username="good") // we can also overwrite the values , like we can write sam or any name and it will get bypass if we write a new value 
{
    return `${username} just logged in`
}
console.log(loginUserMessage())
function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(500,2000,300,500));

const user= {
    username:"harsh",
    price:199
}
function handleObject(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user);