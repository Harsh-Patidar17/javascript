const marvel_hero=["thor","Ironman","spiderman"]
const dc_hero=["superman","flash","batman"]

const combined = marvel_hero.concat(dc_hero)// concat return new array 
console.log(combined)

const all_new=[...marvel_hero,...dc_hero]
console.log(all_new);// use spread operator 

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("harsh"))
console.log(Array.from("harsh"))
console.log(Array.from({name:"harsh"}))// interesting(will return an empty array)

let score1=100
let score2=100
let score3=100

console.log(Array.of(score1,score2,score3));

