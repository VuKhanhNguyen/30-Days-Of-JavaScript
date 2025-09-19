const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
//1
let Aa = new Set(a)
let Bb = new Set(b)
let c = [...Aa,...Bb]
let union = new Set(c)
console.log(union)
//2
let inter = a.filter(num => Bb.has(num))
let intersection = new Set(inter)
console.log(intersection)
//3
let diff = a.filter(num => !Bb.has(num))
let difference = new Set(diff)
console.log(difference)

