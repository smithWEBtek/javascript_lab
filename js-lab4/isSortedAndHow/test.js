// describe("isSortedAndHow", function() {

//   it("[1, 2]", function() {
//     Test.assertEquals(isSortedAndHow([1, 2]), 'yes, ascending');
//   });

//   it("[15, 7, 3, -8]", function() {
//     Test.assertEquals(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
//   });

//   it("[4, 2, 30]", function() {
//     Test.assertEquals(isSortedAndHow([4, 2, 30]), 'no');
//   });

// });

const isSortedAndHow = require('./index');

beforeEach(() => {
	jest.spyOn(console, 'log');
});

afterEach(() => {
	console.log.mockRestore();
});

test('isSortedAndHow is a function', () => {
	expect(typeof isSortedAndHow).toEqual('function');
});

test('isSortedAndHow is called with [1, 2]', () => {
	expect(isSortedAndHow([1, 2])).toEqual(
		'yes, ascending'
	);
});

test('isSortedAndHow is called with [4,2,30]', () => {
	expect(isSortedAndHow([[4, 2, 30]])).toEqual(
		'no'
	);
});
