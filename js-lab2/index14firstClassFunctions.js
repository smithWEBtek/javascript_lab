let tonight = tonightChores()
// let feedCat = feedCat.food("kibble")
feedCat.food = "kibble";

function feedCat(){
  console.log("Kibble, tinned food and water");
}

// You can store a function in a variable
let eveningChore = feedCat;
eveningChore();

// Pass a function as a parameter to another function
function doEveningChores(chores){
  for(let x=0; x<chores.length; x++)
  chores[x]();
}

doEveningChores([feedCat])

// return a function from another function
function tonightChores(){
  return feedCat
}


console.log(feedCat.food)
console.log(feedCat.constructor)
console.log(feedCat instanceof Object)
tonight()