//1
const student = {
    firstName: 'Khanh',
    lastName: 'Nguyen',
    age: 21,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB', 'Python', 'D3.js'],
    country: 'Vietnam',
    enrolled_key: 'nvk123'
}
const txt = JSON.stringify(student, undefined, 4)
localStorage.setItem('student', txt)
console.log(localStorage)
let getStudent = localStorage.getItem('student')
console.log(getStudent)
let studentObj = JSON.parse(getStudent, undefined)
console.log(studentObj)
console.log(localStorage.key(3))
console.log(Object.keys(localStorage)) //trả về mảng các key trong localStorage
localStorage.removeItem('age') // không tìm ra key nào là age vì chỉ lưu key student, thay vào đó dùng "delete studentObj.age"
// sau đó lưu lại studentObj vào localStorage
// localStorage.setItem('student', JSON.stringify(studentObj, undefined, 4))
// console.log(localStorage)
// localStorage.clear()
// console.log(localStorage)