//1
const dog = {}
//2
console.log(dog)
//3
dog.name = 'Buddy'
dog.legs = 4
dog.color = 'Brown'
dog.age = 3
dog.bark = function(){
    return 'Woof Woof'
}
console.log(dog)
//4
console.log(dog.bark())
console.log(dog.name, dog.legs, dog.color, dog.age)
//5
dog.breed = 'Labrador'
dog.getInfo = function(){
    const info = `My dog has name is ${this.name}, he is ${this.age} years old, he is ${this.color} in color and he has ${this.legs} legs.`
    return info
}
console.log(dog.getInfo())