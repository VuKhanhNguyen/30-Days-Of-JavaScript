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

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//1
let randomString = ''
let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
for (let i_i = 0; i_i <= Math.floor(Math.random()*characters.length); i_i++) {
    randomString += characters.charAt(Math.floor(Math.random()*characters.length));
}
console.log(randomString);
//2
let randomString2 = '#'
let characters2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
for(let i_ii = 0; i_ii < 6; i_ii++){
    randomString2 += characters2.charAt(Math.floor(Math.random()*characters2.length));
}
console.log(randomString2);
//3
let rgbRand = 'rgb('
for(let i_iii = 0; i_iii < 3; i_iii++){
    rgbRand += Math.floor(Math.random()*256)
    if(i_iii<2){
        rgbRand += ','
    }
}
rgbRand += ')'
console.log(rgbRand);
//4
let uppercaseArray = []
for (let i_iv = 0; i_iv < countries.length; i_iv++) {
    uppercaseArray.push(countries[i_iv].toUpperCase())
}
console.log(uppercaseArray);
//5
let countryLength = []
for (let i_v = 0; i_v < countries.length; i_v++) {
    countryLength.push(countries[i_v].length)
}
console.log(countryLength);
//6
let countriesArray = []
for (const i_vi of countries) {
    let countriesArrayChild = []
    countriesArrayChild.push(i_vi,i_vi.substring(0,3).toUpperCase(), i_vi.length)
    countriesArray.push(countriesArrayChild)
}
console.log(...countriesArray);
console.log(JSON.stringify(countriesArray));
//7
let foundLand = []
for (const i_vii of countries) {
    if(i_vii.includes('land')){
        foundLand.push(i_vii);
    }
}
if(foundLand.length===0){
    console.log('All these countries are without land');
}
console.log(foundLand);
//8
let EndWord = []
for (const i_viii of countries) {
    if(i_viii.endsWith('ia')){
        EndWord.push(i_viii);
    }
}
if(EndWord.length===0){
    console.log('These are countries ends without ia');
}
console.log(EndWord);
//9
let maxLength = countries[0].length
for(let i_ix = 1; i_ix < countries.length; i_ix++){
    if(countries[i_ix].length > maxLength){
        maxLength = countries[i_ix].length
        console.log(countries[i_ix]);
    } 
}
//10
let fiveChar = []
let i_x = 0
while (i_x < countries.length) {
    if(countries[i_x].length === 5){
        fiveChar.push(countries[i_x])
    }
    i_x++
}
console.log(fiveChar);
//11
let longestWebTech = webTechs[0].length
for(let i_xi = 1; i_xi < webTechs.length; i_xi++){
    if(webTechs.length>longestWebTech){
        longestWebTech = webTechs[i_xi].length
        console.log(webTechs[i_xi]);
    }
}
//12
let webTechsArr = []
for(const i_xii of webTechs){
    let webTechsArrChild = []
    webTechsArrChild.push(i_xii,i_xii.length)
    webTechsArr.push(webTechsArrChild)
}
console.log(...webTechsArr);
console.log(JSON.stringify(webTechsArr));
//13
let mernWord = ''
for (const i_xiii of mernStack){
    mernWord += i_xiii.charAt(0)
}
console.log(mernWord);
//14
for (const i_xiv of webTechs) {
    console.log(i_xiv);
}
//15
let foodArr = ['banana', 'orange', 'mango', 'lemon']
console.log(foodArr.reverse());
//16
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
for (const i_xvi of fullStack) {
    for (const i_xvi_2 of i_xvi) {
        console.log(i_xvi_2.toUpperCase());
    }
}

