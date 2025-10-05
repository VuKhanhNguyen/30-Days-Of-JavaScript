// import { countries } from "../data/countries.js";
const countCountries = document.getElementById("total-countries");
countCountries.textContent = `Total Number Of Countries: ${countries.length}`;
countCountries.style.fontSize = "25px";
countCountries.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
countCountries.style.textAlign = "center";

//đoạn này là để tạo các thẻ div cho từng quốc gia trong mảng countries và thêm vào phần tử cha có class là countries-wrapper
const countriesContainer = document.querySelector(".countries-container");
countriesContainer.style.display = "flex";
countriesContainer.style.flexWrap = "wrap";
countriesContainer.style.justifyContent = "flex-start";
countriesContainer.style.alignItems = "center";
// countriesContainer.style.gap = "20px";
countriesContainer.style.marginTop = "20px";
countriesContainer.style.maxWidth = "1500px";
countriesContainer.style.margin = "20px auto 0 auto";
countriesContainer.style.padding = "0";


for (let i = 0; i < countries.length; i++) {
  // const countryDiv = document.createElement("div");
  const countryDiv = document.querySelector(".countries-wrapper").cloneNode(); //cloneNode() để sao chép phần tử có class là countries-wrapper
  countryDiv.classList.add("country"); //thêm class country vào thẻ div
  countryDiv.textContent = countries[i]
    countryDiv.style.width = "200px";  
    countryDiv.style.height = "100px";
    countryDiv.style.display = "flex";
    countryDiv.style.justifyContent = "center";
    countryDiv.style.alignItems = "center";
    countryDiv.style.fontSize = "20px";
    countryDiv.style.fontWeight = "bold";
    countryDiv.style.borderRadius = "5px";
    countryDiv.style.padding = "10px";
    countryDiv.style.margin = "10px";
    countryDiv.style.backgroundColor = "yellow";
    countryDiv.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    countryDiv.style.textAlign = "center";
    countryDiv.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    countryDiv.style.color = "#333";
 countriesContainer.appendChild(countryDiv);
}
