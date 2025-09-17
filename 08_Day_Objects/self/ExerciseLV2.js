const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

//1
function mostSkillsUser(obj){
    let maxSkills = 0
    let userWithMostSkills = ''
    for (const user in users) {
        const skillCount = users[user].skills.length
  if (skillCount > maxSkills) {
    maxSkills = skillCount
    userWithMostSkills = user
    }
    }
    return userWithMostSkills
}
console.log(mostSkillsUser(users))
//2
function countLoggedInUsers(obj){
    let count = 0
    for (const user in users) {
        if(users[user].isLoggedIn === true){
            count++
        }
    }
    return count
}
function countPointsUsers(obj){
    let count = 0
    for(const user in users){
        if(users[user].points >= 50){
            count++
        }
    }
    return count
}
console.log(countLoggedInUsers(users))
console.log(countPointsUsers(users))
//3
function findMERNDevs(obj){
    let mernDevs = []
    for(const user in users){
        if(users[user].skills.includes('MongoDB') && users[user].skills.includes('Express') && users[user].skills.includes('React') && users[user].skills.includes('Node'))
        {
            mernDevs.push(user)
        }

    }
    return mernDevs
}
console.log(findMERNDevs(users))

const copyUsers = Object.assign({}, users)
const keys = Object.keys(copyUsers)
//4
function addUser(name, email, skills, age, isLoggedIn, points){
    for (const obj in copyUsers) {
        if(copyUsers[obj].email === email){
            return 'User already exists'
        }
    }
    copyUsers[name] = {
        email,
        skills,
        age,
        isLoggedIn,
        points
    }
    return copyUsers
}
console.log(addUser('YourName', 'yourname@yourname.com', ['HTML', 'CSS', 'JavaScript'], 20, false, 0))
//5
const keys2 = Object.keys(copyUsers)
console.log(keys2)
//6
const values = Object.values(copyUsers)
console.log(values)
//7
import { countries } from '../08_day_starter/data/countries_data.js'    
for(const country of countries){
    console.log(country.name, country.capital, country.population, country.languages)
}