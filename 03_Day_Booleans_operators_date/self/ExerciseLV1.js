//1
let fistName = 'Vũ Khanh'
let lastName = 'Nguyễn'
let country = 'Việt Nam'
let city = 'Đà Nẵng'
let age = 21
let isMarried = false
let year = 2025
console.log(typeof fistName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year)
//2
let num1 = '10'
typeof num1 === typeof 10 ? console.log(true) : console.log(false)
//3
let num2 = parseInt('9.8')
num2 == 10 ? console.log(true) : console.log(false)
//4
console.log(Boolean(4 > 3))
console.log(Boolean(4 != 3))
console.log(Boolean(4 >= 3))
console.log(Boolean(4 < 3))
console.log(Boolean(4 <= 3))
console.log(Boolean('4' === 4))
console.log("============================")
//5
console.log(4>3)//true
console.log(4>=3)//true
console.log(4<3)//false
console.log(4<=3)//false
console.log(4==4)//true
console.log(4===4)//true
console.log(4!=4)//false
console.log(4!==4)//false
console.log(4!= '4')//false
console.log(4=='4')//true ('4' bị ép kiểu thành 4)
console.log(4==='4')//false (so sánh cả kiểu dữ liệu)
console.log('python'.length != 'jargon'.length)//false
console.log("============================")
//6
console.log(4>3 && 10<12)//true
console.log(4>3 && 10>12)//false
console.log(4>3 || 10<12)//true
console.log(4>3 || 10>12)//true
console.log(!(4>3))//false
console.log(!(4<3))//true
console.log(!(false))//true
console.log(!(4>3 && 10<12))//false
console.log(!(4>3 && 10>12))//true
console.log(!(4===4))//false
let sth = 'on'
console.log(!'dragon'.includes(sth) && !'python'.includes(sth))//true
console.log("============================")
//7
let now = new Date()
let y = now.getFullYear()
let m = now.getMonth()+1
let d = now.getDate()
console.log(d+'/'+m+'/'+y)
let dy = now.getDay()+1
console.log(`day:${dy}`)
let h = now.getHours()
let min = now.getMinutes()
console.log(`${h}:${min}`)
let s = now.getTime()
let snd = Math.floor(s/1000) 
console.log(snd)
