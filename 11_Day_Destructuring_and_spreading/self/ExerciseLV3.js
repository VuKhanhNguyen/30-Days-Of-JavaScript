import { countries } from "../11_day_starter/data/countries_data.js";
//1
for (const country of countries){
  let {name, capital, languages, population} = country
  console.log(name, capital, languages, population);
}
//2
  const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
  let [name, skills, [,,jsScore, reactScore]] = student
console.log(name, skills, jsScore, reactScore)
//3
    const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
      ]
function convertArrayToObject(arr) {
    let result = []
    for (const student of arr){
        let [name, skills, scores] = student
        result.push({
            name: name,
            skills: skills,
            scores: scores
        })
    }
    return result
}
console.log(convertArrayToObject(students))
//4
    const student2 = {
      name: 'David',
      age: 25,
      skills: {
        frontEnd: [
          { skill: 'HTML', level: 10 },
          { skill: 'CSS', level: 8 },
          { skill: 'JS', level: 8 },
          { skill: 'React', level: 9 }
        ],
        backEnd: [
          { skill: 'Node',level: 7 },
          { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
          { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
      }
    }
let copyStudent2 = {...student2}
 
for (const [key, value] of Object.entries(copyStudent2.skills)){ //entries dùng để lấy cả key và value
    if (key === 'frontEnd'){
        value.push({skill: 'Bootstrap', level: 8})
    }
    if (key === 'backEnd'){
        value.push({skill: 'Express', level: 8})
    }
    if (key === 'dataBase'){
        value.push({skill: 'PostgreSQL', level: 8})
    }
    if (key === 'dataScience'){
        value.push('SQL')
    }
}
console.log(copyStudent2)