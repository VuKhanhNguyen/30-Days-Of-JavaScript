import { countries_data } from '../data/countries_data.js';
import { renderLanguageBarChart, renderPopulationBarChart } from './graph_stats.js';


const h2 = document.querySelector('h2');
h2.style.textAlign = 'center';
h2.style.marginBottom = '10px';
h2.style.color = 'orange';
h2.style.textShadow = '2px 2px 4px #000000';
h2. style.fontFamily = 'Arial, sans-serif';
h2.style.fontSize = '50px';

//event đến số lượng countries
const subtitle = document.querySelector('.subtitle');
subtitle.style.textAlign = 'center';
subtitle.style.marginBottom = '10px';
subtitle.style.color = 'black';
subtitle.style.fontFamily = 'Arial, sans-serif';
subtitle.style.fontSize = '30px';
if (countries_data) {
    subtitle.textContent = `Số lượng quốc gia: ${countries_data.length}`;
} else {
    subtitle.textContent = 'Số lượng quốc gia: dữ liệu không khả dụng';
}

const header = document.querySelector('header');
header.style.backgroundColor = '#66bb6a9c';
header.style.padding = '20px';
header.style.borderRadius = '10px';
header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
header.style.marginBottom = '20px';
