import {renderLanguageBarChart, renderPopulationBarChart} from './graph_stats.js';

document.addEventListener('DOMContentLoaded', () => {
const graphBtn = document.querySelector('.graph-buttons');
graphBtn.style.display = 'flex';
graphBtn.style.justifyContent = 'center'; //căn giữa các phần tử con theo chiều ngang
graphBtn.style.alignItems = 'center'; //căn giữa các phần tử con theo chiều dọc
graphBtn.style.gap = '30px'; //khoảng cách giữa các phần tử con trong phần tử cha
// graphBtn.style.marginBottom = '10px';

const btns = graphBtn.querySelectorAll('button');
btns.forEach((btn) => {
    btn.style.padding = '10px 20px';
    btn.style.fontSize = '26px';
    btn.style.borderRadius = '5px';
    btn.style.border = 'none';
    btn.style.backgroundColor = '#008CBA';
    btn.style.color = 'white';
    btn.style.cursor = 'pointer'; // dòng này là khi hover vào button thì con trỏ chuột sẽ biến thành hình bàn tay
    btn.addEventListener('mouseover', () => { //mouseover là khi di chuột vào
        btn.style.backgroundColor = '#005f73';
    });
    btn.addEventListener('mouseout', () => { //mouseout là khi di chuột ra
        btn.style.backgroundColor = '#008CBA';
    });
});

const graphTitle = document.querySelector('.graph-title');
graphTitle.style.fontSize = '36px';
graphTitle.style.fontWeight = 'bold';
graphTitle.style.textAlign = 'center';
graphTitle.style.marginBottom = '10px';
graphTitle.style.marginTop = '10px';


//nếu click vào button population thì đổi tiêu đề là Population Graph
    const popBtn = document.querySelector('.population');
    const langBtn = document.querySelector('.languages');
    const popCanvas = document.getElementById('populationChart');
    const langCanvas = document.getElementById('languagesChart');

    function hideAllCanvases() {
        if (popCanvas) popCanvas.style.display = 'none';
        if (langCanvas) langCanvas.style.display = 'none';
    }

    function showPopulation() {
        hideAllCanvases();
        if (popCanvas) popCanvas.style.display = 'block';
        if (graphTitle) graphTitle.textContent = 'Population Graph Top 10';
        renderPopulationBarChart();
    }

    function showLanguages() {
        hideAllCanvases();
        if (langCanvas) langCanvas.style.display = 'block';
        if (graphTitle) graphTitle.textContent = 'Most Spoken Languages Top 10';
        renderLanguageBarChart();
    }

    // Attach handlers (safely)
    if (popBtn) popBtn.addEventListener('click', showPopulation);
    if (langBtn) langBtn.addEventListener('click', showLanguages);

    // initialize view: show population by default
    hideAllCanvases();
    showPopulation();
});