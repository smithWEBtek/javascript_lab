var evens = [0, 2, 4, 6, 8, 10];
var misc = [1,5,2,6,4,7,3,5,2,1];
var fruits = ['apple', 'pear', 'grape'];
var meals = ['breakfast', 'lunch', 'dinner'];
var tools = ['wrench', 'hammer', 'screwdriver'];
var pets = ["dog", "fish", "cat"];
var myArrays = fruits.concat(meals.concat(tools.concat(pets)));
 
function firstNotEqual(array, value) {
  for (let i = 0, l = array.length; i < l; i++) {
     if (array[i] !== value) {
      return array[i];
    }
  }
}

function firstNum(array, value) {
  for (let i = 0, l = array.length; i < l; i++) {
     if (array[i] == value-2) {
      return array[i];
    }
  }
}


function find(array, criteriaFunc) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (criteriaFunc(array[i])) {
      return array[i];
    }
  }
}

















