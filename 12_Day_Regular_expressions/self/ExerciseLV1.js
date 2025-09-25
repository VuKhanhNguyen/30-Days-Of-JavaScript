//1
let text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month'
let regEx = /\d+/g
let matches = text.match(regEx)
let sum = 0
for (const match of matches){
    sum += Number(match)
}
console.log(sum) // 19500
//2
points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
let sortPoints = []
for (const point of points){
    sortPoints.push(Number(point))
}
sortPoints.sort((a,b) => a - b)
console.log(`points: ${sortPoints} \nsortedPoints: ${sortPoints}`)
let distance = sortPoints[sortPoints.length - 1] - sortPoints[0]
console.log(`The distance between the two furthest points is ${distance}`) //12
//3
let regEx2 = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/
function isValidVariable(variable){
    if(regEx2.test(variable)){ //test là method của RegExp trả về bool, exec là method trả về mảng nếu khớp, null nếu không khớp
        return true
    }
    return false
}
console.log(isValidVariable('first_name')) // True
console.log(isValidVariable('first-name')) // False
console.log(isValidVariable('1first_name')) // False
console.log(isValidVariable('firstname')) // True
