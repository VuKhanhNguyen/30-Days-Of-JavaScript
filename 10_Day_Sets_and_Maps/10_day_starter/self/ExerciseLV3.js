const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
//1
import {countries as c} from '../data/countries_data.js'
let countryMap = new Map()
for (const country of c) {
    countryMap.set(country.name,country.languages)
}
console.log(countryMap)
let arr = []
for (const [key,value] of countryMap) {
    arr.push(value)
}
console.log(arr)
let flatArr = arr.flat() //flat làm phẳng mảng
console.log(flatArr)
let langSet = new Set(flatArr)
console.log(langSet.size)
//2 using map and set
function mostSpokenLanguages(arr, num){
    let langMap = new Map()
    for (const country of arr) {
        for (const language of country.languages) {
            langMap.set(language, (langMap.get(language) || 0) + 1) //dòng này có nghĩa là nếu langMap đã có language thì lấy value ra cộng 1, nếu chưa có thì lấy 0 cộng 1
        }
    }
    // Sort languages by their frequency
    let sortedLangs = [...langMap.entries()].sort((a, b) => b[1] - a[1])//lấy [1] là value để sắp xếp, nếu lấy [0] là key để sắp xếp thì sẽ sắp xếp theo bảng chữ cái
    // Get the top 'num' languages
    return sortedLangs.slice(0, num).map(([language, count]) => ({ language, count })) // lấy phần tử từ 0 đến num, sau đó map thành object có key là language và count là value
}
console.log(JSON.stringify(mostSpokenLanguages(c, 10)))