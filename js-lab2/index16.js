
function getMethods(obj)
{
    var res = [];
    for(var m in obj) {
        if(typeof obj[m] == "string") {
            res.push(m)
        }
    }
    console.log(res);
}

const newPiano = function (brand, model, finish){
  let piano = {}
  piano["brand"] = brand
  piano["model"] = model
  piano["finish"] = finish
  pianos.push(piano)
  return pianos  
}

const forOfCallBack = function (arr, cb) {
  for (const el of arr) {
    cb(el, arr.indexOf(el), arr);
  }
};

const callback = function (el, i, arr) {
  console.log('The current element is', el);
  console.log('The index of the current element is', i);
  console.log('The current array is', arr);
  console.log('----------------');
};
 
// ['Red', 'Yellow', 'Blue'].forEach(callback);

const myForEach = function (arr, cb) {
  for (const el of arr) {
    cb(el, arr.indexOf(el), arr);
  }
}

const showNestedObjects = function(obj, objKeys, cb){
  for(const key of objKeys){
    console.log(key + ": ")
    console.log(obj[key])
    cb(obj[key])
  }
}

const assignAllOwnersPianos = function (obj, objKeysArr, arr){
  for (let i = 0; i < objKeysArr.length; i++){
    if (!pianos[i]){
      obj[objKeysArr[i]]["piano"] = "no piano assigned"
    } else {
      assignOwnerToPiano(obj[objKeysArr[i]], arr[i])
    }
  }
  showOwnersPianos(obj)
}

function showOwnersPianos(obj){
  for (let owner in obj){
    console.log(owner + ": ")
    console.log(obj[owner].piano)
  }
}

const assignToArr = function (element, arr){
  for (const el of arr){
    let keyName = arr
  }
  element["piano"] = piano
}

const assignPiano = function (el, i, arr, keyName){ 
  arr.push(el[keyName] = pianos[i])
}

function assignPianos (arr) {
  for (const el of arr){
    assignToPiano(el, arr.indexOf(el), arr)
  }
}

const stringAsc = function (a,b){
  String(a) < String(b)
}

const primeFinder = function (num){
  if (num % 2 === 0){
    return false
  } else {
    return num
  }
}

function findFirst10Primes(){
  // make an array of integers from 1 to 100
  const nums = [...Array(100).keys()]
  // make a newArray = [] to hold the prime nos you return
  const newArray = []
  
  // pass each element to the primeFinder callback function
  for (const n of nums){
    let temp = primeFinder(n)
    if (temp != false ){
      newArray.push(temp)
    }
  }
  // return the newArray of prime numbers
  // limit the arry to the first 10
  return newArray.slice(0,10)
}