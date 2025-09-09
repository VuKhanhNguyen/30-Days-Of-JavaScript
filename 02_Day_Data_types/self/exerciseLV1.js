//1
let challenge = '30 Days Of JavaScript'
//2
console.log(challenge)
//3
console.log(challenge.length)
//4
console.log(challenge.toUpperCase())
//5
console.log(challenge.toUpperCase())
//6
console.log(challenge.substr(0,2))
console.log(challenge.substring(0,2))
//7
let challenge2 = 'Days Of JavaScript from 30 Days Of JavaScript'
let split_str = challenge2.split(' ')
console.log(split_str)
//8
let challenge3 = split_str.includes('Script')
console.log(challenge3)
//9
console.log(challenge.split(''))
//10
console.log(challenge.split(' '))
//11
let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(company.split(', '))
//12
console.log(challenge.replace('JavaScript', 'Python'))
//13
console.log(challenge.charAt(15))
//14
console.log(challenge.charCodeAt('J'))
//15
console.log(challenge.indexOf('a'))
//16
console.log(challenge.lastIndexOf('a'))
//17
let challenge4 = 'You cannot end a sentence with because because because is a conjunction'
console.log(challenge4.indexOf('because'))
//18
console.log(challenge4.lastIndexOf('because'))
//19
console.log(challenge4.search('because'))
//20
let challenge5 = ' 30 Days Of JavaScript '
console.log(challenge4.trim())
//21
console.log(challenge.startsWith('3'))
//22
console.log(challenge.endsWith('t'))
//23
console.log(challenge.match(/a/gi))
//24
let str1 = '30 Days of', str2 = 'JavaScript'
console.log(str1.concat(' ', str2))
//25
console.log(challenge.repeat(10))