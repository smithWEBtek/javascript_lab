function triple1 (x) {
  return x * 4
}

let triple2 = function (x) {
  return x * 3
}

const filterDogs = function(objArr){
  let filteredObjArr = []
  for(let member of objArr){
    if (member.species !== "dog"){
      filteredObjArr.push(member)
    }
  }
  return filteredObjArr
}

const findDogs = function(objArr){
  let foundDogs = []
  for(let i = 0; i < objArr.length; i++){
    if (objArr[i].species === "dog"){
      foundDogs.push(objArr[i])
    }
  }
  return foundDogs
}
// 1........................... 
// let dogs = animals.filter(function(animal){
//   return animal.species === 'dog'
// })

// 2...........................

let isDog = function(animal){
  return animal.species === 'dog'
}

let notDog = function(animal){
  return animal.species !== 'dog'
}

let isCat = function(animal){
  return animal.species === 'cat'
}

let isWhat = function(animal, species){
  return animal.species === species
}

let notWhat = function(animal, species){
  return animal.species === species
}


let otherAnimals = animals.filter(notDog)
let dogs = animals.filter(isDog)
let cats = animals.filter(isCat)

// return an array of all animal names, using map function
// first using for loop: 

// function animalNames(arr){
//   let names = [] 
//   for(let i = 0; i<arr.length; i++){
//     names.push(arr[i].name)
//   }
//   return names
// }

//  now using map 

// const findNames = function(animal){
//   return animal.name + " is a " + animal.species
// }
// using arrow function
const findNames = (animal)=>animal.name
let animalNames = animals.map(findNames)

//  get total amount of orders[amount]s, using for loop 

// const totalAmount = function(orders){
  //   let total = 0
  //   for (let i = 0; i<orders.length; i++){
    //     total += orders[i].amount
    //   }
    //   return total 
    // }

//  get total amount of orders[amount]s, using reduce
// const totalAmount = orders.reduce(function(sum, order) {
//   console.log("hello", sum, order)
//   return sum + order.amount
// }, 0)

//  same thing, using reduce with arrow function
const totalAmount = orders.reduce((sum, order) => sum + order.amount, 0)
