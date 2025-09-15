//1
//ax + by + c = 0
const LinearEquation = (function(a,b,c,x,y){
    if(x === 'x'){
        if(a===0){
            return 'No solution, a cannot be 0'
        }
        return `x = ${(-b*y-c)/a}`
    }else if(x === 'y'){
        if(b===0){
            return 'No solution, b cannot be 0'
        }
        return `y = ${(-a*x-c)/b}`
    }else{
        return 'Invalid input'
    }
}) (2,3,6,'x',4)
console.log(LinearEquation)
//2
const solveQuadratic = (function(a2,b2,c2){
    if(a2===0){
        if(b2===0){
            if(c2===0){
                return 'Infinite solutions'
            }else{
                return 'No solution'
            }
        }else{
            return `x = ${-c2/b2}`
        }
    }
    else{
        let d = b2*b2 - 4*a2*c2
        if(d>0){
            let x1 = (-b2 + Math.sqrt(d)) / (2*a2)
            let x2 = (-b2 - Math.sqrt(d)) / (2*a2)
            return `x1 = ${x1}, x2 = ${x2}`
        }else if(d===0){
            let x = -b2 / (2*a2)
            return `x = ${x}`
        }else{
            return 'No solution'
        }
    }
})(1,-3,2)
console.log(solveQuadratic)
//3
const printArray = (function(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i])
    }
})(['Nguyễn', 'Vũ', 'Khanh'])
//4
const showDateTime = (function(){
    let now = new Date()
    let day = String(now.getDate()).padStart(2, '0')
    let month = String(now.getMonth()+1).padStart(2,'0')
    let year = now.getFullYear()
    let hour = String(now.getHours()).padStart(2,'0')
    let minute = String(now.getMinutes()).padStart(2,'0')
    return `${day}/${month}/${year} ${hour}:${minute}`
})
console.log(showDateTime())
//5
function swapValues (x, y){
    let temp = x
    x = y
    y = temp
    console.log(`x = ${x}, y = ${y}`)
}
swapValues(3, 4)
//6
function reverseArray (arr){
    let reversed = []
    for (let i = arr.length - 1; i >= 0; i--){
        reversed.push(arr[i])
    }
    return reversed
}
console.log(reverseArray([1, 2, 3, 4, 5]))
console.log(reverseArray(['A', 'B', 'C']))
//7
function capitalizeArray (arr){
    let capitalArr = []
    for(const item of arr){
        capitalArr.push(item.toUpperCase())
    }
    return capitalArr
}
console.log(capitalizeArray(['nguyễn', 'vũ', 'khanh']))
//8
function addItem (arr, item){
    arr.push(item)
    return arr
}
console.log(addItem([1, 2, 3], 4))
//9
function removeItem (arr, index){
    if(index < 0 || index >= arr.length){
        return 'Index out of range'
    }
    arr.splice(index, 1)
    return arr
}
console.log(removeItem([1, 2, 3, 4, 5], 2))
//10
function sumOfNumbers (n){
    let sum = 0
    for(let s = 0; s <= n; s++)
        sum += s
    return sum
}
console.log(sumOfNumbers(5))
//11
function sumOfOdds (n){
    let sum = 0
    for(let s = 0; s <= n; s++){
        if(s % 2 !== 0) 
            sum += s
    }
    return sum
}
console.log(sumOfOdds(5))
//12
function sumOfEvens (n){
    let sum = 0
    for(let s=0; s <= n; s++){
        if(s % 2 == 0){
            sum += s
        }
    }
    return sum
}
console.log(sumOfEvens(5))
//13
function evensAndOdds (n){
    let sumEvens = 0
    let sumOdds = 0
    for(let s=0; s <= n; s++){
        if(s % 2 == 0){
            sumEvens += 1
        }else{
            sumOdds += 1
        }
    }
    return { sumEvens, sumOdds }
}
console.log(evensAndOdds(100))
//14
function sumOfArgs (...args){
    let sum = 0
    for (s of args){
        sum += s
    }
    return sum
}
console.log(sumOfArgs(1, 2, 3, 4, 5, 6))
//15
const randomUserIp = () => {
    return `${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}`
}
console.log(randomUserIp())
//16
const randomMacAddress = (function(){
    let macAddr = []
    let hexDigits = '0123456789ABCDEF'
    for(let i = 0 ; i < 6 ; i++){
        let block = ''
        for(let j = 0 ; j < 2; j++){
            block += hexDigits.charAt(Math.floor(Math.random()*16))
        }
        macAddr.push(block)
    }
    return macAddr.join(':')
})
console.log(randomMacAddress())
//17
const randomHexaNumberGenerator = (function(){
    let hexaNum = '#'
    let hexDigits = '0123456789ABCDEF'
    for(let i = 0 ; i < 6 ; i++){
        hexaNum += hexDigits.charAt(Math.floor(Math.random()*hexDigits.length))
    }
    return hexaNum
})
console.log(randomHexaNumberGenerator())
//18
function userIdGenerator (){
    let userId = ''
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < 7; i++) {
        userId += characters.charAt(Math.floor(Math.random()*characters.length));
    }
    return userId
}
console.log(userIdGenerator())