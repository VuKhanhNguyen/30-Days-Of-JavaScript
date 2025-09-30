//1 + 2
const titles = document.querySelectorAll('p')
titles.forEach((title, i) =>{ //for each này có 2 tham số, tham số 1 là phần tử hiện tại, tham số 2 là index
    title.style.fontSize = `${(i+2)*10}px`
    if(i % 2 === 0){
        title.style.color = 'red'
        title.style.backgroundColor = 'black'
        // title.style.border = '20px solid lightblue'
        title.style.borderRadius = '10px'
        title.style.padding = '10px 5px'
    }
    else{
        title.style.color = 'green'
        title.style.backgroundColor = 'lightgrey'
        // title.style.border = '20px solid red'
        title.style.borderRadius = '10px'
        title.style.padding = '10px 5px'
    }
})
//3
titles.forEach((title, i) =>{
    title.textContent = `Paragraph ${i+1}`
    title.className = `paragraph${i+1}`
    title.id = `p${i+1}`
    console.log(title);
})