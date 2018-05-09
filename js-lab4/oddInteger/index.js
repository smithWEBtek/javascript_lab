function findOdd(arr) {
	// arrCopy = arr
	// set a mainCount = 0
	// for each element in array
	// set arrCount = 0
	// remove element from array
	// check array for existence of same element
	// if present, count ++

	// count number of occurences of [] in arr 
	// for each occurence, increment count 

	let arrCopy = arr
	let mainCount = 0
	let
	for (let i = 0; i < arrCopy.length; i++) {
		let itemCount = 0
		let item = arrCopy[i]
		arrCopy.shift()
		if (arrCopy.includes(item)) {
			itemCount += 1
		}
		if (mainCount < itemCount) {
			mainCount = itemCount

		}
	}



	let carr = barr.filter(function (item, i, ar) {
		if (ar.indexOf(item) !== i) {
			count += 1
			return ar.indexOf(item) !== i
		};
	});
	console.log('count: ', count)
	console.log('carr: ', carr);
	// debugger
}

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])
//, 5);

findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])
//, -1);

findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])
//, 5);

findOdd([10])
//, 10);

findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])
//, 10);

findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])
	//, 1);