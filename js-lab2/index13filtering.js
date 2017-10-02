let evens = [2,4,6,8,10]
let odds = [1,3,5,7,9,11]
let mixedNums = [1,2,3,4,5,6,7,8,9]
let mixedCaseLetters = ['a','e','b','h','y','r','d','Y','E','G','o','u','j','h']
let mixedNumsAndLetters = [4,'f','h',4,'t',3,'r', 5,'D',3,'t','q',4,'B',7,9,'E']
let myString = ""
let colors = ['red','green','blue','violet', 'yellow', 'orange', 'black', 'turquoise', 'magenta', 'aqua']

const users = [
  {
    firstName: 'Niky',
    lastName: 'Morgan',
    favoriteColor: 'Blue',
    favoriteAnimal: 'Jaguar'
  },
  {
    firstName: 'Tracy',
    lastName: 'Lum',
    favoriteColor: 'Yellow',
    favoriteAnimal: 'Penguin'
  },
  {
    firstName: 'Josh',
    lastName: 'Rowley',
    favoriteColor: 'Blue',
    favoriteAnimal: 'Penguin'
  },
  {
    firstName: 'Kate',
    lastName: 'Travers',
    favoriteColor: 'Red',
    favoriteAnimal: 'Jaguar'
  },
  {
    firstName: 'Avidor',
    lastName: 'Turkewitz',
    favoriteColor: 'Blue',
    favoriteAnimal: 'Penguin'
  },
  {
    firstName: 'Drew',
    lastName: 'Price',
    favoriteColor: 'Yellow',
    favoriteAnimal: 'Elephant'
  }
];

function filterEvens(arr){
  let filtered = []
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0) {
      filtered.push(arr[i])
    }
  }
  console.log(filtered)
}

function filterOdds(arr){
  let filtered = []
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 !== 0) {
      filtered.push(arr[i])
    }
  }
  console.log(filtered)
}

function isOdd(n){
 if (n % 2 !== 0){
   return true 
 }
}

function isEven(n){
  if (n % 2 === 0){
  return true
  }
}

function checkIt(item){
  if (typeof item === "string"){
    myString += item
  } else if (isOdd(item)){
    console.log(item + " is ODD!!")
  } else if (isEven(item)){
    console.log(item + " is EVEN!!")
  }
}

function cleanMyArray(arr){
  myString = ""
  console.log("myString is currently: blank")  
  for (let item of arr){
    checkIt(item)
  }
  if (myString.length > 0) {
    console.log("myString is currently: " + myString)
  }
}

function printFirstName(name){
  console.log(name)
}

function printUserNames(obj){
  for (let item of obj) {
      printFirstName(item.firstName)
  }
}

function firstNamePrinter (collection) {
  for (const user of collection) {
    printFirstName(user.firstName)
    // console.log(user.firstName);
  }
}

function favoriteColorBlue (collection) {
  for (const user of collection) {
    if (user.favoriteColor === 'Blue'){
      printFirstName(user.firstName)
    }
  }
}

function favoriteColor (collection, color) {
  for (const user of collection) {
    if (user.favoriteColor === color){
      printFirstName(user.firstName)
    }
  }
}

function userAttribute (collection, attribute, value) {
  for (const user of collection) {
    if (user[attribute] === value){
      printFirstName(user.firstName)
    }
  }
}

function filterElephantFans(collection) {
  for (const user of collection) {
    if (elephantFan(user)) {
      console.log(user.firstName);
    }
  }
}
 
function elephantFan(user) {
  return user['favoriteAnimal'] === 'Elephant';
}
 
function penguinFan(user) {
  return user['favoriteAnimal'] === 'Penguin';
}

function blueFan(user) {
  return user['favoriteColor'] === 'Blue';
}

function filter2functions(collection,function1, function2){
  // return firstNames of people who either like Penguins or Blue
  for (const user of collection){
    if (function1(user) || function2(user)){
      console.log(user.firstName + " likes " + user.favoriteAnimal + "s and " + user.favoriteColor + " things.")
    }
  }
}

function print10(){
  for (let i = 1; i < 11; i++){
    console.log(i)
  }
}

function filter2(collection, callback){
  for (const obj of collection){
    // console.log(callback(obj))
    // console.log(callback(obj))
    console.log(filterBluePenguins(collection))
  }
}

function iReturnThings (thing) {
  return thing;
}
 
iReturnThings({ firstName: 'Brendan', lastName: 'Eich' });

function iInvokeThings (thing) {
  // return thing;
  return thing()
}
 
// iInvokeThings(function () { return 4 + 5; });
// => 9
 
// iInvokeThings(function () { return 'Hello, ' + 'world!'; });
// => "Hello, world!"

function main (cb) {
  console.log(cb());
}
 
// main(function () { return "After I get passed to the main() function as the only argument, I'm stored in the local 'cb' variable!"});

function greet (name, cb) {
  return cb(name);
}

function stalker(victim){
  console.log(victim + " ....I am am your BIGGEST FAN!")
}

function doMathColor(num1, num2, cb){
  let x = Math.ceil(Math.random()) * num1
  let y = num2 * Math.random()
  console.log((x+y)+ cb())
}

function randomColor(){
  let i = parseInt((Math.random() * 100)/10)
  // console.log(colors[i])
  return colors[i]
}