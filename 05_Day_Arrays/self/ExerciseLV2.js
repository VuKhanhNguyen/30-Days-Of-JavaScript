//2
let regEx = /[.,]/g
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let delsth = text.replace(regEx, '')
console.log(delsth)
let words = delsth.split(' ')
console.log(words)
console.log(words.length)
//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
for (let i = 0; i<shoppingCart.length;i++){
    if (!shoppingCart.includes('Meat')){
        let addItem = shoppingCart.unshift('Meat')
    }else {
        console.log('Meat is already in the list')
    }
    if (!shoppingCart.includes('Sugar')){
        let addItem = shoppingCart.push('Sugar')
    }else{
        console.log('Sugar is already in the list')
    }
}
let allegy = prompt('Are you allergic to honey?').toLowerCase()
if (allegy === 'yes'){
    let removeItem = shoppingCart.splice(shoppingCart.indexOf('Honey'),1)
}else {
    console.log('You are not allergic to honey')
}
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
console.log(shoppingCart)
//4
import {
    countries
} from './countries.js'
if (countries.includes('Ethiopia')){
    console.log('ETHIOPIA')
}else{
    shoppingCart.push('Ethiopia')
}
//5
import {
    webTechs
} from './web_tech.js'
if (webTechs.includes('Sass')){
    console.log('Sass is a CSS preprocess')
}else{
    webTechs.push('Sass')
}
//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack.sort())