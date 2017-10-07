let str1 = "is2 Thi1s T4est 3a"
let str2 = "4of Fo1r pe6ople g3ood th5e the2"

function order(wordsGroup){
  let wordsArray = wordsGroup.split(' ')
  numberFinder(wordsArray)
}

function numberFinder(wordsArray){
  let num = 0
  let wordLetterArray = []
  let wordsObj = []
  for (const word of wordsArray){
    wordsObj.push(makeWordNumberPairs(word))
  }
  // sort the wordsObj by key
  sortProperties(wordsObj)
  // 0: {is2: "2"}
  // 1: {Thi1s: "1"}
  // 2: {T4est: "4"}
  // 3: {3a: "3"}

  // construct the grouping of words in order by wordsObj[key]

  // console.log(wordsObj)
  debugger
}

function makeWordNumberPairs(word){
  wordLetterArray = word.split('')
  let obj = {}
  let num = 0
  for (let char of wordLetterArray){
    if (char.match(/\d/))
      obj[word] = char
  }
  return obj
}

function sortProperties(obj){
  // convert object into array
	let sortable=[];
	for(let key in obj)
		if(obj.hasOwnProperty(key))
			sortable.push([key, obj[key]]); // each item is an array in format [key, value]
      debugger
	
	// sort items by value
	sortable.sort(function(a, b)
	{
		let x=a[1]
			y=b[1]
		return x<y ? -1 : x>y ? 1 : 0
  });
	return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
}