//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let sortAge = ages.sort()
console.log(sortAge)
let minAge = ages[0]
let maxAge = ages[ages.length - 1]
console.log(`Min age is ${minAge} and Max age is ${maxAge}`)
let medianAge = 0
if(ages.length % 2 === 0){
    medianAge = ((ages[ages.length/2 -1]) + (ages[ages.length/2])) / 2
}else{
    medianAge = ages[ages.length/2]
}
console.log(`Median age is ${medianAge}`)
let sum = 0
for(let i=0;i<ages.length;i++){
    sum += ages[i]
}
let avgAge = sum/ages.length
console.log(`Average age is ${avgAge}`)
let ageRange = maxAge - minAge
console.log(`Age range is ${ageRange}`)

let minDiff = Math.floor(Math.abs(minAge - avgAge))
let maxDiff = Math.floor(Math.abs(maxAge - avgAge))

    console.log(`Min age ${minAge} is closer to average age ${avgAge} with diff ${minDiff}`)

    console.log(`Max age ${maxAge} is closer to average age ${avgAge} with diff ${maxDiff}`)

//2
import {countries} from './countries.js'
let firstTenCountries = countries.slice(0,10)
console.log(firstTenCountries)
//3
let middleCountry = []
if(firstTenCountries.length % 2 === 0){
    let sliceMidCountry = firstTenCountries.slice(firstTenCountries.length/2 -1, firstTenCountries.length/2 +1)
    middleCountry.push(...sliceMidCountry)
}else{
    middleCountry.push(firstTenCountries[firstTenCountries.length/2])
}
console.log(middleCountry)
//4
if(firstTenCountries.length % 2 === 0){
    let firstArr = firstTenCountries.slice(0, firstTenCountries.length/2)
    let secondArr = firstTenCountries.slice(firstTenCountries.length/2, firstTenCountries.length)
    console.log(firstArr)
    console.log(secondArr)
}
else{
    let firstArr2 = firstTenCountries.slice(0, Math.floor(firstTenCountries.length/2))
    let secondArr2 = firstTenCountries.slice(Math.floor(firstTenCountries.length/2) +1, firstTenCountries.length)

    console.log(firstArr2)
    console.log(secondArr2)
}
