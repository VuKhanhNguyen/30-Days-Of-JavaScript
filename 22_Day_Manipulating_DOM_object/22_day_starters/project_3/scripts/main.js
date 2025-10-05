// make js like this image K:\ProjectGitHub\30_Days_Series\Javascript\30-Days-Of-JavaScript\22_Day_Manipulating_DOM_object\22_day_starters\design\dom_mini_project_challenge_info_day_2.3.png
const year = document.createElement('h1')
year.style.fontSize = '50px'
const currentYear = new Date().getFullYear()
year.textContent = currentYear
//
setInterval(() => {
    const randomYearColor = Math.floor(Math.random()*16777215).toString(16) //tạo màu ngẫu nhiên dưới dạng hex, 16777215 là giá trị thập phân lớn nhất của màu hex, 16 là hệ cơ số
    //set innerHTML để có thể chèn thẻ span vào
    year.innerHTML = `Asabeneh Yetayeh challenges in <span id="year-span" style="color:#${randomYearColor}">${currentYear}</span>`
    document.getElementById('year-span').style.fontSize = '100px'
},1000) //hàm này sẽ chạy mỗi 1 giây
year.style.textAlign = 'center'
const wrapper = document.querySelector('.wrapper')
wrapper.appendChild(year)

const h2 = document.createElement('h2')
h2.textContent = '30DaysOfJavaScript Challenge'
h2.style.textAlign = 'center'
h2.style.fontSize = '30px'
h2.style.marginTop = '20px'
h2.style.marginBottom = '20px'
h2.style.textDecoration = 'underline'
wrapper.appendChild(h2)

const date = document.createElement('h3')
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
wrapper.appendChild(date)

const ul = document.createElement('ul')
ul.style.textAlign = 'center'
ul.style.justifyContent = 'center'
ul.style.listStyle = 'none'
ul.style.gap = '20px'
ul.style.padding = '0'
ul.style.margin = '20px auto'
ul.style.maxWidth = '600px'
wrapper.appendChild(ul)
// Create challenge items with status
const challenges = [
    { name: '30 Days Of Python', tech: 'Python', status: 'Done', color: '#4CAF50' },
    { name: '30 Days Of JavaScript', tech: 'JavaScript', status: 'Ongoing', color: '#FFC107' },
    { name: '30 Days Of HTML & CSS', tech: 'HTML & CSS', status: 'Coming', color: '#F44336' },
    { name: '30 Days Of React', tech: 'React', status: 'Coming', color: '#F44336' },
    { name: '30 Days Of ReactNative', tech: 'ReactNative', status: 'Coming', color: '#F44336' },
    { name: '30 Days Of Fullstack', tech: 'Fullstack', status: 'Coming', color: '#F44336' },
    { name: '30 Days Of Data Analysis', tech: 'Data Analysis', status: 'Coming', color: '#F44336' },
    { name: '30 Days Of Machine Learning', tech: 'Machine Learning', status: 'Coming', color: '#F44336' }
]

asabenehChallenges2020.challenges.forEach(challenge => {
    const li = document.createElement('li')
    li.style.margin = '5px 0'
    
    // Determine color based on status
    let color;
    switch(challenge.status) {
        case 'Done':
            color = '#4CAF50';
            break;
        case 'Ongoing':
            color = '#FFC107';
            break;
        case 'Coming':
            color = '#F44336';
            break;
        default:
            color = '#666';
    }

    // Create details element for dropdown
    const details = document.createElement('details')
    details.style.backgroundColor = color
    details.style.color = 'white'
    details.style.borderRadius = '5px'
    details.style.fontSize = '16px'
    details.style.fontWeight = 'bold'
    details.style.overflow = 'hidden'
    
    // Create summary element (the clickable header)
    const summary = document.createElement('summary')
    summary.style.display = 'flex'
    summary.style.alignItems = 'center'
    summary.style.justifyContent = 'space-between'
    summary.style.padding = '15px 20px'
    summary.style.cursor = 'pointer'
    summary.style.outline = 'none'
    summary.style.listStyle = 'none'
    
 const mainTech = challenge.topics[0] || 'Unknown'

    // Hide default arrow and use custom one
    summary.style.listStyleType = 'none'
     summary.innerHTML = `
        <span style="flex: 1; text-align: left;">${challenge.name}</span>
        <span style="flex: 1; text-align: center;">▶ ${mainTech}</span>
        <span style="flex: 1; text-align: right;">${challenge.status}</span>
    `
    
    // Create dropdown content
    const dropdownContent = document.createElement('div')
    dropdownContent.style.padding = '15px 20px'
    dropdownContent.style.backgroundColor = 'rgba(0,0,0,0.1)'
    dropdownContent.style.borderTop = '1px solid rgba(255,255,255,0.2)'

        // Create topics list
    const topicsList = challenge.topics.map(topic => 
        `<span style="display: inline-block; background: rgba(255,255,255,0.2); padding: 4px 8px; margin: 2px; border-radius: 3px; font-size: 14px;">${topic}</span>`
    ).join('')

  dropdownContent.innerHTML = `
        <p style="margin: 5px 0; font-size: 14px;">Topics:</p>
        <div style="margin: 10px 0;">${topicsList}</div>
        <p style="margin: 5px 0; font-size: 14px;">Duration: ${challenge.days} days</p>
        <p style="margin: 5px 0; font-size: 14px;">Status: ${challenge.status}</p>
        ${challenge.projects ? `<p style="margin: 5px 0; font-size: 14px;">Projects: ${challenge.projects}</p>` : ''}
        ${challenge.questions ? `<p style="margin: 5px 0; font-size: 14px;">Questions: ${challenge.questions}</p>` : ''}
    `
    
    details.appendChild(summary)
    details.appendChild(dropdownContent)
    li.appendChild(details)
    ul.appendChild(li)
})
// Author info section
const authorSection = document.createElement('div')
authorSection.style.textAlign = 'center'
authorSection.style.marginTop = '40px'
authorSection.style.padding = '20px'

const authorName = document.createElement('h2')
authorName.textContent = 'Asabeneh Yetayeh'
authorName.style.fontSize = '28px'
authorName.style.marginBottom = '10px'

const socialIcons = document.createElement('div')
socialIcons.innerHTML = '📧 🐦 📱'
socialIcons.style.fontSize = '24px'
socialIcons.style.marginBottom = '20px'

const authorDesc = document.createElement('p')
authorDesc.textContent = 'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of sharing everything to everyone.'
authorDesc.style.maxWidth = '600px'
authorDesc.style.margin = '0 auto'
authorDesc.style.lineHeight = '1.6'
authorDesc.style.color = '#666'

authorSection.appendChild(authorName)
authorSection.appendChild(socialIcons)
authorSection.appendChild(authorDesc)
wrapper.appendChild(authorSection)
