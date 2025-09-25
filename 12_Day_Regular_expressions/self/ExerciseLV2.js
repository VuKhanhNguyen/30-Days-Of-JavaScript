//1
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
function mostFrequentWords(paragraph){
    let regExSpace = /\W+/g
    let splitWord = paragraph.split(regExSpace)
    let obj = {}
    for (const word of splitWord){
            obj[word] = (obj[word] || 0) + 1
    }        
    const sorted = Object.entries(obj).sort((a,b) => b[1] - a[1]).map(item => ({[item[0]]: item[1]}))
    return sorted
}
console.log(mostFrequentWords(paragraph))
//2
function tenMostFrequentWords(paragraph,n){
    let regExSpace = /\W+/g
    let splitWord = paragraph.split(regExSpace)
    let obj = {}
    for (const word of splitWord){
            obj[word] = (obj[word] || 0) + 1
    }        
    const sorted = Object.entries(obj).sort((a,b) => b[1] - a[1]).map(item => ({[item[0]]: item[1]}))
    return sorted.slice(0, n)
}
console.log(tenMostFrequentWords(paragraph,10))
