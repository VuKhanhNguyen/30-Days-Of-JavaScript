const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
//1
//for each dùng để duyệt qua từng phần tử của mảng và in ra từng phần tử đó, không trả về array mới
//map dùng để duyệt qua từng phần tử của mảng và trả về một array mới
//filter dùng để lọc các phần tử của mảng theo điều kiện và trả về một array mới
//reduce dùng để gộp các phần tử của mảng thành một giá trị duy nhất (tổng, tích,...)
//2
function showCountry(countries){
    console.log(countries)
}
function showName(names){
    console.log(names)
}
function showNumber(numbers){
    console.log(numbers)
}
//3
countries.forEach(showCountry);
//4
names.forEach(showName);
//5
numbers.forEach(showNumber);
//6
const upperCaseCountries = countries.map((country) => country.toUpperCase())
console.log(upperCaseCountries)
//7
const countriesLength = countries.map((country) => country.length)
console.log(countriesLength)
//8
const squareNumbers = numbers.map((number) => Math.pow(number,2))
console.log(squareNumbers)
//9
const upperCaseNames = names.map((name) => name.toUpperCase())
console.log(upperCaseNames)
//10
const productPrices = products.map((product) => product.price)
console.log(productPrices)
//11
const countriesWithLand = countries.filter(country => country.includes('land'))
console.log(countriesWithLand)
//12
const countriesWithSixLetters = countries.filter(country => country.length === 6)
console.log(countriesWithSixLetters)
//13
const contriesWith6orMoreLetters = countries.filter(country => country.length >= 6)
console.log(contriesWith6orMoreLetters) 
//14
const countriesStartWithE = countries.filter(country => country.startsWith('E'))
console.log(countriesStartWithE)
//15
const productsWithPrice = products.filter(product => product.price > 0)
console.log(productsWithPrice)
//16
function getStringLists(arr){
    const stringList = arr.filter(item => typeof item === 'string')
    console.log(stringList)
}
getStringLists(['Asabeneh', 100, true, 'Mathias', 200, 'Elias', 'Brook'])
//17
const sumOfNumbers = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sumOfNumbers)
//18
const concatCountries = countries.reduce((acc, cur) => acc + ', '+ cur)
console.log(concatCountries + ' are north European countries')
//19
//some trả về true nếu có ít nhất một phần tử thỏa mãn điều kiện
//every trả về true nếu tất cả các phần tử thỏa mãn điều kiện
//20
const areSomeNamesLong = names.some(name => name.length > 7)
console.log(areSomeNamesLong)
//21
const areAllNamesLong = names.every(name => name.length > 7)
console.log(areAllNamesLong)
//22
//find trả về phần tử đầu tiên thỏa mãn điều kiện
//findIndex trả về vị trí của phần tử đầu tiên thỏa mãn điều kiện
//23
const firstCountryWith6Letters = countries.find(country => country.length === 6)
console.log(firstCountryWith6Letters)
//24
const firstCountryWith6LettersIndex = countries.findIndex(country => country.length === 6)
console.log(firstCountryWith6LettersIndex)
//25
const norwayIndex = countries.findIndex(country => country === 'Norway')
if(norwayIndex !== -1){
    console.log(norwayIndex)
}
else{
    console.log('Not Found')
}
//26
const russiaIndex = countries.findIndex(country => country === 'Russia')
if(russiaIndex !== -1){
    console.log(russiaIndex)
}
else{
    console.log('Not Found')
}
