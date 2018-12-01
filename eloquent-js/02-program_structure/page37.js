// for (let i = ''; i.length < 7; i += "#") {
// 	console.log(i);
// }

function xmasTree(width) {
	let output = []
	for (i = 0; i < width; i++) {
		output.push('#')
	}

	for (i = width; i > 0; i--) {
		console.log(output[i])
	}
}

xmasTree(3)

// 		 #
// 	  ###
//   #####
//  #######
// #########