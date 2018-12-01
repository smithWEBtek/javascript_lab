
let input = document.getElementById('asdf').textContent
let myButton = document.getElementById('asdf')

myButton.addEventListener(input, function (e) {
	e.preventDefault()
	document.getElementById('main').innerText = input
})
