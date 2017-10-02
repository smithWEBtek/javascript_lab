var foo = 1;
function bar() {
  if (!foo) {
    var foo = 10;
  }
  alert(foo);
}
bar();


var snack = "granola bar";
function eat(){
  console.log(snack);
  var snack = "snickers"
}


// var snack = "granola bar";
// function eat(){
//   console.log(snack);
// }

function myFunction2(){
  var word = "cake";
  console.log(word)
}


[1, 2, 3, 4].map(n => n * n).reduce((sum, n) => (sum + n), 0)


function nester() {
  return () => {
    return () => {
      return 'Found me!'
    }
  }
}

var anonymous = () => {}
var nameless = () => {}

function iHaveAName() {}

function iHaveAName(name) {return name}


var formPh = (p1, p2, p3) => {
  var asdf = "("+p1+")"+p2+"-"+p3
  return asdf;
}

var formatPhone = (ph1, ph2, ph3) => {
  console.log("\("+ph1+"\)"+ph2+"-"+ph3);
  // console.log(ph1, ph2, ph3);
}

var addCheese = f => { 
  console.log("Would you like some extra " + f + " on that?");
}

var square = n => { return n * n } 


var arrowFunction4 = myArg => {
  console.log(myArg);
}


var arrowFunction3 = (arg1, arg2) => {
  console.log(arg1, arg2);
}

var arrowFunction2 = () => {
  return 'Arrow functions are great!, but I still like the old ones too.';
}
 
// ----------------------------------
// var arg1 = "asdf"
// var arg2 = "blurf"
// var arrowFunctionArg = (arg1, arg2) => {
//   console.log(arg1, arg2)
// }

var arrowFunction = () => {
  console.log('I was called!')
}

function outerFunction() {
    var innerVariable = "SS#xxx-xxx-xxxx";
    return function innerScope() {
    var inaccessible = "Nothing can touch me.";
    return innerVariable;
  }
}
 
//---------------------see test file -------------------------------
function goToEleven(){
  volume = 11;  //changes the global variable to 11
  return volume;
}

volume = 10;
function returnEleven () {
  var volume = 11;  //declares a local variable called volume and sets it to 11
  return volume;
}
// -----------------------------------------------------------------


var cuteAnimal = 'quokka';
function makeLocalVariable() {
  var cuteAnimal = 'sugar glider';
  return cuteAnimal;
}

function speakerReturn() {
  var sentence = 'Bird is the word.';
  // console.log(sentence); the test is designed to evaluate use of 'return'
  return sentence;
}

function speakerConsole() {
  var sentence = 'Bird is the word.';
  console.log(sentence);
  // return sentence; the test is designed to evaluate use of console.log
}

function shout(string) {
  return string.toUpperCase();
} 

function medShout(string) {
  return string[0]+string.slice(1, string.length).toUpperCase();
} 

function whisper(string) {
  return string.toLowerCase();
} 

function logShout(string) {
  console.log(string.toUpperCase());
} 
 
function logWhisper(string) {
  console.log(string.toLowerCase());
} 
 
function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === "I love you, Grandma.") {
    return "I love you, too.";
  }
}


// var cuteAnimal = 'quokka';
// function makeVariable() {
//   var cuteAnimal = 'sugar glider';
//   return cuteAnimal;
// }








