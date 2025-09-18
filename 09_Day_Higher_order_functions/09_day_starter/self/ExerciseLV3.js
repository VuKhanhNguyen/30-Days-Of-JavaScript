import {countries as countriesData} from '../data/countries_data.js'
//1
const sortedByName = countriesData.sort((a,b) => {
    if(a.name < b.name) return 1 // return 1 tức là a đứng sau b
    if(a.name > b.name) return -1 // return -1 tức là a đứng trước b
    return 0
})
console.log(sortedByName)
//2
function TopMostSpokenLanguages(arr, n){
    const languageCounts = {}
    for(const country of arr){
        for(const language of country.languages){
            languageCounts[language] = (languageCounts[language] || 0) + 1
        }
    }
    const sortedLanguages = Object.entries(languageCounts).sort((a,b) => b[1] - a[1]).slice(0,n).map(item => ({language: item[0], count: item[1]}))
    return sortedLanguages
}
console.log(TopMostSpokenLanguages(countriesData, 10));
//3
function TopMostPopulatedCountries(arr, n){
    const sortedPopulation = arr.sort((a,b) => b.population - a.population).slice(0,n).map(country => ({name: country.name, population: country.population}))
    return sortedPopulation
}
console.log(TopMostPopulatedCountries(countriesData, 10));
//4
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
let statistics = { 
    count: function countAges(){
        
        return ages.length
    },
    sum: function sumAges(){
        return ages.reduce((acc, cur) => acc + cur, 0)
    },
    min: function minAges(){
        return ages.reduce((min, cur) => cur < min ? cur : min, ages[0])
    },
    max: function maxAges(){
        return ages.reduce((max, cur) => cur > max ? cur : max, ages[0])
    },
    range: function rangeAges(){
        return statistics.max() - statistics.min()
    },
    mean: function meanAges(){
        return statistics.sum() / ages.length
    },
    median: function medianAges(){
        const sortedAges = ages.slice().sort((a,b) => a - b)
        const mid = Math.floor(sortedAges.length / 2)
        return sortedAges.length % 2 === 0 ? (sortedAges[mid - 1] + sortedAges[mid]) / 2 : sortedAges[mid]
    },
    mode: function modeAges(){
        const ageCounts = {}
       ages.forEach(age => {
        ageCounts[age] = (ageCounts[age] || 0) + 1
    })

    const maxCount = Math.max(...Object.values(ageCounts))
    return Object.entries(ageCounts)
                 .filter(([age, count]) => count === maxCount)
                 .map(([age]) => Number(age))
},

    variance: function varianceAges(){
        const mean = statistics.mean()
        return Number(ages.reduce((acc, cur) => acc + Math.pow(cur - mean, 2), 0) / ages.length).toFixed(1)
    },
    standardDeviation: function standardDeviationAges(){// độ lệch chuẩn là căn bậc hai của phương sai
        return Math.sqrt(statistics.variance()).toFixed(1)
    },
    frequencyDistribution: function frequencyDistributionAges(){
    const ageCounts = {}
    ages.forEach(age => {
        ageCounts[age] = (ageCounts[age] || 0) + 1
    })

    return Object.entries(ageCounts).map(([age, count]) => ({
        age: Number(age),
        frequency: (count / ages.length * 100).toFixed(2) + '%'
    }))
}
}

console.log('Count:', statistics.count())
console.log('Sum: ', statistics.sum())
console.log('Min: ', statistics.min())
console.log('Max: ', statistics.max())
console.log('Range: ', statistics.range())
console.log('Mean: ', statistics.mean())
console.log('Median: ',statistics.median())
console.log('Mode: ', statistics.mode())
console.log('Variance: ',statistics.variance())
console.log('Standard Deviation: ', statistics.standardDeviation())
console.log('Frequency Distribution: ',statistics.frequencyDistribution())