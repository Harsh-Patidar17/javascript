const mySym=Symbol("key1")
const Juser={
    name: "harsh",
    age: 20,
    location: "nagpur",
    email:"harsh@google.com",
    "dayum":"damn",
    isLoggedIN:false,
    lastLoginDays:["monday","sunday"],
    [mySym]:"mykey1"// to refer symbol we have to use this 
}
console.log(Juser.email);
console.log(Juser["dayum"]);
console.log(Juser[mySym]);

Juser.email="damn_patidar"
//Object.freeze(Juser)
Juser.email="okay"
//console.log(Juser)

Juser.greeting=function(){
    console.log("gand marao")// we can see undefined in terminal , the reason is not known till now will get to know afterwards 
}
console.log(Juser.greeting())