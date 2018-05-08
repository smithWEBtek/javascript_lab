function longestConsec(strarr, k) {
	let sortedWords = strarr.sort((a, b) => a.length > b.length ? -1 : 1)
		.filter((v, i, a) => a.indexOf(v) === i);

	let result = sortedWords.slice(0, k)


	return result.join('')
}

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)