

// You are given an array strarr of strings and an integer k. 
// Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".


function longestConsec(strarr, k) {
	if (k <= 0 || k > strarr.length) { return '' }
	let maxLength = 0
	let resultArr = []
	for (let i = 0; i < strarr.length; i++) {
		let groupLength = 0
		let group = strarr.slice([i], k + i)
		group.map(el => groupLength += el.length)
		if (groupLength > maxLength) {
			maxLength = groupLength
			resultArr = group
		}
	}
	return resultArr.join('')
}


longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)






//======================================================
// function longestConsec(strarr, k) {
// 	if (k <= 0 || k > strarr.length) { return '' }
// 	let maxLength = 0
// 	let resultArr = []
// 	for (let i = 0; i < strarr.length; i++) {
// 		let groupLength = 0
// 		let group = strarr.slice([i], k + i)
// 		group.map(el => groupLength += el.length)
// 		if (groupLength > maxLength) {
// 			maxLength = groupLength
// 			resultArr = group
// 		}
// 	}
// 	return resultArr.join('')
// }


//======================================================
// function longestConsec(strarr, k) {
// 	if (k <= 0) { return "" }

// 	let sortedWords = strarr.sort((a, b) => a.length < b.length ? -1 : 1)
// 	// .filter((v, i, a) => a.indexOf(v) === i);

// 	let result = sortedWords.slice(0, k)
// 	return result.join('')
// }