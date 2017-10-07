
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

const assignOwnerToPiano = function (owner, piano){
  owner["piano"] = piano
}

const assignAllOwnersPianos = function (obj, objKeysArr, arr){
  for (let key in obj){
    for (const el of arr){
      assignOwnerToPiano(obj[key], el)
    }
  }
}