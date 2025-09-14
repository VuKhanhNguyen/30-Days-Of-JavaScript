const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
  'Algeria'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//1
let copyCountries = []
let i = 0
do{
    copyCountries.push(countries[i])
    i++
}while(i<countries.length)
console.log(copyCountries)
//2
let copyCountries2 = []
let i2 = 0
while(i2<countries.length){
    copyCountries2.push(countries[i2])
    i2++
}
sortedCountries = copyCountries2.sort()
console.log(sortedCountries)
//3
let sortedWebTechs = webTechs.sort()
console.log(sortedWebTechs)
let sortedMernStack = mernStack.sort()
console.log(sortedMernStack)
//4
let landCountries = []
for (const country of countries){
    if(country.includes('land')){
        landCountries.push(country)
    }
}
if(landCountries.length===0){
    console.log('All these countries are without land')
}
console.log(landCountries)
//5
let highestCharCountry = countries[0].length
for(let i3 = 1; i3 < countries.length; i3++){
    if(countries[i3].length>highestCharCountry){
        highestCharCountry = countries[i3].length
        console.log(countries[i3])
    }
}
//6
let landCountries2 = []
let i4 = 0
while(i4 < countries.length){
    if(countries[i4].includes('land')){
        landCountries2.push(countries[i4])
    }
    i4++
}console.log(landCountries2)
//7
let fourCharCountries = []
for (const fourcountry of countries){
    if(fourcountry.length === 4){
        fourCharCountries.push(fourcountry)
    }
}
if(fourCharCountries.length === 0){
    console.log('There is no country with four characters')
}else{
    console.log(fourCharCountries)
}
//8
let twoOrMoreCountries = []
for(const morecountry of countries){
    if(morecountry.length >= 2){
        twoOrMoreCountries.push(morecountry)
    }
}
if(twoOrMoreCountries.length === 0){
    console.log('There is no country with two or more characters')
}else{
    console.log(twoOrMoreCountries)
}
//9
let reverseCountries = []
for(hehe of countries){
    reverseCountries.push(hehe.toUpperCase())

}
console.log(reverseCountries.reverse())