//1
let age = prompt("Enter your age: ",0)
if (age >=18){
    console.log("You are old enough to drive")
}
else{
    console.log(`You are left with ${18-age} years to drive`)
}
//2
let myAge = prompt("Enter my age: ",0)
let yourAge = prompt("Enter your age: ",0)
if(myAge > yourAge){
    console.log(`I am ${myAge-yourAge} years older than you`)
} else if (myAge < yourAge){
    console.log(`You are ${yourAge-myAge} years older than me`)
}else{
    console.log("We are of the same age")
}
//3
let a = prompt("Enter number a: ",0)
let b = prompt("Enter number b: ",0)
if(a > b){
    console.log(`${a} is greater than ${b}`)
}else if(a < b){
    console.log(`${b} is greater than ${a}`)
}else{
    console.log("Both numbers are equal")
}
a>b ? console.log(`${a} is greater than ${b}`) : a<b ? console.log(`${b} is greater than ${a}`) : console.log("Both numbers are equal")
//4
let num = prompt("Enter a number: ",0)
if(num % 2 == 0){
    console.log(`${num} is an even number`)
}else{
    console.log(`${num} is an odd number`)
}
