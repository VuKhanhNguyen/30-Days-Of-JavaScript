const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
//1
let emptySet = new Set()
//2
let loopSet = new Set()
for(let i = 0; i<=10;i++){
    loopSet.add(i)
}
console.log(loopSet)
//3
let del = loopSet.delete(2)
console.log(loopSet)
//4
let clear = loopSet.clear()
console.log(loopSet)
//5
let arr = ['a', 'b', 'c', 'd', 'b', 'e']
let stringSet = new Set()
for (const array of arr) {
    stringSet.add(array)
}
console.log(stringSet)
//6
let MapCountry = new Map()
for (const country of countries) {
    MapCountry.set(country,country.length)
}
console.log(MapCountry)