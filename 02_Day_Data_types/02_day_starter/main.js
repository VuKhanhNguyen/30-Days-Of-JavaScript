// this is your main.js script
let name = ["Nguyễn", "Vũ", "Khanh"];
name[0] = 'hehe'
console.log(name);


console.log('hẹ'+ ' ' + 'hẹ' + '\n' + 'hẹ');
console.log('\n')

const paragraph = 'Đây là văn bản dài ngoằn chán ngắt. \
Không biết viết gì nữa nên viết dài dài cho nó dài. \
Mục đích là để xem nó có xuống dòng không. \
Ờ thì nó xuống dòng thật. \
Thế thôi.'
console.log(paragraph);

console.log('cái này là backslash \\')
console.log('quote là \'thế này\' và \"thế này\"')

let randnum = Math.random() * (4-3)+3 // từ 0 tới 9.999
console.log(randnum);
let floorNum = Math.floor(randnum)
let ceilNum = Math.ceil(randnum)
console.log(floorNum);
console.log(ceilNum);

let a = 13
let b = 23
console.log(`Tổng của ${a} và ${b} là ${a+b}`)

let word = 'JavaScript'
console.log(word.substr(2,2))
console.log(word.substring(4,7))

let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search(/e/gi)) // g là global tức là tìm tất cả - không dừng ở kết quả đầu tiên, i là ignore case tức là không phân biệt hoa thường

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/
console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]

let num = '9'
let numInt = +num
console.log(numInt);