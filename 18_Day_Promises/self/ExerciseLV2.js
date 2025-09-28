const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
//1 
const fetchData = async () => {
    try{
        const response = await fetch(catsAPI)
       const data = await response.json() // dòng này trả về 1 promise nên phải await, .json() là 1 method của đối tượng response trả về dữ liệu json
       const catNames = data.map(cat => cat.name)
       return catNames
    }catch(error){
        console.error(error)
    }
}
async function main(){
    const result = await fetchData(); //đoạn này có ý nghĩa là chờ fetchData() hoàn thành rồi mới gán giá trị trả về cho result
    console.log(result);
}
main();