//1
const numberContainer = document.getElementById("number-container");
for (let i = 0; i <= 101; i++) {
    const numberDiv = document.createElement("div");
    numberDiv.textContent = i;
    numberDiv.style.display = "inline-block"; //inline-block để các phần tử div có thể nằm cùng một hàng với nhau
    numberDiv.style.width = "200px";
    numberDiv.style.height = "100px";
    numberDiv.style.lineHeight = "50px";
    numberDiv.style.textAlign = "center";
    numberDiv.style.fontSize = "50px";
    numberDiv.style.fontWeight = "bold";
    numberDiv.style.borderRadius = "5px";
    numberDiv.style.padding = "10px";
    numberDiv.style.paddingTop = "50px";
    numberDiv.style.margin = "0px";
    if(i%2===0){
        numberDiv.style.backgroundColor = "green";
    }
    else if(i%2!==0){
        numberDiv.style.backgroundColor = "yellow";
    }
    //check prime number
    let isPrime = true;
    if (i < 2) isPrime = false;
    for (let j = 2; j <= Math.sqrt(i); j++) { //kiểm tra từ 2 đến căn bậc hai của i thôi vì nếu i có ước số lớn hơn căn bậc hai của nó thì ước số đó nhân với một số nhỏ hơn căn bậc hai sẽ bằng i (ví dụ 9 có ứơc số 3 và 9, 9 = 3*3, 3 là căn bậc hai của 9)
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        numberDiv.style.backgroundColor = "red";
    }
    numberContainer.appendChild(numberDiv); //dòng này để thêm phần tử con vào phần tử cha (numberDiv vào numberContainer)

}
