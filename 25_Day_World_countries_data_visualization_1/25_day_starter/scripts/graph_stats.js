import { countries_data } from '../data/countries_data.js';

const bg_graph = document.querySelector('.graph-wrapper');
bg_graph.style.backgroundColor = '#d5edf3ff';
bg_graph.style.padding = '50px';
bg_graph.style.borderRadius = '10px';
bg_graph.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';



let populationChart = null;
let languageChart = null;
export function renderPopulationBarChart(){
    //sắp xếp giảm dần theo population
    const sortedDecs = [...countries_data].sort((a,b) => b.population - a.population);
    const top_10 = sortedDecs.slice(0,10); //lấy 10 phần tử đầu tiên

    console.log(top_10.map(country => {
        return {
            name: country.name,
            populations: country.population
        };
    })); //lấy key là tên của từng country và population là value trong mảng top_10

    // Vẽ biểu đồ cột cho dữ liệu dân số
    const canvas = document.getElementById('populationChart');
    if(!canvas) {
        console.error('Canvas element not found');
        return;
    }

    // Nếu đã có biểu đồ trước đó, hủy nó đi để tránh chồng chéo
    if(populationChart){
        try{
            populationChart.destroy();
        }catch (error) {
            console.error('Error destroying population chart:', error);
        }
        populationChart = null;
    }
    const ctx = canvas.getContext('2d');
    populationChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: top_10.map(country => country.name),
            datasets: [{
                label: 'Population',
                data: top_10.map(country => country.population),
                backgroundColor: 'rgba(52, 201, 238, 0.5)',
                borderColor: 'rgba(52, 201, 238, 1)',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y'  
        }
    });

}

export function renderLanguageBarChart(){
    const langCount = {};
    for(const country of countries_data){
        for(const lang of country.languages){
            langCount[lang] = (langCount[lang] || 0) + 1; //nếu langCount đã có lang thì lấy value ra cộng 1, nếu chưa có thì lấy 0 cộng 1
        }
    }
    const sortedLangs = Object.entries(langCount).sort((a,b) => b[1] - a[1]); //sắp xếp giảm dần theo value
    const top_10_langs = sortedLangs.slice(0,10);
    console.log(top_10_langs.map(([language, count]) => {
        return {
            name: language,
            languages: count
        };
    })); //lấy key là tên của từng language và count là value trong mảng top_10

    // Vẽ biểu đồ cột cho dữ liệu ngôn ngữ
    const canvas = document.getElementById('languagesChart');
    if(!canvas) {
        console.error('Canvas element not found');
        return;
    }

    // Nếu đã có biểu đồ trước đó, hủy nó đi để tránh chồng chéo
    if(languageChart){
        try{
            languageChart.destroy();
        }catch (error) {
            console.error('Error destroying language chart:', error);
        }
        languageChart = null;
    }
    const ctx = canvas.getContext('2d');
    languageChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: top_10_langs.map(lang => lang[0]),
            datasets: [{
                label: 'Languages',
                data: top_10_langs.map(lang => lang[1]),
                backgroundColor: 'rgba(52, 201, 238, 0.5)',
                borderColor: 'rgba(52, 201, 238, 1)',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y'  
        }
    });
}