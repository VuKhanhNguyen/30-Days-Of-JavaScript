const h1 = document.querySelector('h1');
h1.style.textAlign = 'center';
h1.style.marginTop = '20px';
h1.style.marginBottom = '20px';
h1.style.fontSize = '80px';
h1.style.fontFamily = 'Arial, sans-serif';
h1.style.color = '#65e707ff';

const h2 = document.querySelector('h2');
h2.style.textAlign = 'center';
h2.style.marginTop = '20px';
h2.style.marginBottom = '20px';
h2.style.fontSize = '30px';
h2.style.fontFamily = 'Arial, sans-serif';

const h3 = document.querySelector('h3');
h3.style.textAlign = 'center';
h3.style.marginTop = '20px';
h3.style.marginBottom = '20px';
h3.style.fontSize = '20px';
h3.style.fontFamily = 'Arial, sans-serif';

//tạo bao bọc các
const wrapper = document.querySelector('.wrapper');
const inputContainer = document.createElement('div');
inputContainer.style.display = 'flex';
inputContainer.style.justifyContent = 'center'; //justifyContent để canh giữa đối tượng theo chiều ngang
inputContainer.style.alignItems = 'center'; //alignItems để canh giữa đối tượng theo chiều dọc
inputContainer.style.textAlign = 'center';
inputContainer.style.gap = '10px'; //khoảng cách giữa các phần tử con trong phần tử cha
inputContainer.style.margin = '20px auto';

//tạo input
const inputBox = document.createElement('input'); //dòng này để tạo thẻ input
inputBox.setAttribute('type', 'text'); // dòng này để set thuộc tính type của thẻ input là text
inputBox.setAttribute('placeholder', 'Type your text here...'); 
inputBox.style.padding = '10px';
inputBox.style.fontSize = '20px';
inputBox.style.borderRadius = '5px';
inputBox.style.border = '2px solid #4CAF50';
inputBox.style.width = '800px';
inputBox.style.textAlign = 'center';

//tạo button
const enterButton = document.createElement('button'); //dòng này để tạo thẻ button
enterButton.textContent = 'Enter'; //dòng này để tạo text cho button
//để button này sang bên phải
enterButton.style.display = 'block';
enterButton.style.padding = '10px 20px'; 
enterButton.style.fontSize = '20px';
enterButton.style.borderRadius = '5px';
enterButton.style.border = 'none';
enterButton.style.backgroundColor = '#4CAF50';
enterButton.style.color = 'white';
enterButton.style.cursor = 'pointer';// dòng này là khi hover vào button thì con trỏ chuột sẽ biến thành hình bàn tay
inputContainer.appendChild(inputBox);
inputContainer.appendChild(enterButton);
wrapper.appendChild(inputContainer);

//tạo thẻ div để chứa các số
const numberContainer = document.createElement('div');
numberContainer.setAttribute('id', 'number-container');
numberContainer.style.display = 'flex';
numberContainer.style.flexWrap = 'wrap'; //wrap để các phần tử con trong phần tử cha khi không đủ chỗ sẽ tự động xuống dòng
numberContainer.style.justifyContent = 'flex-start';
numberContainer.style.alignItems = 'center';
numberContainer.style.gap = '10px';
numberContainer.style.margin = '20px auto';
numberContainer.style.width = '60%';
wrapper.appendChild(numberContainer);
// tạo số lượng số từ 0 đến số mà người dùng nhập vào
enterButton.addEventListener('click', function() {
    numberContainer.innerHTML = ''; //xóa hết các phần tử con trong numberContainer trước khi tạo lại, innerHTML là thuộc tính để lấy hoặc set nội dung HTML bên trong một phần tử (ví dụ <div>abc</div> thì innerHTML là abc)
    const userInput = parseInt(inputBox.value);
    
    if(isNaN(userInput) || userInput < 0){
        //tạo thẻ span phía trên inputBox để hiển thị thông báo lỗi
        const errorSpan = document.createElement('span');
        errorSpan.textContent = 'Please enter a valid positive number';
        inputContainer.insertBefore(errorSpan, inputBox);//dòng này để chèn errorSpan vào trước inputBox trong inputContainer
        errorSpan.style.color = 'red';
        errorSpan.style.fontSize = '20px';
        errorSpan.style.marginRight = '10px';
        //xóa thông báo lỗi sau 3 giây
        setTimeout(function() {
            inputContainer.removeChild(errorSpan);
        }, 3000);
        return;
    }
     //tạo màu ngẫu nhiên
    for(let i = 0; i < userInput; i++){
        const numberDiv = document.createElement('div');
        const randColor = Math.floor(Math.random()*16777215).toString(16);
        numberDiv.textContent = i;
        numberDiv.style.display = 'inline-block'; //inline-block để các phần tử div có thể nằm cùng một hàng với nhau
        numberDiv.style.width = '200px';
        numberDiv.style.height = '100px';
        numberDiv.style.lineHeight = '50px';
        numberDiv.style.textAlign = 'center';
        numberDiv.style.fontSize = '50px';
        numberDiv.style.fontWeight = 'bold';
        numberDiv.style.borderRadius = '5px';
        numberDiv.style.padding = '10px';
        numberDiv.style.paddingTop = '50px';
        numberDiv.style.margin = '0px';
        numberDiv.style.backgroundColor = `#${randColor}`;
        numberContainer.appendChild(numberDiv);
    }
});