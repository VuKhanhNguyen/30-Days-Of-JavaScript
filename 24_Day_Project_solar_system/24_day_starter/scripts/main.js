const bodyFlex = document.querySelector('body');
bodyFlex.style.display = 'flex';
bodyFlex.style.flexDirection = 'column';
bodyFlex.style.justifyContent = 'flex-start';
bodyFlex.style.alignItems = 'center';
bodyFlex.style.height = '1000px';
bodyFlex.style.backgroundImage = 'url(./images/galaxy.gif)';

const h1 = document.querySelector('h1');
h1.style.color = 'white';
h1.style.textShadow = '2px 2px 4px #000000';
h1.style.marginBottom = '50px';

const input = document.querySelector('input');
input.style.padding = '10px';
input.style.fontSize = '16px';
input.style.borderRadius = '5px';
input.style.border = '1px solid #ccc';
input.style.marginBottom = '20px';

const dropList = document.querySelector('select');
dropList.style.padding = '10px';
dropList.style.fontSize = '16px';
dropList.style.borderRadius = '5px';
dropList.style.border = '1px solid #ccc';
dropList.style.marginBottom = '20px';

const button = document.querySelector('button');
button.style.padding = '10px 20px';
button.style.fontSize = '16px';
button.style.borderRadius = '5px';
button.style.border = 'none';
button.style.backgroundColor = '#4CAF50';
button.style.color = 'white';
button.style.cursor = 'pointer';
button.style.marginBottom = '20px';
button.addEventListener('mouseover', () => { //mouseover là khi di chuột vào 
    button.style.backgroundColor = '#1c4ad5ff';
});
button.addEventListener('mouseout', () => { //mouseout là khi di chuột ra
    button.style.backgroundColor = '#4CAF50';
});

const header = document.querySelector('header');
header.style.textAlign = 'center';
header.style.fontSize = '30px';
header.style.fontWeight = 'bold';
header.style.marginBottom = '20px';

//tạo options trong select
const planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'];
planets.forEach(planet => {
    const option = document.createElement('option');
     option.value = `${planet}.png`; // lưu giá trị có đuôi để tiện lấy ảnh
    option.textContent = planet.charAt(0).toUpperCase() + planet.slice(1);
    dropList.appendChild(option); //appendChild() thêm một nút con vào cuối danh sách các con của một phần tử cha đã chỉ định.
});
//khi chọn hành tinh trong select thì hiển thị tên hành tinh lên select
dropList.addEventListener('change', (event) => {
   const selectedValue = event.target.value;
    if (selectedValue === 'none') return;
    const planetName = selectedValue.split('.')[0]; //[0] là lấy phần tên hành tinh, [1] là lấy phần đuôi .png
    console.log('Selected planet:', planetName);
});

//làm background mờ cho main
const imgContainer = document.querySelector('main');
imgContainer.style.width = '1000px';
imgContainer.style.height = '500px';
imgContainer.style.padding = '100px';
imgContainer.style.background = 'rgba(211, 211, 211, 0.4)';
imgContainer.style.borderRadius = '15px';

//căn giữa image
const flexItem = document.querySelector('.flex-container');
flexItem.style.display = 'flex';
flexItem.style.justifyContent = 'center';
flexItem.style.alignItems = 'center';
flexItem.style.height = '100%';

//tạo sự kiện nhập số và chọn hành tinh rồi hiển thị ảnh hành tinh tương ứng và flexItem chuyển sang flex-start, còn bên phải là flex column hiển thị "mass of kg của "planet đã chọn" và dưới nó là kết quả sau khi tính cộng với kí tự "N"
button.addEventListener('click', () => {
    const weight = parseFloat(input.value);
    const selectedPlanet = dropList.value;
    if (isNaN(weight) || weight <= 0) {
        alert('Please enter a valid weight');
        return;
    }
    if (selectedPlanet === 'none') {
        alert('Please select a planet');
        return;
    }
    const planetName = selectedPlanet.split('.')[0];
    const gravity = {
        mercury: 3.7,
        venus: 8.87,
        earth: 9.81,
        mars: 3.71,
        jupiter: 24.79,
        saturn: 10.44,
        uranus: 8.69,
        neptune: 11.15,
        pluto: 0.62
    };
    const planetGravity = gravity[planetName];
    const result = (weight / 9.81) * planetGravity;
    console.log(`Weight on ${planetName}: ${result.toFixed(2)} N`); 
    flexItem.style.justifyContent = 'flex-start';
    flexItem.style.gap = '20px';

    //xóa ảnh hành tinh cũ nếu có
    const existingImg = document.querySelector('.planet-image');
    if (existingImg) {
        existingImg.remove();
    }
    //tạo ảnh hành tinh mới
    const img = document.createElement('img');
    img.src = `./images/${selectedPlanet}`;
    img.alt = planetName;
    img.className = 'planet-image';
    img.style.width = '500px';
    img.style.height = '500px';
    img.style.objectFit = 'contain';
    flexItem.appendChild(img);
    //xóa kết quả cũ nếu có
    const existingResult = document.querySelector('.result-container');
    if (existingResult) {
        existingResult.remove();
    }
    //tạo container để chứa kết quả
    const resultContainer = document.createElement('div');
    resultContainer.className = 'result-container';
    resultContainer.style.display = 'flex';
    resultContainer.style.flexDirection = 'column';
    resultContainer.style.justifyContent = 'center';
    resultContainer.style.alignItems = 'center';
    resultContainer.style.height = '200px';
    resultContainer.style.gap = '20px';
    resultContainer.style.marginLeft = '50px';
    flexItem.appendChild(resultContainer);
    //tạo header để hiển thị "mass of kg của "planet đã chọn"
    const resultHeader = document.createElement('h2');
    resultHeader.textContent = `Mass of ${weight} kg on ${planetName.charAt(0).toUpperCase() + planetName.slice(1)}`;
    resultHeader.style.color = 'white';
    resultHeader.style.textShadow = '2px 2px 4px #000000';
    resultContainer.appendChild(resultHeader);
    //tạo kết quả
    const resultText = document.createElement('p');
    resultText.textContent = `${result.toFixed(2)} N`;
    resultText.style.color = 'white';
    resultText.style.fontSize = '24px';
    resultText.style.fontWeight = 'bold';
    resultText.style.textShadow = '2px 2px 4px #000000';
    resultContainer.appendChild(resultText);
});

