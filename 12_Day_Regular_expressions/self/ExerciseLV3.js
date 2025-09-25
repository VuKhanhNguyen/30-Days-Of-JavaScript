//1
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
function cleanText(sentence){
    let regEx = /[%$@&#;]/g
    return sentence.replace(regEx, '')
}
console.log(cleanText(sentence))
//2
function mostFrequentWords(cleanedText){
    let regExSpace = /\W+/g
    let splitWord = cleanedText.split(regExSpace)
    let obj = {}
    for (const word of splitWord){
        obj[word] = (obj[word] || 0) + 1
    }
    const sorted = Object.entries(obj).sort((a,b) => b[1] - a[1]).map(item => ({[item[0]]: item[1]}))
    return sorted.slice(0,3)
}
console.log(mostFrequentWords(cleanText(sentence)))