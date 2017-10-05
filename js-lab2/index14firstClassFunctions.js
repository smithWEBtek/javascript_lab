const myFunc = function () {
  console.log(6 + 9)
};

myFunc.favoriteNumber = 42;


function yourFunc(){
  console.log(7+4);
}

function feedCat(){
  console.log(feedCat.food)
}

const arrayOfFunctions = [myFunc, yourFunc, feedCat]


  
let tonight = tonightChores()
  // let feedCat = feedCat.food("kibble")
  feedCat.food = "tunafish";
  feedCat.breed = 'tabby'

let specialFeedCat = feedCat(feedCat.food = "catnip")

let tunaFeedCat = feedCat(feedCat.food = "tunaparts")

let showCatConstructor = feedCat.constructor


// You can store a function in a variable
let eveningChore = feedCat;
eveningChore();

// Pass a function as a parameter to another function
function doEveningChores(chores){
  for(let x = 0; x < chores.length; x++){
    if (chores[x] = feedCat){
      console.log(x.breed)
    } else 
      if (x.breed === undefined){
        chores[x]()
    }
  }
}

doEveningChores([feedCat])

// return a function from another function
function tonightChores(){
  return feedCat(feedCat.food = "albacore")
  // feedCat()
}


// console.log(feedCat.food)
// console.log(feedCat.constructor)
// console.log(feedCat instanceof Object)
tonight




// var sayHello = function () {
  //   console.log('Hello');
  // };
  
function sayHello() {
  console.log('Hello');
};
  
sayHello();
 
