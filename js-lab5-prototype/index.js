
function Person() {
	this.name = 'Max'
	// this.pet = 'Cat'
	this.greet = function () {
		console.log("Hello, my name is: " + this.name)
	}
}

Person.prototype.greetGeneric = function () {
	console.log("Hey there!")
}

Person.prototype.pet = console.log("Hey is this your cat?")


var mary = new Person();
mary.name = "MaryBeth"


function Friend(name, town) {
	this.name = name
	this.town = town
}

var friend1 = new Friend("Bob", "Boston")
var friend2 = new Friend("Mary", "Newton")

console.log(friend1);
console.log(friend2);