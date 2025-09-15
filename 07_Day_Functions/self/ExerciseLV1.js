
//1
function fullName(){
    let firstName = 'Vũ Khanh'
    let lastName = 'Nguyễn'
    let fullNamee = firstName.concat(' ', lastName)
    return fullNamee
}
console.log(fullName())
//2
function fullName2 (firstName, lastName){
    return firstName.concat(' ', lastName)
}
console.log(fullName2('Vũ Khanh', 'Nguyễn'))
//3
function addNumbers (num1, num2){
    return num1 + num2
}
console.log(addNumbers(5, 10))
//4
const areaOfRectangle = (length, width) => length * width
console.log(areaOfRectangle(5, 10))
//5
function perimeterOfRectangle (length, width){
    let perimeter = 2 * (length + width)
    return perimeter
}
console.log(perimeterOfRectangle(5, 10))
//6
const volumeOfRectPrism = (length, width, height) => length * width * height
console.log(volumeOfRectPrism(5, 10, 15))
//7
let pi = 3.14
let areaOfCircle = (function(r){
    return pi * r * r
}) (5)
console.log(areaOfCircle)
//8
let circumOfCircle = (function(r){
    return 2 * pi * r
}) (5)
console.log(circumOfCircle)
//9
function density (mass, volume){
    return mass / volume
}
console.log(density(10, 2))
//10
function speed (distance, time){
    return distance / time
}
console.log(speed(100, 2))
//11
function weight (mass, gravity){
    return mass * gravity
}
console.log(weight(10, 9.81))
//12
function convertCelsiusToFahrenheit (celsius){
    return (celsius * 9/5) + 32
}
//13
function bmi (weight, height){
    let bmiValue = Number(weight / (height * height)).toFixed(1)
    if(bmiValue<18.5){
        return `Your BMI is ${bmiValue}, you are underweight`
    }
    else if(bmiValue>=18.5 && bmiValue<24.9){
        return `Your BMI is ${bmiValue}, you are normal weight`
    }
    else if(bmiValue>=25 && bmiValue<29.9){
        return `Your BMI is ${bmiValue}, you are overweight`
    }
    else{
        return `Your BMI is ${bmiValue}, you are obese`
    }
}
console.log(bmi(70, 1.75))
//14
function checkSeason (month){
    switch(month){
        case 'September':
        case 'October':
        case 'November':
            console.log( 'The season is Autumn')
            break
        case 'December':
        case 'January':
        case 'February':
            console.log( 'The season is Winter')
            break
        case 'March':
        case 'April':
        case 'May':
            console.log( 'The season is Spring')
            break
        case 'June':
        case 'July':
        case 'August':
            console.log( 'The season is Summer')
            break
        default: 
            console.log('Invalid month')
    }
}
let season = prompt("Enter month: ")
checkSeason(season)
//15
function findMax (num1, num2, num3){
    let max = num1
    if(num2>max){
        max = num2
    }
    if(num3>max){
        max = num3
    }
    return max
}
console.log(findMax(0, -10, -2))
console.log(findMax(0, 10, 5))

