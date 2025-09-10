//1
let b1 = prompt('Enter base: ', 0)
let h1 = prompt('Enter height: ', 0)
let area = 0.5 * b1 * h1
console.log(`The area of the triangle is ${area}`)
//2
let a = prompt('Enter side a: ', 0)
let b = prompt('Enter side b: ', 0)
let c = prompt('Enter side c: ', 0)
let perimeter = a + b + c
console.log(`The perimeter of the triangle is ${perimeter}`)
//3
let l = prompt('Enter length: ', 0)
let w = prompt('Enter width: ', 0)
let areaR = l * w
let perimeterR = 2 * (l + w)
console.log(`The rectangle has area of ${areaR} and perimeter of ${perimeterR}`)
//4
let pi = 3.14
let r = prompt('Enter radius: ', 0)
let areaC = pi * Math.pow(r,2)
let circum = 2 * pi * r
console.log(`The circle has area of ${areaC} and circumference of ${circum}`)
//5 y = 2x-2
let aa = 2, bb = -2
let y1 = 0
let x1 = (-bb)/aa
let x2 = 0
let y2 = bb
console.log(`x intercept is ${x1}, y intercept is ${y2}, slope is ${aa}`)
//6
let x11 = 2, x22 = 6, y11 = 2, y22 = 10
let m = (y22-y11)/(x22-x11)
console.log(`slope is ${m}`)
//7
aa == m ? console.log(true) : console.log(false)
//8 y = x2 + 6x + 9
let delta = Math(6,2) - 4*1*9
let xval1 = (-6 + Math.sqrt(delta)) / 2
let xval2 = (-6 - Math.sqrt(delta)) / 2
console.log(`x intercept is ${xval1} and ${xval2}`)
//9
let hours = prompt('Enter hours: ', 0)
let rate = prompt('Enter rate per hour: ', 0)
let weeklyEarning = hours * rate
console.log(`Enter hours: ${hours}`)
console.log(`Enter rate per hour: ${rate}`)
console.log(`Your weekly earning is ${weeklyEarning}`)
//10
let myName = 'Nguyễn Vũ Khanh'
myName.length > 7 ? console.log('Your name is long') : console.log('Your name is short')
//11
let myFirstName = 'Vũ Khanh'
let myMotherFirstName = 'Kim Cúc'
myFirstName.length > myMotherFirstName.length ? console.log(`Your firstname, ${myFirstName} is longer than your mother's first name, ${myMotherFirstName}`) : console.log(`Your first name, ${myFirstName} is shorter than your mother's first name, ${myMotherFirstName}`)
//12
let myAge = 21
let yourAge = 48
myAge > yourAge ? console.log(`I am ${myAge - yourAge} years older than you.`) : console.log(`You are ${yourAge - myAge} years older than me.`)
//13
let enterYearBorn = prompt('Enter year you were born: ', 0)
let nowYear = new Date().getFullYear()
console.log(`Enter year you were born: ${enterYearBorn}`)
nowYear - enterYearBorn >=18 ? console.log(`You are ${nowYear - enterYearBorn}. You are old enough to drive`) : console.log(`You are ${nowYear - enterYearBorn}. You will be allowed to drive after ${18 - (nowYear - enterYearBorn)} years.`)
//14
let yearLives = prompt('Enter number of years you live: ', 0)
console.log(`You lived ${yearLives * 31536000} seconds.`)
//15
let now1 = new Date()
let yyyy = now1.getFullYear()
let mm = String(now1.getMonth()+1).padStart(2,'0')
let dd = String(now1.getDate()).padStart(2, '0');
let hh = String(now1.getHours()).padStart(2, '0');
let min = String(now1.getMinutes()).padStart(2, '0');
console.log(`${yyyy}-${mm}-${dd} ${hh}:${min}`)
console.log(`${dd}-${mm}-${yyyy} ${hh}:${min}`)
console.log(`${dd}/${mm}/${yyyy} ${hh}:${min}`)


