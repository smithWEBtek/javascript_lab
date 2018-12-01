

function fizzbuzz() {
	let arr = [...Array(101).keys()].slice(1, 101)
	// console.log(arr);
	arr.forEach((i) => {
		if (i % 3 == 0 && i % 5 == 0) {
			console.log("fizzbuzz");
		} else if (i % 3 == 0) {
			console.log("fizz");
		} else if (i % 5 == 0) {
			console.log("buzz");
		} else {
			console.log(i)
		}
	})
}


fizzbuzz()