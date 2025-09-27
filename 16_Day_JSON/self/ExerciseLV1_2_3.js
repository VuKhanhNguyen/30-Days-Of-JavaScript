const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = {
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}

//1
const skillsJSON = JSON.stringify(skills)
console.log(skillsJSON)
//2
const ageString = JSON.stringify(age)
console.log(ageString)
//3
const isMarriedString = JSON.stringify(isMarried)
console.log(isMarriedString)
//4
const studentString = JSON.stringify(student,undefined,4) // undefined là để không bỏ qua bất kỳ thuộc tính nào, 4 là để thụt lề 4 khoảng trắng cho dễ đọc
console.log(studentString)

//5
const studentString2 = JSON.stringify(student,['firstName','lastName','skills'],4)
console.log(studentString2)

//6
const txtObject = JSON.parse(JSON.stringify(txt))
console.log(txtObject)
//7
let maxSkill = 0
let person = ''
for(const key in txtObject){
    if(txtObject[key].skills.length > maxSkill){
        maxSkill = txtObject[key].skills.length
        person = key
    }
}
console.log(JSON.stringify(person), JSON.stringify(maxSkill)) // Asab