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
const ProductHasPrice = products.filter(product => product.price > 0).reduce((acc, cur)=> acc + cur.price,0)
console.log(ProductHasPrice)
//2
const sumOfProduct = products.reduce(function(acc, cur){
    if(typeof cur.price === 'number' && cur.price > 0){
        acc += cur.price
    }
    return acc
}, 0)
console.log(sumOfProduct)
//3
import {countries as countriesData} from '../data/countries_data.js'
function categorizeCountries(arr) {
    const categories = countriesData.filter(country => country['name'].includes('land') || country['name'].includes('ia') || country['name'].includes('island') || country['name'].includes('stan'));
    return categories
}
console.log(categorizeCountries(countriesData));
//4
function letterAndNumberOfCountries(arr){
   const counts = {}
   for (const country of arr) {
        const firstLetter = country.name.charAt(0).toUpperCase(); // lấy chữ cái đầu
        counts[firstLetter] = (counts[firstLetter] || 0) + 1; // nếu chưa có thì khởi tạo là 0, nếu có rồi thì cộng thêm 1
    }
    const result = Object.entries(counts).map(([letter, count]) => ({letter, count}))
    return result
}
console.log(letterAndNumberOfCountries(countriesData));
//5
function getFirstTenCountries(arr) {
    const firstTen = arr.slice(0,10).map(country => ({name: country.name, capital: country.capital}))
    return firstTen
}
console.log(getFirstTenCountries(countriesData));
//6
function getLastTenCountries(arr) {
    const lastTen = arr.slice(-10).map(country => ({name: country.name, capital: country.capital}))//-10 là lấy 10 phần tử cuối cùng
    return lastTen
}
console.log(getLastTenCountries(countriesData));
//7
function letterUseManyTimes(countriesData){
    const counts = {}
    for(const country of countriesData){
            const upperLetter = country.name.charAt(0).toUpperCase()
            counts[upperLetter] = (counts[upperLetter] || 0) + 1
        }
    let max = 0
    for(const letter in counts){
        if(counts[letter] > max){
            max = counts[letter]
        }
    }
    const maxLetter = Object.keys(counts).find(letter => counts[letter] === max)
    return {maxLetter: maxLetter, maxCount: max}
}
console.log(letterUseManyTimes(countriesData));