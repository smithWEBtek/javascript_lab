var evens = [0, 2, 4, 6, 8, 10];
var misc = [1,5,2,6,4,7,3,5,2,1];
var fruits = ['apple', 'pear', 'grape'];
var meals = ['breakfast', 'lunch', 'dinner'];
var tools = ['wrench', 'hammer', 'screwdriver'];
var pets = ["dog", "fish", "cat", "horse", "mouse", "ant", "cow", "antelope"];
var myArrays = fruits.concat(meals.concat(tools.concat(pets)));
var scores = [3, 4, 10, 5, 11, 6];

function firstNotOne(array) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (array[i] !== 1) {
      return array[i];
    }
  }
}

function firstNotEqual(array, value) {
  for (let i = 0, l = array.length; i < l; i++) {
    // debugger;
    if (array[i] !== value) {
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

function critter(n){
   if (n% 2 ===0)
    return n;
}

function petSize(pet){
  if (pet.length > 5) {
      return pet;
  }
}

function bumpScore(scores){
  for (var i = 0, l = scores.length; i < l; i++) {
    if (scores[i] === 5){
      continue;
    }
    scores[i]+=13;
  }
  console.log(scores);
}


const notOne = firstNotOne([1, 1, 1, 1, 1, 2, 1, 1, 1, 3]);
one = [1, 1, "2qqqqqqq", 1, 4, 1, 3];
var asdf = [1, 1, 3, 1, 5, 6, 8, 10];

// firstNotOne(one);

firstNotEqual(one, 1);

find(notOne, firstNotEqual);






