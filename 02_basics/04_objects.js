const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="rome"
tinderUser.isLoggedIN=false

// console.log(tinderUser);

const regualarUser = {
    email: "someone@gmail.com",
    fullname: {
        userFullName: {
            firstName: "harsh",
            lastName: "patidar"
        }
    }
}
console.log(regualarUser.fullname.userFullName.firstName)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3=Object.assign({},obj1,obj2)// {} is generally used, if not used then whole values after 1 variable is going into variable 1 , to avoid this we use {}, as the whole objects values goes into {}
 const obj33={...obj1,...obj2}
console.log(obj33)

const user = [
    {
        id:'1',
        email:"harsh.com"
    },
    {
        id:'1',
        email:"harsh.com"
    },{
        id:'1',
        email:"harsh.com"
    },{
        id:'1',
        email:"harsh.com"
    },
]
user[1].email;

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIN'))

const course = {
    coursename:"js",
    price:999,
    courseInstructor:"harsh"
}
const {courseInstructor: instructor}=course;// even can use without colon 
console.log(instructor);
