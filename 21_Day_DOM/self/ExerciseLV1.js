//1
const getFirstParagraph = document.querySelector('p') // queryselector nếu đưa tag name thì nó sẽ lấy thẻ đầu tiên
console.log(getFirstParagraph);
//2
const getParaByID = document.querySelector('#second')
console.log(getParaByID);
//3
const getPara = document.querySelectorAll('p') //node list là một mảng
console.log(getPara);
//4
const allText = document.querySelectorAll('p')
for (const p of allText) {
    console.log(p.textContent);
}
console.log("====================");
allText.forEach(p => {
    console.log(p.textContent);
})
console.log("====================");
for(let i=0; i<allText.length; i++){
    console.log(allText[i].textContent);
}
//5
const getFourthPara = document.querySelector('#four')
console.log(getFourthPara.textContent);
//6
const titles = document.querySelectorAll('p')
titles[0].className = 'p1'
titles[0].id = 'first'
titles[1].setAttribute('class', 'p2')
titles[1].setAttribute('id', 'second')
titles[2].classList.add('p3')
titles[2].id = 'third'
titles[3].className = 'p4'
titles[3].id = 'fourth'
console.log(titles);
