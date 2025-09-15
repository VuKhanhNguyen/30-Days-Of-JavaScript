//1
function userIdGenerator (n){
    let userId = ''
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < n; i++) {
        userId += characters.charAt(Math.floor(Math.random()*characters.length));
    }
    return userId
}

function userIdGeneratorByUser(){
    let numChar = prompt('Enter number of characters: ')
    let numId = prompt('Enter number of IDs: ')
    for(let i = 0; i < numId; i++){
        console.log(userIdGenerator(numChar))
    }
}
userIdGeneratorByUser()
//2
function rgbColorGenerator (){
    let rgbRand = 'rgb('
    for(let i = 0; i < 3; i++){
        rgbRand += Math.floor(Math.random()*256)
        if(i<2){
            rgbRand += ','
        }
    }
    rgbRand += ')'
    console.log(rgbRand)
}
rgbColorGenerator()
//3
function arrayOfHexaColors (n){
    let hexaColors = []
    let sharp = '#'
    let hexDigits = '0123456789ABCDEF'
    for(let i = 0; i < n; i++){
        for(let j = 0; j < 6; j++){
            sharp += hexDigits.charAt(Math.floor(Math.random()*hexDigits.length))
        }
        hexaColors.push(sharp)
        sharp = '#'
    }
    return hexaColors
}
console.log(arrayOfHexaColors(3))
//4
function arrayOfRgbColors (n){
    let rgbColors = []
    // let rgbRand = 'rgb('
    for(let i = 0; i < n; i++){
        rgbRand = 'rgb('
        for(let j = 0; j < 3; j++){
            rgbRand += Math.floor(Math.random()*256)
            if(j<2){
                rgbRand += ','
            }
        }
        rgbRand += ')'
        rgbColors.push(rgbRand)
    }
    return rgbColors
}
console.log(arrayOfRgbColors(3))
//5
function convertHexaToRgb (hexa){
    let r = parseInt(hexa.substring(1,3),16) // 16 là hệ thập lục phân (0-9, A-F), thêm 16 là để chuyển từ chuỗi sang số
    let g = parseInt(hexa.substring(3,5),16)
    let b = parseInt(hexa.substring(5,7),16)
    return `rgb(${r},${g},${b})`
}
console.log(convertHexaToRgb('#FF5733'))
console.log(convertHexaToRgb(arrayOfHexaColors(1)[0]))
//6
function convertRgbToHexa (rgb){
    let arr = rgb.substring(4,rgb.length-1).split(',')
    let r = parseInt(arr[0])
    let g = parseInt(arr[1])
    let b = parseInt(arr[2])
    let hexa = '#'
    hexa += ('0'+r.toString(16)).slice(-2).toUpperCase()
    hexa += ('0'+g.toString(16)).slice(-2).toUpperCase()
    hexa += ('0'+b.toString(16)).slice(-2).toUpperCase()
    return hexa
}
console.log(convertRgbToHexa('rgb(255,87,51)'))
console.log(convertRgbToHexa(arrayOfRgbColors(1)[0]))
//7
function generateColors (type, n){
    if(type === 'hexa'){
        return arrayOfHexaColors(n)
    }
    else if(type === 'rgb'){
        return arrayOfRgbColors(n)
    }
}
console.log(generateColors('hexa',3))
console.log(generateColors('rgb',3))
//8
function shuffleArray (arr){
    let shuffled = []
    while(arr.length > 0){
        let index = Math.floor(Math.random()*arr.length)
        shuffled.push(arr[index])
        arr.splice(index, 1)
    }
    return shuffled
}
console.log(shuffleArray([1, 2, 3, 4, 5]))
//9
function factorial (n){
    if(n<0){
        return 'Not defined'
    }
    if(n===0 || n===1){
        return 1
    }
    return n * factorial(n-1)
}
console.log(factorial(5))
//10
function isEmpty (param){
    if(param === undefined || param === null){
        return true
    }
    return false
}
console.log(isEmpty())
//11
function sum (...args){
    let sum = 0
    for(const s of args){
        sum += s
    }
    return sum
}
console.log(sum(1,2,3,4,5))
//12
function sumOfArrayItems (arr){
    let sum = 0
    for(const s of arr){
        if(typeof s !== 'number'){
            return 'All items in the array must be numbers'
        }
        sum += s
    }
    return sum
}
console.log(sumOfArrayItems([1,2,3,4,5,6]))
//13
function average (arr){
    let sum = 0
    for(const s of arr){
        if(typeof s!=='number'){
            return 'All items in the array must be numbers'
        }
        sum += s
    }
    return sum/arr.length
}
console.log(average([1,2,3,4,5]))
//14
function modifyArray (arr){
    for(const i of arr){
        if(arr.length < 5){
            return 'Item not found'
        }
        else{
            arr[4] = arr[4].toUpperCase()
            return arr
        }
    }
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']))
console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango']))
//15
function isPrime (n){
    let isprime = false
    if(n<=1){
        return isprime = false
    }
    if(n===2){
        return isprime = true
    }
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            return isprime = false
        }
    }
    return isprime = true
}
console.log(isPrime(11))
console.log(isPrime(9))
//16
function uniqueItems (arr){
    let uniqueArr = []
    for(const i of arr){
        if(!uniqueArr.includes(i)){
            uniqueArr.push(i)
        }
    }
      return uniqueArr  
}
console.log(uniqueItems([1,2,3,3,4,5,5,6]))    
//17
function sameItems (arr){
    let first = arr[0]
    for(const i of arr){
        if(i !== first){
            return false
        }
    }
    return true
}
console.log(sameItems([1,1,1,1,1]))
//18
function isValidVariable (varName){
    let valid = true
    let firstChar = varName.charAt(0)
    if(!((firstChar >= 'a' && firstChar <= 'z') || (firstChar >= 'A' && firstChar <= 'Z') || firstChar === '_' || firstChar === '$')){
        valid = false
    }
    
}
console.log(isValidVariable('first_name'))
console.log(isValidVariable('first-name'))
console.log(isValidVariable('1first_name'))
console.log(isValidVariable('firstname'))
//19
function sevenRandomNumbers (){
    let randomNums = []
    while(randomNums.length < 7){
        randomNums.push(Math.floor(Math.random()*10))
        randomNums = uniqueItems(randomNums)
    }
    return randomNums
}
console.log(sevenRandomNumbers())
//20
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
  'Kenya'
]
function reverseCountries (arr){
    let reversed = []
    for(const i of arr){
        reversed.push(i)
    }
    return reversed.reverse()
}
console.log(reverseCountries(countries))