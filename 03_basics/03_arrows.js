const user ={
    username:"harsh",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`)
    }
}
user.welcomeMessage()
user.username="somesh"
user.welcomeMessage()

const addTwo = (num1,num2) => {
    return num1+num2
}
const addTwo = (num1,num2) => (num1+num2)// implicit return , also keep it under paremthisis
console.log(addTwo(3,4));
const addTwo = (num1,num2) => ({username:"harsh"}) // to return an object 
console.log(addTwo(3,4));

