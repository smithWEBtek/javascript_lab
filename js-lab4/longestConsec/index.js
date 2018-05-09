// You are given an array arr of strings and an integer k. 
// Your task is to return the first longest string consisting of k consecutive strings taken in the array.
// #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

function longestConsec(arr, k) {
	if (arr.length === 0 || arr.length === k || k > arr.length || k <= 0) {
		return "";
	}

	let longestGroup = []
	if (k === 1) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i].length > longestGroup.length) {
				longestGroup = arr[i]
			}
		}
		return longestGroup.toString()
	}

	for (let i = 0; i < arr.length - 1; i++) {
		let group = arr.slice(i, k + i)

		if (group.join('').length > longestGroup.join('').length) {
			longestGroup = group
		}

	}
	let result = longestGroup
	longestGroup = []
	return result.join('')
}

// let sortedWords = arr.sort((a, b) => a.length > b.length ? -1 : 1)
// 	.filter((v, i, a) => a.indexOf(v) === i);
// let result = sortedWords.slice(0, k)


longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
//"abigailtheta")

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
//"abigailtheta")

longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)
//"oocccffuucccjjjkkkjyyyeehh")

longestConsec([], 3)
// "")

longestConsec(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)
//"wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")

longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2)
//"wlwsasphmxxowiaxujylentrklctozmymu")

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)
// "")

longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3)
//"ixoyx3452zzzzzzzzzzzz")

longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15)
//"")

longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0)
//"")
