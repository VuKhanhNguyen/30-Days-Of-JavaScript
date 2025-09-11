//1
let score = prompt("Enter your score: ",0)
if(score >= 80 && score <=100){
    console.log("A")
}else if(score >= 70 && score <= 89){
    console.log("B")
}
else if(score >= 60 && score <= 69){
    console.log("C")
}
else if(score >= 50 && score <= 59){
    console.log("D")
}else{
    console.log("F")
}
//2
let month = prompt("Enter month: ").toLowerCase()
if(month === 'september' || month === 'october' || month === 'november'){
    console.log(`${month} is in Autumn`)
}else if(month === 'december' || month === 'january' || month === 'february'){
    console.log(`${month} is in Winter`)
}
else if(month === 'march' || month === 'april' || month === 'may'){
    console.log(`${month} is in Spring`)
}   else if(month === 'june' || month === 'july' || month === 'august'){
    console.log(`${month} is in Summer`)
}else{
    console.log("Invalid month")
}
//3
let day = prompt("What is the day today ? : ").toLowerCase()
if(day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday'){
    console.log('What is the day today ? : '+day)
    console.log(`${day} is a working day`)
}else{
    console.log('What is the day today ? : '+day)
    console.log(`${day} is a weekend`)
}
