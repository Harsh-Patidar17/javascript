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
const obj3=Object.assign({},obj1,obj2)
console.log(obj3)