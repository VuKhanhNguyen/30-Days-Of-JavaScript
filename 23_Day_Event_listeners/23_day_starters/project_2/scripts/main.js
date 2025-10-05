document.body.addEventListener('keydown', function(event) { //keydown là sự kiện khi nhấn phím, còn keyup là sự kiện khi thả phím, keypress là sự kiện khi nhấn và giữ phím
    //Xóa element cũ nếu có
    const oldContent = document.querySelector('.content');
    if (oldContent) {
        oldContent.remove();
    }
    const oldNumberDiv = document.querySelector('.numberDiv');
    if (oldNumberDiv) {
        oldNumberDiv.remove();
    }   
//tạo thẻ div để hiển thị chữ cái người dùng vừa nhấn
const content = document.createElement('div');
content.classList.add('content');
content.innerHTML = `You pressed <span style="color: #4CAF50; font-size: 50px; font-weight: bold; font-style: italic;">${event.key}</span>`;
content.style.textAlign = 'center';
content.style.marginTop = '20px';
content.style.marginBottom = '20px';
content.style.padding = '20px';
content.style.width = '400px';
content.style.margin = '20px auto';//20px đó là margin trên và dưới, auto là canh giữa bên trái và phải
content.style.fontSize = '30px';
content.style.border = '2px solid #4CAF50';
content.style.borderRadius = '10px';
content.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';//tạo bóng cho thẻ div
content.style.fontFamily = 'Arial, sans-serif';
content.style.fontWeight = 'bold';
content.style.backgroundColor = '#f0f0f0';
document.body.appendChild(content);// lệnh này để thêm thẻ div vào trong thẻ body

//tạo numberDiv
const numberDiv = document.createElement('div');
numberDiv.classList.add('numberDiv');
numberDiv.style.textAlign = 'center';
numberDiv.style.marginTop = '20px';
numberDiv.style.marginBottom = '20px';
numberDiv.style.padding = '20px';
numberDiv.style.width = '400px';
numberDiv.style.margin = '20px auto';
numberDiv.style.fontSize = '30px';
numberDiv.style.border = '2px solid #4CAF50';
numberDiv.style.borderRadius = '10px';
numberDiv.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
numberDiv.style.fontFamily = 'Arial, sans-serif';
numberDiv.style.fontWeight = 'bold';
numberDiv.style.backgroundColor = '#f0f0f0';
numberDiv.innerHTML = `The key code is <span style="color: #4CAF50; font-size: 50px; font-weight: bold; font-style: italic;">${event.key.charCodeAt(0)}</span>`;
document.body.appendChild(numberDiv);
})
