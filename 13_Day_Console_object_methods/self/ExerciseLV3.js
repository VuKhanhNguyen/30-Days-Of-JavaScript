//1
console.time('While loop')
let n = 0
let s1 = 0
while(n<=5){
    s1 += n
    n++
}
console.log(s1)
console.timeEnd('While loop')
console.log('------------------')
//2
console.time('For loop')
let s = 0
for(let i=0; i<=5; i++){
    s += i
}
console.log(s)
console.timeEnd('For loop')
console.log('------------------')
//3
console.time('For of loop')
let m = 0
for(const num of [0,1,2,3,4,5]){
    m += num
}
console.log(m)
console.timeEnd('For of loop')
console.log('------------------')
//4
console.time('ForEach loop')
let p = 0
let arr = [0,1,2,3,4,5]
arr.forEach(num =>{
    p += num
})
console.log(p)
console.timeEnd('ForEach loop')