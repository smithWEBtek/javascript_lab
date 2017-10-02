var evens = [0, 2, 4, 6, 8, 10];
var misc = [1,5,2,6,4,7,3,5,2,1];
var fruits = ['apple', 'pear', 'grape'];
var meals = ['breakfast', 'lunch', 'dinner'];
var tools = ['wrench', 'hammer', 'screwdriver'];
var pets = ["dog", "fish", "cat"];
var myArrays = fruits.concat(meals.concat(tools.concat(pets)));
  


// nested object
const person = {
    name: "Awesome Name", 
    occupation: {
        title: "Senior Manager of Awesome",
        yearsHeld: 2
    },
    pets: [{
        kind: "dog",
        name: "Fiona"
    }, {
        kind: "cat",
        name: "Ralph"
    }]
};

const collections = [1, [2, [4, [5, [6]], 3]]];

function listPets(person){
    person.pets.forEach(function(pet){
        return pet.name;
    });
}

function find1(array, criteriaFn) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (criteriaFn(array[i])) {
      return array[i];
    }
  }
}

function find2(array, criteriaFn) {
  let current = array;
  let next = [];
  while (current) {
    if (criteriaFn(current)) {
      return current;
    }
    if (Array.isArray(current)) {
      for (let i = 0, l = current.length; i < l; i++) {
        next.push(current[i]);
      }
    }
    current = next.shift();
  }
  return null;
}

var objectKeys = [];

function find3(mix, criteriaFn) {
  let current = mix;
  let next = [];
  while (current) {
    if (criteriaFn(current)) {
      return current;
    }
    if (Array.isArray(current)) {
      for (let i = 0, l = current.length; i < l; i++) {
        next.push(current[i]);
      }
    }
    current = next.shift();

debugger;

    if (current => (typeof current === 'object')) {
      l = Object.keys(current).length;
      for (let i = 0; i < l; i++) {
        objectKeys.push(Object.keys(current[i]));
        next.push(current[i]);
      }
      return objectKeys;
    }
    current = next.shift();
    }
 
  return null;
}
