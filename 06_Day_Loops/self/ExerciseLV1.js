const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//1
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
console.log('------------------');
let ii = 0
while (ii <= 10) {
  console.log(ii);
  ii++;
}
console.log('------------------');
let iii = 0
do{
    console.log(iii);
    iii++
}while(iii<=10)
console.log('------------------');
//2
for (let i = 10; i >= 0; i--) {
  console.log(i);
}
console.log('------------------');
let i2 = 10
while (i2 >= 0) {
  console.log(i2);
  i2--;
}
console.log('------------------');
let i3 = 10
do{
    console.log(i3);
    i3--
}while(i3>=0)
console.log('------------------'); 
//3
let n = prompt('Enter a number: ')
for(let i_i = 0; i_i <= n; i_i++) {
  console.log(i_i);
}
//4
let sharp = '#'
for (let i_ii = 1; i_ii<8; i_ii++) {
    console.log(sharp);
    sharp+='#'
}
//5
let i_iii = 0
do{
    console.log(`${i_iii} x ${i_iii} = ${i_iii*i_iii}`);
    i_iii++
}while(i_iii<=10)
//6
let i_iv = 0
console.log('i  i^2  i^3');
for(i_iv=0;i_iv<=10;i_iv++){
    console.log(`${i_iv}  ${i_iv**2}  ${i_iv**3}`);
}    
//7
for(let i_v=0;i_v<101;i_v++){
    if(i_v%2==0){
        console.log(i_v);
    }
}
//8
for(let i_v=0;i_v<101;i_v++){
    if(i_v%2!=0){
        console.log(i_v);
    }
}
//9
let isPrime = false;
for(let i_vi=0;i_vi<101;i_vi++){
    // if(i_vi == 1){
    //     isPrime = true;
    // }
    if(i_vi == 2){
        isPrime = true;
    }
    for(let j=2;j<=Math.sqrt(i_vi);j++){
        if(i_vi%j==0){
            isPrime = false;
            break;
        }else{
            isPrime = true;
        }
    }
    if(isPrime){
        console.log(i_vi);
    }
}
//10
let sum = 0
for(let i_vii=0;i_vii<101;i_vii++){
    sum+=i_vii
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);
//11
let evenSum = 0
let oddSum = 0
for(let i_viii=0;i_viii<101;i_viii++){
    if(i_viii%2==0){
        evenSum+=i_viii
    }else{
        oddSum+=i_viii
    }
}
console.log(`The sum of all evens from 0 to 100 is ${evenSum}. And the sum of all odds from 0 to 100 is ${oddSum}`);
//12
let arr = []
arr.push(evenSum,oddSum);
console.log(arr);
//13
let randomArr = []
for(i_rand = 0;i_rand<5;i_rand++){
    randomArr.push(Math.floor(Math.random()*101))
}
console.log(randomArr);
//14
let randomArr2 = []
for(i_rand2 = 0;i_rand2<5;i_rand2++){
   let a =  Math.floor(Math.random()*101)
    if(!randomArr2.includes(a)){
        randomArr2.push(a)
    }

}console.log(randomArr2);
//15
let randomString = ''
let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
for(let i_str=0;i_str<5;i_str++){
    randomString += characters.charAt(Math.floor(Math.random()* characters.length))
}
console.log(randomString);