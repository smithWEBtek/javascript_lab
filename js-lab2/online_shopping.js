var meals = {
  breakfast: 'oatmeal',
  lunch: 'tuna',
  dinner: 'spaghetti'
};

var mealNames = Object.keys(meals);
 
function jeet() {
for (var i = 0; i < mealNames.length; i++) {
  console.log(`I ate ${meals[mealNames[i]]} for ${mealNames[i]}!`);
}
}


function jeet2() {
  for (var mealName in meals) {
  console.log(`I ate ${meals[mealName]} for ${mealName}!`)
  }
}