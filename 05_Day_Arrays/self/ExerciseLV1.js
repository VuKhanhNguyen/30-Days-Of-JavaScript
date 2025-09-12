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

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
//1
let emptyArr = []
//2
let arr = [1, 2, 3, 4, 5, 6]
//3
console.log(emptyArr.length)
console.log(arr.length)
//4
let firstItem = arr[0]
// let midItem = [arr[arr.length / 2 -1], arr[arr.length / 2]]    
let midItem = arr[arr.length / 2]
let lastItem = arr[arr.length - 1]
console.log(firstItem, midItem, lastItem)
//5
let mixedDataTypes = [1, 'nine', true, null, undefined, { name: 'Khanh' }, [1, 2, 3]]
console.log(mixedDataTypes.length)
//6
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
//7
console.log(itCompanies)
//8
console.log(itCompanies.length)
//9
let firstCompany = itCompanies[0]
let middleCompany = itCompanies[Math.floor(itCompanies.length / 2)]
let lastCompany = itCompanies[itCompanies.length - 1]
console.log(firstCompany, middleCompany, lastCompany)
//10
for (let i = 0 ; i < itCompanies.length; i++) {
    console.log(itCompanies[i]) 
}
//11
for (let i1 = 0 ; i1 < itCompanies.length; i1++) {
    console.log(itCompanies[i1].toUpperCase())
}
//12    
let joinArr = itCompanies.join(', ')
console.log(`${joinArr} are big IT companies`)
//13
let checkCompany = prompt('Enter a company name: ') 
if(itCompanies.includes(checkCompany)){
    console.log(checkCompany)
} else {
    console.log('Not found')
}
//14
let filterArr = []
for (let i2 = 0 ; i2 < itCompanies.length; i2++){
    if(itCompanies[i2].includes('o')){
        filterArr.push(itCompanies[i2])
    }
}
console.log(filterArr)
//15
let sortArr = itCompanies.sort()
console.log(sortArr)
//16
let reverseArr = itCompanies.reverse()
console.log(reverseArr)
//17
let sliceArr = itCompanies.slice(0,3)
console.log(sliceArr)
//18
let sliceArr1 = itCompanies.slice(itCompanies.length - 3, itCompanies.length)
console.log(sliceArr1)
//19
let sliceArr2 = itCompanies.slice(Math.floor(itCompanies.length/2), Math.floor(itCompanies.length/2) + 1)
console.log(sliceArr2)
//20
let spliceArr = itCompanies.splice(0,1)
console.log(itCompanies)
//21
let spliceArr1 = itCompanies.splice(Math.floor(itCompanies.length/2),1)
console.log(itCompanies)
//22
let spliceArr2 = itCompanies.splice(itCompanies.length -1,1)
console.log(itCompanies)
//23
let spliceArr3 = itCompanies.splice(0,itCompanies.length)
console.log(itCompanies)
