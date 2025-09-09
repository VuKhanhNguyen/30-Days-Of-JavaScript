//1
let sentencee = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(sentencee.match(/love/gi).length)
//2
let sentencee2 = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentencee2.match(/because/gi).length)
//3
const sentencee3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. \
The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;\
I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs.\
%Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let regEx = /[%$@&#;]/gi
let replc = sentencee3.replace(regEx, '')
console.log(replc)
//4
let sentencee4 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let regEx2 = /\d+/g
let money = sentencee4.match(regEx2)
console.log(money)
let total = parseInt(money[0]) + parseInt(money[1]) + parseInt(money[2])
console.log(total)
