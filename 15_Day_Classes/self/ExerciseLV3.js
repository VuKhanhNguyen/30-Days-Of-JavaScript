//1
class Statistic {
    constructor(arr) {
        this.arr = arr
    }
    get max() {
        let max = this.arr[0]
        this.arr.forEach(num => {
            if (num > max) {
                max = num
            }
        })
        return max
    }
    get min() {
        let min = this.arr[0]
        this.arr.forEach(num => {
            if (num < min) {
                min = num
            }
        })
        return min
    }
    get count(){
        return this.arr.length
    }
    get sum(){
        return this.arr.reduce((acc, cur) => acc + cur, 0)
    }
    get range(){
        return this.max - this.min
    }
    get mean(){
        return this.sum / this.count
    }
    get median(){ 
        const sortedArr = this.arr.slice().sort((a,b) => a - b)
        const mid = Math.floor(sortedArr.length / 2)
        return sortedArr.length % 2 === 0 ? (sortedArr[mid - 1] + sortedArr[mid]) / 2 : sortedArr[mid]
    }
    get mode(){ //mode là giá trị xuất hiện nhiều nhất trong một tập hợp dữ liệu
        const numCounts = {}
        this.arr.forEach(num => {
            numCounts[num] = (numCounts[num] || 0) + 1
        })
        const maxCount = Math.max(...Object.values(numCounts)) // lấy obj là vì numCounts là object, lúc này hàm max sẽ so sánh các value trong object sau đó nó sẽ trả về value lớn nhất
        return Object.keys(numCounts).find(num => numCounts[num] === maxCount)
    }
    get variance(){ //phương sai là trung bình của bình phương độ lệch giữa mỗi giá trị và giá trị trung bình
        const mean = this.mean
        return Number(this.arr.reduce((acc, cur) => acc + Math.pow(cur - mean, 2), 0) / this.count).toFixed(1)//fixed(1) làm tròn đến 1 chữ số thập phân

    }
    get standardDeviation(){// độ lệch chuẩn là căn bậc hai của phương sai
        return Math.sqrt(this.variance).toFixed(1)
    }
    get frequencyDistribution(){ //tần số xuất hiện của các giá trị trong mảng
        const freqDist = {}
        this.arr.forEach(num => {
            freqDist[num] = (freqDist[num] || 0) + 1
        })
        return freqDist
    }
}
const age=[31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const statistics = new Statistic(age)
console.log(statistics)
console.log('Max:', statistics.max)
console.log('Min:', statistics.min)
console.log('Count:', statistics.count)
console.log('Sum:', statistics.sum)
console.log('Range:', statistics.range)
console.log('Mean:', statistics.mean)
console.log('Median:', statistics.median)
console.log('Mode:', statistics.mode)
console.log('Variance:', statistics.variance)
console.log('Standard Deviation:', statistics.standardDeviation)
console.log('Frequency Distribution:', statistics.frequencyDistribution)

//2
class PersonAccount {
    constructor(firstName, lastName, income, expenses) {
        this.firstName = firstName
        this.lastName = lastName
        this.income = [...new Set(income)] // loại bỏ các phần tử trùng lặp trong mảng income
        this.expenses = [...new Set(expenses)] // loại bỏ các phần tử trùng lặp trong mảng expenses
    }
    get totalIncome() {
        return this.income.reduce((acc, cur) => acc + cur, 0)
    }
    get totalExpenses() {
        return this.expenses.reduce((acc, cur) => acc + cur, 0)
    }
    get accountInfo() {
        return `Account holder: ${this.firstName} ${this.lastName}
Total Income: ${this.totalIncome}
Total Expenses: ${this.totalExpenses}
Account Balance: ${this.totalIncome - this.totalExpenses}`
    }
    addIncome(amount) { // income: thu nhập
        this.income.push(amount)
    }
    addExpense(amount) {// expense: chi phí, tức là số tiền chi ra
        this.expenses.push(amount)
    }
    accountBalance() {
        return this.totalIncome - this.totalExpenses
    }
}
const personAccount = new PersonAccount('Khanh', 'Nguyễn', [5000, 6000, 7000], [2000, 1500, 3000])
console.log(personAccount)
console.log(personAccount.accountInfo)
personAccount.addIncome(8000)
personAccount.addExpense(2500)
console.log('After adding income and expense:')
console.log(personAccount.accountInfo)
