
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

const totalPianos = function (pianos) {
  let totalPrice = 0
  pianos.forEach(function (member){
    totalPrice += member.price
  })
  return totalPrice
}

const listObjKeyValues = function (obj, keyName){
  let keyValues = []
  for (const member of obj){
    keyValues.push(member[keyName])
  }
  return keyValues
} 

const getTotalAmountForProducts = function (products) {
  let totalPrice = 0

  prodcuts.forEach(function (products){
    totalPrice += product.price 
  })
  return totalPrice 
}

const gatherProductNames = function (products) {
  const names = [];
  products.forEach(function (product) {
    names.push(product.name);
  });
  return names;
};

const reduceProductNames = function (agg, el, i, arr) {
  console.log('The aggregate up to this point is:', agg);
  console.log("The current element's name is:", el.name);
  console.log('The index of the current element is:', i);
  console.log('----------------');
 
  // return [...agg, el.name];
};

// products.reduce(reduceProductNames, []);

const reduceProductPrices = function (agg, el, i, arr) {
  console.log('The aggregate up to this point is:', agg);
  console.log('The index of the current element is:', i);
  console.log("The current element's price is:", el.price);
  console.log('----------------');
 
  return agg + el.price;
};

// products.reduce(reduceProductPrices, 0);

const stringify = function (agg, el, i, arr) {
  let stringifiedElement = el.name + ' is $' + el.price + '. ';
  if (i === arr.length - 1) {
    stringifiedElement += 'The total price is $' + (agg.totalPrice + el.price) + '.';
    return agg.string + stringifiedElement;
  }
  return {
    string: agg.string + stringifiedElement,
    totalPrice: agg.totalPrice + el.price
  };
};
 
// products.reduce(stringify, { string: '', totalPrice: 0 });

 
const figureTax = function (item, priceInCents, exemtItems, rate, country) {
  const formattedPrice = '$' + (priceInCents / 100).toFixed(2);
 
  const exemptItems = ['queso', 'futbol', 'tequila', 'avocado'];
  const exempt = exemptItems.indexOf(item.toLowerCase()) > -1;
 
  const taxRate = 0.05;
  const taxDue = exempt ? 0 : priceInCents * taxRate / 100;
  const formattedTaxDue = '$' + taxDue.toFixed(2);
 
  console.log(`In Mexico, ${item} costs ${formattedPrice}.`);
  console.log('That item', exempt ? 'is' : 'is not', 'exempt from taxation.');
  console.log(`The total tax due is: ${formattedTaxDue}.`);
};
 
const newTaxFunction = function (countryName, taxRate, ...exemptItems) {
  return function (item, priceInCents) {
// debugger

    const formattedPrice = '$' + (priceInCents / 100).toFixed(2);
    const exempt = exemptItems.indexOf(item) > -1;
    const taxDue = exempt ? 0 : priceInCents * taxRate / 100;
    const formattedTaxDue = '$' + taxDue.toFixed(2);
 
    console.log(`In ${countryName}, ${item} costs ${formattedPrice}.`);
    console.log('That item', exempt ? 'is' : 'is not', 'exempt from taxation.');
    console.log(`The total tax due is: ${formattedTaxDue}.`);
  };
};

const franceTax = newTaxFunction('France', 0.15, 'wine', 'macaron', 'baguette', 'croissant');

const canadaTax = newTaxFunction('Canada', 0.125, 'maple syrup', 'poutine', 'kindness');

const mexicoTax = newTaxFunction('Mexico', 0.05, 'queso', 'futbol', 'tequila', 'avocado');

const croatiaTax = newTaxFunction("Croatia", .33, "chocolate bar", "dental floss")

