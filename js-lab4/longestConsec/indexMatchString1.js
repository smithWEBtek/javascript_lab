let words = ["abigail", "dealt", "lab", "libe", "zas", "wxyz"]
// let alphaArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// let alphaStr = "abcdefghijklmnopqrstuvwxyz"

function longestConsec(strarr, k) {
	let result = []
	let alphaStr = "abcdefghijklmnopqrstuvwxyz"

	strarr.forEach(word => {
		for (let i = 0; i < word.length - 1; i++) {
			let segment = word.split('').splice(i, k).join('')
			if (alphaStr.match(segment)) {
				result.push(word)
			}
		}
	})
	return result.join('')
}



longestConsec(words, 2)