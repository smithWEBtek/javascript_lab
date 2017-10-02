var meals = {}

var foods = new Object({entree: "salad", dessert: "cake"});

const firstMeal = 'breakfast';
const secondMeal = 'lunch';
const thirdMeal = 'dinner';

var midniteSnack = 'lastSnack'; 

var meals = { 
  [firstMeal]: "oatmeal",
  [secondMeal]: "bean soup",
  [thirdMeal]: "salad",
  [midniteSnack]: "cereal",
  ["thirsty"]: "water",
  ["breakfast2"]: 'tunafish',
  ["gameJunkFood"]: 'chips'
}

function destructiveUpdate(meal, name, value) {
  meal[name] = value
  return meal;
}

destructiveUpdate(secondMeal, "lunch", "tacos" );



document.getElementsByTagName("p");
