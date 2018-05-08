function isSortedAndHow(array) {
	let testArr = [...array]
	if (JSON.stringify(array) == JSON.stringify(testArr.sort((a, b) => a < b ? -1 : 1))) {
		return "yes, ascending"
	}
	if (JSON.stringify(array) == JSON.stringify(testArr.sort((a, b) => a > b ? -1 : 1))) {
		return "yes, descending"
	} else {
		return "no"
	}
}

isSortedAndHow([1, 2])
isSortedAndHow([4, 2, 30])


module.exports = isSortedAndHow;