//1
let monthh = prompt("Enter month: ").toLowerCase()
if(monthh === 'january' || monthh === 'march' || monthh === 'may' || monthh === 'july' || monthh === 'august' || monthh === 'october' || monthh === 'december'){
    console.log(`${monthh} has 31 days`)
}else if(monthh === 'april' || monthh === 'june' || monthh === 'september' || monthh === 'november'){
    console.log(`${monthh} has 30 days`)
}else if(monthh === 'february'){
    console.log(`${monthh} has 28 days`)
}else{
    console.log("Invalid month")
}
//2
let numOfDay = prompt("Enter month number (1-12): ",0).toLowerCase()
switch (numOfDay){
    case 'january', 'march', 'may', 'july', 'august', 'october', 'december':
        console.log(`${numOfDay} has 31 days`)
        break
    case 'april', 'june', 'september', 'november':
        console.log(`${numOfDay} has 30 days`)
        break
    case 'february':
        let yearr = prompt("Enter year: ",0)
        if((yearr % 4 == 0 && yearr % 100 != 0) || yearr % 400 == 0){
            console.log(`${numOfDay} at ${yearr} has 29 days`)
        }else{
            console.log(`${numOfDay} at ${yearr} has 28 days`)
        }
        break
    default:
        console.log("Invalid month")
}