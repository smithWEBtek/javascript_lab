const arr1 = [0, 2, 7, 0]

function highest(arr) {
	let h = 0
	arr.forEach(el => {
		if (el > h) { h = el }
	})
	return h
}

function memAllocate(arr) {
	let d = arr.length - 1 			//Length of arr -1 = Divisor
	let h = highest(arr)				//Highest value in arr
	let i = arr.indexOf(h)			//Index of Highest
	let r = arr[i] 							//element to Redistribute
	let a = parseInt(r / d)  		//Allocation amount
	let rem = h - (a * d)
	// debugger
	console.log('Allocation: ', a)
	console.log('rem: ', rem)
	// add a to each element that is NOT h
	// arr.map(el => el = el + a)

	for (j = 0; j < d; j++) {
		arr
	}
	arr[i] = rem
	console.log('arr', arr)
	// return arr
}

