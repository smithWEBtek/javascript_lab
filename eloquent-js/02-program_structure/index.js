function asdf(lo, hi) {
	let arr = []
	for (i = 0, j = lo; j <= hi; j++) {
		if (j == 4 || j == 8) {
			console.log('J was = to: ', j);
			continue
		}
		arr.push(j * 2)
	}
	console.log('arr: ', arr);
	return arr
}