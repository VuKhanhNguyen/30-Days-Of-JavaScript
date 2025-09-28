//1
function outerFunction() {
    let sum = 0
    function innerFunction(num) {
        for (let i = 0; i < num; i++) {
            sum += i
        }
        return sum
    }
    return innerFunction
}
const one_innerFunc = outerFunction()
console.log(one_innerFunc(5)) //vì sao gọi được mà không cần gọi outerFunction() nữa, là vì outerFunction đã được gọi 1 lần và trả về innerFunction rồi
//2
function outerFunction2() {
    let total = 0
    function plus(num){
        for (let i = 0; i < num; i++) {
            total += i
        }
        return total
    }
    function minus(num){
        for (let i = 0; i < num; i++) {
            total -= i
        }
        return total
    }
    function multiply(num){
        for (let i = 1; i < num; i++) {
            total *= i
        }
        return total
    }
    return { 
        plus,
        minus,
        multiply
    }
}
const three_innerFunc = outerFunction2()
console.log(three_innerFunc.plus(5))
console.log(three_innerFunc.minus(3))
console.log(three_innerFunc.multiply(4))
//3
function outerPersonAccount() {
    let firstName = '',
    lastName = '',
    incomes = [],
    expenses = []
    
    function setFirstName(name){
        firstName = name
    }
    function setLastName(name){
        lastName = name
    }
    function totalIncome(){
        return incomes.reduce((acc, cur) => acc + cur.amount, 0)
    }
    function totalExpense(){
        return expenses.reduce((acc, cur) => acc + cur.amount, 0)
    
    }
    function accountInfo(){
        return `${firstName} ${lastName} has total income of ${totalIncome()} and total expense of ${totalExpense()}`
    }
    function addIncome(description, amount){
        const income = {
            description: description,
            amount: amount
        }
        incomes.push(income)
    }
    function addExpense(description, amount){
        const expense = {
            description: description,
            amount: amount
        }
        expenses.push(expense)
    }
    function getIncomes() {
        return incomes;
    }
    function getExpenses() {
        return expenses;
    }
    return {
        setFirstName,
        setLastName,
        totalIncome,
        totalExpense,
        accountInfo,
        addIncome,
        addExpense,
        getIncomes,
        getExpenses
    }
}
const personAccount = outerPersonAccount()
personAccount.setFirstName('Khanh')
personAccount.setLastName('Nguyen')
personAccount.addIncome('salary', 1000)
personAccount.addIncome('freelance', 500)
personAccount.addExpense('rent', 300)
personAccount.addExpense('food', 200)
console.log(personAccount.accountInfo())
console.log(personAccount.totalIncome())
console.log(personAccount.totalExpense())
//print incomes and expenses
console.log(personAccount.getIncomes())
console.log(personAccount.getExpenses())