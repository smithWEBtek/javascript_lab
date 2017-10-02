
let nums1 = [1,2,3,4,5,6,7,8,9]
let nums2 = [10,11,12,13,14,15,16,17,18,19]
let nums3 = [4,7,2,4,9,2,5,7,8,53,2,4,5,6,6,777,8]
let pets = ["dog", "dog", "cat", "cat", "bird", "bird", "snake", "turtle", "fish", "fish"]

let evens = [0, 2, 4, 6, 8, 10];
let misc = [1,5,2,6,4,7,3,5,2,1];
let fruits = ['apple', 'pear', 'grape'];
let meals = ['breakfast', 'lunch', 'dinner'];
let tools = ['wrench', 'hammer', 'screwdriver'];
let myArrays = fruits.concat(meals.concat(tools.concat(pets)));
 

function sort_unique(arr) {
  if (arr.length === 0) return arr;
  arr = arr.sort(function (a, b) { return a*1 - b*1; });
  // debugger

  let ret = [arr[0]];
  for (let i = 1; i < arr.length; i++) { // start loop at 1 as element 0 can never be a duplicate
      if (arr[i-1] !== arr[i]) {
          ret.push(arr[i]);
      }
  }
  return ret.sort();
}

function mixArrays(ary1, ary2){
  for (let i = 0; i<ary1.length; i++){
    ary2.push(ary1[i])
  }
  sort_unique(ary2)
  return ary2
}


