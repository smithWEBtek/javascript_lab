const activeUsers = [] 
const activeAnimals = [] 

class User{
  constructor(firstName, lastName, favoriteColor, favoriteAnimal, age, hometown){
    this.firstName = firstName
    this.lastName = lastName
    this.favoriteColor = favoriteColor
    this.favoriteAnimal = favoriteAnimal
    this.age = age
    this.hometown = hometown
  }
  myStory(){
    return `I was born in ${this.hometown}, and my favorite color is ${this.favoriteColor}`
  }

  askMyAge(){
    if (this.age > 35){
      return `You shouldn't ask me, because I am from ${this.hometown}.`
    } else {
      return `I'm ${this.age} and a half!`
    }
  }
  askColor(){
    return `I don't mind that question, mine is: ${this.favoriteColor}.`
  }
  sayHello(){
    return `Whaddup?`
  }
}

class Teacher extends User {
  teachMath(){
    return `My name is ${this.firstName} and 1 + 1 is usually equal to 2.`
  }
  sayHello(){
    console.log(`My parent class responds: ${super.sayHello()}.`)
    console.log(`But I like to use G'day mate!`)
  }
}

function Animal(name, species){
  this.name = name
  this.species = species
}

const createUsers = function(users){
  for (let member of users){
    let user = new User(
      member.firstName,
      member.lastName,
      member.favoriteColor,
      member.favoriteAnimal,
      member.age,
      member.hometown
    )
    activeUsers.push(user)
  }
}

const createAnimals = function(animals){
  for (let member of animals){
    let animal = new Animal(
      member.name,
      member.species
    )
    activeAnimals.push(animal)
  }
}

createUsers(users)

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  calcArea() {
    return this.height * this.width;
  }
  
  get area() {
    return this.calcArea();
  }

}

const square = new Rectangle(10, 10);
// console.log(square.area);

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    // return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
// console.log(Point.distance(p1, p2));

//  shows 'this' being the person object
// let person = {
//   status: function(){
//     console.log('happy')
//     return this
//   },
//   greet: function(){
//     return this
//   }
// }

//  shows 'this' being global, or 'window' 
