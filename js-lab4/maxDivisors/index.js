const divNum = (x, y) => {
	let list = [];
	let intWithMaxDivisors = 0
	let maxDivisorCount = 0
	let divs = []
	for (var i = x; i <= y; i++) {
		list.push(i);
	}

	for (let i = 0; i < list.length; i++) {
		// divs = []
		let mod = 0;
		let divisorCount = 0;
		while (mod < y) {
			if (list[i] % mod === 0) {
				divisorCount++;
			}
			if (divisorCount >= maxDivisorCount) {
				divs.push(list[i])
				maxDivisorCount = divisorCount
				intWithMaxDivisors = list[i]
			}
			mod++;
		}
	}
	console.log('intWithMaxDivisors: ', intWithMaxDivisors)
	console.log('divs: ', divs.filter((v, i, a) => a.indexOf(v) === i));

	let uniqueDivs = divs.filter((v, i, a) => a.indexOf(v) === i)
	return uniqueDivs[uniqueDivs.length - 1]
}

divNum(15, 30)
divNum(15, 30); // 24
divNum(1, 2); // 2
divNum(1, 2); // 2
divNum(52, 156); // 120