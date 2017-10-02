const evens = [0, 2, 4, 6, 8, 10];
const misc = [1,5,2,6,4,7,3,5,2,1];
const fruits = ['apple', 'pear', 'grape'];
const meals = ['breakfast', 'lunch', 'dinner'];
const tools = ['wrench', 'hammer', 'screwdriver'];
const pets = ["dog", "fish", "cat"];
const myArrays = fruits.concat(meals.concat(tools.concat(pets)));
 
const autobots = [
  { name: 'Optimus Prime', strength: 5, isTransformed: false, },
  { name: 'Ironhide', strength: 3, isTransformed: false, },
  { name: 'Bumblebee', strength: 2.5, isTransformed: false, },
  { name: 'Ratchet', strength: 1.5, isTransformed: false, },
];
 
// const transformedAutobots = map(autobots, function (autobot) {
//   return Object.assign({}, autobot, {
//     strength: autobot.strength * 2,
//     isTransformed: true,
//   });
// });

// console.log(transformedAutobots);

const transformedAutobotsWithMap = autobots.map(function (autobot) {
  return Object.assign({}, autobot, {
    name: autobot.name + 'asdf',
    strength: autobot.strength * 2,
    isTransformed: true,
  });
});

const asdf = transformedAutobotsWithMap;

console.log(transformedAutobotsWithMap);






// function map(collection, callback){
//   const result = [];

//   for (let i = 0, l = collection.length; i <= l; i++) {
//     const element = collection[i];
//     result.push(callback(element, i+1));
//   }
//   return result;
// }

// function caps(arg, i){
//   console.log(i+": "+ arg.toUpperCase());
// }