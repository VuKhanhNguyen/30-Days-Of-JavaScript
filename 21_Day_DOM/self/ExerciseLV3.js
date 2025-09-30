//1
const year = document.querySelector('h1')
year.style.textAlign = 'center'
year.style.fontSize = '50px'
year.style.marginTop = '20px'
year.style.marginBottom = '20px'
// lấy ra năm 2020
const year2020 = year.textContent.match(/\d{4}/)[0] //\d{4} là lấy ra 4 chữ số liên tiếp, [0] là lấy phần tử đầu tiên trong mảng kết quả trả về
 //set interval để mỗi giây đổi màu một lần
setInterval(() => {
    const randomYearColor = Math.floor(Math.random()*16777215).toString(16) //tạo màu ngẫu nhiên dưới dạng hex, 16777215 là giá trị thập phân lớn nhất của màu hex, 16 là hệ cơ số
    //set innerHTML để có thể chèn thẻ span vào
    year.innerHTML = `Asabeneh Yetayeh challenges in <span id="year-span" style="color:#${randomYearColor}">${year2020}</span>`
    document.getElementById('year-span').style.fontSize = '100px'
},1000) //hàm này sẽ chạy mỗi 1 giây

const h2 = document.querySelector('h2')
h2.style.textAlign = 'center'
h2.style.fontSize = '30px'
h2.style.marginTop = '20px'
h2.style.marginBottom = '20px'
h2.style.textDecoration = 'underline'

const ul = document.querySelector('ul')
ul.style.textAlign = 'center'
ul.style.justifyContent = 'center'
ul.style.listStyle = 'none'
ul.style.gap = '20px'
const li = document.querySelectorAll('li')
li.forEach((item) =>{
    item.style.padding = '10px 15px'
})

li.forEach((item) =>{
    if(item.textContent.includes('Done')){
        item.style.backgroundColor = 'green'
        item.style.color = 'white'
    }
    else if(item.textContent.includes('Ongoing')){
        item.style.backgroundColor = 'yellow'
        item.style.color = 'black'
    }
    else if(item.textContent.includes('Coming')){
        item.style.backgroundColor = 'red'
        item.style.color = 'white'
    }
    item.style.fontSize = '20px'
    item.style.fontWeight = 'bold'
    item.style.borderRadius = '10px'
    item.style.width = '1000px'
    item.style.padding = '30px 15px'
    item.style.textAlign = 'left'
    item.style.margin = '10px auto' //auto được sử dụng để canh giữa phần tử block, block là các phần tử chiếm toàn bộ chiều ngang của thẻ cha (div, p, h1, h2, h3, h4, h5, h6, ul, li, table, form,...
})

const date = document.querySelector('h3')
date.setAttribute('id', 'date')
date.style.textAlign = 'center'
date.style.fontSize = '25px'
date.style.marginTop = '20px'
date.style.marginBottom = '20px'
date.style.padding = '10px 15px'
date.style.width = '500px'
date.style.margin = '20px auto'
setInterval(() => {
    const randomDateColor = Math.floor(Math.random()*16777215).toString(16)
    const now = new Date()
    date.textContent = now.toLocaleString('en-US', { 
        month: 'long', //long là tên đầy đủ của tháng, short là tên viết tắt của tháng
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false 
    }).replace(',', '')//replace để bỏ dấu phẩy giữa ngày và giờ
    //cách khác để định dạng ngày giờ
    // const options = {weekday: 'long', month: 'short', day: 'numeric', year: 'numeric'}
    // const timeOptions = {hour: '2-digit', minute: '2-digit', second: '2-digit'}
    // const locale = navigator.language //lấy ngôn ngữ của trình duyệt
    // date.textContent = now.toLocaleDateString(locale, options) + ', ' + now.toLocaleTimeString(locale, timeOptions)
    date.style.backgroundColor = `#${randomDateColor}`
},1000)