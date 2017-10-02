
let nums1 = [1,2,3,4,5,6,7,8,9]
let nums2 = [10,11,12,13,14,15,16,17,18,19]
let nums3 = [4,7,2,4,9,2,5,7,8,53,2,4,5,6,6,777,8]
let pets = ["dog", "dog", "cat", "cat", "bird", "bird", "snake", "turtle", "fish", "fish"]

let evens = [0, 2, 4, 6, 8, 10,12,14,16,18,20];
let odds = [1,3,5,7,9,11,13,15,17,19,21];
let misc = [1,5,2,6,4,7,3,5,2,1];
let fruits = ['apple', 'pear', 'grape'];
let meals = ['breakfast', 'lunch', 'dinner'];
let tools = ['wrench', 'hammer', 'screwdriver'];
let myArrays = fruits.concat(meals.concat(tools.concat(pets)));
const letters = ['a', ['b', ['c', ['d', ['e']], 'f']]];

function shallowIterator (target) {
  for (const key in target) {
    if (typeof target[key] === 'object') {
      for (const nestedKey in target[key]) {
        // console.log(target[key][nestedKey]);
        console.log(key + ": " + nestedKey + ": " + target[key][nestedKey]);
        let nestedObjects = target[key][nestedKey]
        console.log(logKeys2(nestedObjects))
      }
    } else {
      console.log(key + ": " + target[key]);
    }
  }
}

let objCounter = 0

function deepIterator (target) {
  if (typeof target === 'object') {
    for (const key in target) {
      deepIterator(target[key]);
      objCounter++
  }
} else {
  console.log(target);
}
}

const address = {
  street1: '11 Broadway',
  street2: '2nd Floor',
  city: 'New York',
  state: 'NY',
  zipCode: 10004
};

const teacher1 = {
  name: "Zelda McIntyre",
  phone: "603-424-3244", 
  address: "11 Main Street",
  city: "Bedford",
  state: "NH",
  options: ["free wifi", "jazz", "Latin", "beginner", "classical", "pop", "music theory", "flex scheduling"], 
  students: [{name: "Benny", age: 12, song: "Roller Coaster"}, {name: "Kenny", age: 7, song: "Clocks"}, {name: "Jenny", age: 17, song: "The Carousel"}]
}

const user1 = {
  firstName: 'Avi',
  lastName: 'Flombaum',
  company: {
    name: 'Flatbook Labs',
    jobTitle: 'Developer Apprentice'
  },
  friends: [{
    firstName: 'Joe',
    lastName: 'Burgess',
    company: {
      name: 'Flatbook Labs',
      jobTitle: 'Developer Apprentice'
    }
  },
  {
    firstName: 'Gabe',
    lastName: 'Jackson',
    company: {
      name: 'Flatbook Labs',
      jobTitle: 'Lead Developer'
    }
  }],
  projects: [{
    title: 'Flatbook',
    description: 'The premier Flatiron School-based social network in the world.'
  },
  {
    title: 'Scuber',
    description: 'A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.'
  }]
}

function showElements(ary){
  for (const element of ary ) {
    console.log(element)
  }
}

function foreachElements(ary){
  ary.forEach(function(element){
    console.log(element)
  })
}

function whileElements(ary){
  let counter = 0
  while (counter < ary.length){
    console.log(ary[counter++])
  }
}

function charsOfElements(ary){
  for (const element of ary){
    for (const char of element){
      console.log(char)
    }
  }
}

function logKeys(obj){
  for (const key in obj){
    console.log(key + ': ' + obj[key])
  }
}

function logKeys2(obj){
  for (const key in obj){
    if (typeof obj[key] === "object"){
      console.log("options:")
      whileElements(obj[key])
    } else {
      console.log(key + ': ' + obj[key])
    }
  }
}

function factorial(num)  
{  
  // If the number is less than 0, reject it.  
  if (num < 0) {  
      return -1;  
  }  
  // If the number is 0, its factorial is 1.  
  else if (num == 0) {  
      return 1;  
  }  
  var tmp = num;  
  while (num-- > 2) {  
      tmp *= num;  
//  1 x 2 x 3 x 4 x 5
//  5 x 4  = 20
//  4 x 3 = 80
//  3 x 2 = 240
   
    }  
  return tmp;  
} 

function countTo(int){
  for (let i = 1; i !== int+1; i++){
    console.log(i)
  }
}

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  for (let i = 1; i !== n; i++){
  let result = n + (n*i)
  }
  return result
}

function restring(str){
  let ary_str = str.split('')
  let new_str = []
  for (let i = ary_str.length; i > 0; i--){
    new_str.push(str[i])
  }
  new_str.join(',')
  debugger
  console.log(new_str)
}



// function reverseString(str) {
//   let splitString = str.split("")
//   let reverseArray = splitString.reverse() 
//   let joinArray = reverseArray.join("")
//   return joinArray
// }

// reverseString("hello")

function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("hello");