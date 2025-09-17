//1 Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods
const personAccount = {
    firstName: 'Khanh',
    lastName: 'Nguyen',
    incomes: {
        salary: 1000,
        bonus: 200,
        sideHustle: 300
    },
    expenses:{
        rent: 400,
        groceries: 150,
        utilities: 100
    },        
    totalIncome: function(){
        let total = 0
        for (let key in this.incomes) {
            total += this.incomes[key]
        }
        return total
    },
    totalExpense: function(){
        let total = 0
        for (let key in this.expenses) {
            total += this.expenses[key]
        }
        return total
    },
    accountInfo: function(){
        return `Account Holder: ${this.firstName} ${this.lastName} \nTotal Income: ${this.totalIncome()} \nTotal Expense: ${this.totalExpense()} \nAccount Balance: ${this.accountBalance()}`
    },
    addIncome: function(source, amount){
        this.incomes[source] = amount
    },
    addExpense: function(source, amount){
        this.expenses[source] = amount
    },
    accountBalance: function(){
        return this.totalIncome() - this.totalExpense()
    }
}    
//2
    const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

function signUp(username, email, password){
    for (const user of users) {
        if(user['username'] === username){
            return 'User already exists'
        }
    }
    const newUser = {
        _id: Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 8), // tạo id ngẫu nhiên dài 12 ký tự với 0-9, a-z và A-Z, toString(36) chuyển đổi số sang hệ cơ số 36, cơ số 36 bao gồm 0-9 và a-z, substring(2, 8) lấy 6 ký tự từ vị trí 2 đến vị trí 8 ở chuỗi ngẫu nhiên
        username,
        email,
        password,
        createdAt: new Date().toLocaleDateString(),// Lấy ngày giờ hiện tại và chuyển đổi thành chuỗi định dạng địa phương
        isLoggedIn: false
    }
    users.push(newUser)
    return 'Sign up successful'
}
console.log(signUp('Khanh', 'khanh@khanh.com', '123456'))
console.log(signUp('Alex', 'alex@alex.com', '123123'))

function signIn(username, password){
    for (const user of users) {
        if(user['username'] === username && user['password'] === password){
            user['isLoggedIn'] = true
            return 'Sign in successful'
        }
    }
    return 'Invalid username or password'
}
console.log(signIn('Khanh', '123456'))
console.log(signIn('Khanh', '1234567'))
//3
function rateProduct(productId, userId, rating) {
    for (const product of products) {
        if (product._id === productId) {
            let found = false
            for (const r of product.ratings) {
                if (r.userId === userId) {
                    r.rate = rating
                    found = true
                    break
                }
            }
            if (!found) {
                product.ratings.push({ userId, rate: rating })
            }
            return 'Rating added/updated successfully'
        }
    }
}

function averageRating(productId){
    for(const product of products){
        if(product['_id']===productId){
            let sum = 0
            for(const rating of product['ratings']){
                sum += rating.rate
            }
            return product['ratings'].length > 0 ?  sum / product['ratings'].length : 0
        }
    }
}
console.log(rateProduct('eedfcf', 'zwf8md', 4))
console.log(averageRating('eedfcf'))
console.log(rateProduct('aegfal', 'fg12cy', 5))
console.log(averageRating('aegfal'))
//4
function likeProduct(productId, userId){
    for(const product of products){
        if(product['_id'] === productId){
            const index = product['likes'].indexOf(userId)
            if(index === -1){
                product['likes'].push(userId)
                return 'Product liked'
            } else {
                product['likes'].splice(index, 1)
                return 'Product unliked'
            }
        }
    }
}
console.log(likeProduct('aegfal', 'zwf8md'))
console.log(likeProduct('aegfal', 'fg12cy'))