
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
  options: ["free wifi", "jazz", "Latin", "beginner", "classical", "pop", "music theory", "flex scheduling"]
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