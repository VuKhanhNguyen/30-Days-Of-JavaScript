//1
const personAccount = {
    firstName: 'Khanh',
    lastName: 'Nguyen',
    incomes: {
        salary: 500,
        bonus: 200
    },
    expenses: {
        rent: 300,
        food: 100
    },
    totalIncome: function() {
        let total = 0
        for (const income in this.incomes) {
            total += this.incomes[income]
        }
        return total
    },
    totalExpense: function() {
        let total = 0
        for (const expense in this.expenses) {
            total += this.expenses[expense]
        }
        return total
    },
    accountInfo: function() {
        return `Name: ${this.firstName} ${this.lastName}\nIncome: ${this.totalIncome()}\nExpense: ${this.totalExpense()}`
    },
    addIncome: function(income, amount) {
        this.incomes[income] = amount //dòng này có 2 tham số: income là key, amount là value
    },
    addExpense: function(expense, amount) {
        this.expenses[expense] = amount
    },
    accountBalance: function() {
        return this.totalIncome() - this.totalExpense()
    }
}

// save to localStorage
localStorage.setItem('personAccount', JSON.stringify(personAccount, undefined, 4))
let getPersonAccount = localStorage.getItem('personAccount')
console.log(getPersonAccount)
let personAccountObj = JSON.parse(getPersonAccount, undefined)
personAccountObj.addIncome = personAccount.addIncome
personAccountObj.addExpense = personAccount.addExpense
// use function addIncome and addExpense
personAccountObj.addIncome('freelance', 300)
personAccountObj.addExpense('clothes', 50)
//save lại vào localStorage
localStorage.setItem('personAccount', JSON.stringify(personAccountObj, undefined, 4))
let getPersonAccount2 = localStorage.getItem('personAccount')
console.log(getPersonAccount2)
