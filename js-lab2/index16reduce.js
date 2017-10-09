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


const findNames = function(animal){
  return animal.name
}

let animalNames = animals.map(findNames)