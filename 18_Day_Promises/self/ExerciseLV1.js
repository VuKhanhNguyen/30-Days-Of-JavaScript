const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
//1
fetch(countriesAPI)
.then(response => response.json())
.then(data => {
    console.log(data)
})
.catch(error => console.error(error))
