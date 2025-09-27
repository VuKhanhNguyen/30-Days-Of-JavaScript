//1
class Animal {
    constructor(name, age, color, legs) {
        console.log(this)//dòng này in ra đối tượng được tạo từ class Animal
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    get info() {
        return `This is ${this.name}. ${this.name} is ${this.age} years old. ${this.name} has ${this.legs} legs and is ${this.color}.`
    }
    get getName() {
        return this.name
    }
    get getAge() {
        return this.age
    }
    get getColor() {
        return this.color
    }
    get getLegs() {
        return this.legs
    }
    set setName(name) {
        this.name = name
    }
    set setAge(age) {
        this.age = age
    }
    set setColor(color) {
        this.color = color
    }
    set setLegs(legs) {
        this.legs = legs
    }
    //create some methods
    sound(animal) {
        console.log(`The ${animal.name} makes a sound`)
    }
    eat(animal) {
        console.log(`The ${animal.name} is eating`)
    }
    sleep(animal) {
        console.log(`The ${animal.name} is sleeping`)
    }
    play(animal) {
        console.log(`The ${animal.name} is playing`)
    }
    walk(animal) {
        console.log(`The ${animal.name} is walking`)
    }
}
//2
class Dog extends Animal {
    constructor(name, age, color, legs, breed) {
        super(name, age, color, legs)
        this.breed = breed
    }
    get getBreed() {
        return this.breed
    }
    set setBreed(breed) {
        this.breed = breed
    }
    get info() {
        return `${super.info} ${this.name} is a ${this.breed}.`
    }
    sound() {
        console.log(`The ${this.name} barks`)
    }
    play() {
        console.log(`The ${this.name} loves to play fetch`) //play fetch là trò chơi ném và bắt bóng
    }
}
class Cat extends Animal {
    constructor(name, age, color, legs, breed) {
        super(name, age, color, legs)
        this.breed = breed
    }
}
const dog = new Dog('Buddy', 3, 'brown', 4, 'Labrador')
console.log(dog)
console.log(dog.info)
dog.sound(dog)
dog.eat(dog)
dog.sleep(dog)
dog.play(dog)
dog.walk(dog)


