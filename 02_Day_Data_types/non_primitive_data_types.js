let nums = [1, 2, 3]
nums[0] = 10
console.log(nums) // [10, 2, 3]

let nums = [1, 2, 3]
let numbers = [1, 2, 3]
console.log(nums == numbers) // false

let userOne = {
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland'
}
let userTwo = {
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland'
}
console.log(userOne == userTwo) // false

let numbers_2 = nums
console.log(nums == numbers_2)  // true

let userOne_2 = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}
let userTwo_2 = userOne_2
console.log(userOne_2 == userTwo_2)  // true