const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
//1
const fetchData = async () => {
    try {
        const response = await fetch(catsAPI)
        const data = await response.json()
        const avgCatWeight = data.reduce((acc, cat) => { // acc là accumulator(nghĩa là tổng), cat là currentValue (nghĩa là phần tử hiện tại)
            const weightRange = cat.weight.metric.split(' - ')
            const avgWeight = (parseInt(weightRange[0]) + parseInt(weightRange[1])) / 2
            return acc + avgWeight // trả về tổng cộng dồn của các average weight
        }, 0) / data.length // số 0 là giá trị khởi tạo của acc
        return avgCatWeight
    } catch (error) {
        console.error(error)
    }
}
async function main() {
    const result = await fetchData();
    console.log(result);
}
main();
//2
const fetchCountries = async () => {
    try {
        const response = await fetch(countriesAPI)
        const data = await response.json()
        const largestCountries = data
            .sort((a, b) => b.area - a.area)
            .slice(0, 10)
        return largestCountries
    } catch (error) {
        console.error(error)
    }
}
async function main2() {
    const result = await fetchCountries();
    console.log(result);
}
main2();
//3 Read the countries api and count total number of languages in the world used as officials.
const fetchLanguages = async () => {
    try {
        const response = await fetch(countriesAPI)
        const data = await response.json()
        const languages = data.flatMap(country => country.languages.map(lang => lang.name))
        const uniqueLanguages = [...new Set(languages)]
        return uniqueLanguages.length
    } catch (error) {
        console.error(error)
    }
}
async function main3() {
    const result = await fetchLanguages();
    console.log(result);
}
main3();