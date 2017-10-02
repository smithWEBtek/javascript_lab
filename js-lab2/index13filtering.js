let evens = [2,4,6,8,10]
let odds = [1,3,5,7,9,11]
let mixedNums = [1,2,3,4,5,6,7,8,9]
let mixedCaseLetters = ['a','e','b','h','y','r','d','Y','E','G','o','u','j','h']
let mixedNumsAndLetters = [4,'f','h',4,'t',3,'r', 5,'D',3,'t','q',4,'B',7,9,'E']
let myString = ""

function filterEvens(arr){
  let filtered = []
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0) {
      filtered.push(arr[i])
    }
  }
  console.log(filtered)
}

function filterOdds(arr){
  let filtered = []
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 !== 0) {
      filtered.push(arr[i])
    }
  }
  console.log(filtered)
}

function isOdd(n){
 if (n % 2 !== 0){
   return true 
 }
}

function isEven(n){
  if (n % 2 === 0){
  return true
  }
}

function checkIt(item){
  if (typeof item === "string"){
    myString += item
  } else if (isOdd(item)){
    console.log(item + " is ODD!!")
  } else if (isEven(item)){
    console.log(item + " is EVEN!!")
  }
}

function cleanMyArray(arr){
  myString = ""
  console.log("myString is currently: blank")  
  for (let item of arr){
    checkIt(item)
  }
  if (myString.length > 0) {
    console.log("myString is currently: " + myString)
  }
}