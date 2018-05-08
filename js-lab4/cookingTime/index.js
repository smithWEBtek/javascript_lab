function cookingTime(np, m, s, p) {
	let tms = Math.ceil((m * 60) + s)
	let tcs = parseInt(np) * tms
	let pms = Math.ceil(tcs / parseInt(p))
	let result = `${parseInt(Math.floor(pms / 60))} minutes ${(parseInt(pms % 60))} seconds`
	console.log(result);
	return result
}

cookingTime("600W", 4, 20, "800W")


module.exports = cookingTime;