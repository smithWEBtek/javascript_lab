

function chessboard(size) {
	let str = ''

	for (i = 0; i < size / 2; i++) {
		for (j = 0; j < size / 2; j++) {
			str += ' '
			str += '#'
		}
		str += '\n'
		for (k = 0; k < size / 2; k++) {
			str += '#'
			str += ' '
		}
		str += '\n'
	}
	console.log(str);
}

chessboard(6); 