//1
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')
//2
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')
//3
let num1 = '10'
console.log(typeof num1)
let numInt = parseInt(num1)
console.log(numInt)
//4
let num2 = '9.8'
let numFloat = parseFloat(num2)
console.log(num2)
console.log(numFloat == 10)
let roundNum = Math.round(numFloat)
console.log(roundNum)
//5
let word = 'python'
let word2 = 'jargon'
let foundWord = word.includes('on')
console.log(foundWord)
let foundWord2 = word2.includes('on')
console.log(foundWord2)
//6
let sentence = 'I hope this course is not full of jargon.'
let foundWord3 = sentence.includes('jargon')
//7
let randNum = Math.floor(Math.random()*101)
console.log(randNum)
//8
let randNum2 = Math.floor(Math.random()*(100-50+1)+50)
console.log(randNum2)
//9
let randNum3 = Math.floor(Math.random()*256)
console.log(randNum3)
//10
let language = 'JavaScript'
let randCharacter = Math.floor(Math.random()*language.length)
let char = language.charAt(randCharacter)
console.log(char)
//11
console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125')
//12
let str = 'You cannot end a sentence with because because because is a conjunction.'
let indexOfsubSTR = str.indexOf('because')
let subSTR = str.substr(indexOfsubSTR,23)
console.log(subSTR)
//or
let matchSTR = str.match(/because/gi)
console.log(matchSTR.join(' '))