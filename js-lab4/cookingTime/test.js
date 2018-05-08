
const cookingTime = require('./index');

beforeEach(() => {
	jest.spyOn(console, 'log');
});

afterEach(() => {
	console.log.mockRestore();
});

test('cookingTime is a function', () => {
	expect(typeof cookingTime).toEqual('function');
});

test('cookingTime is called with [1, 2]', () => {
	expect(cookingTime([1, 2])).toEqual(
		'yes, ascending'
	);
});

test('cookingTime is called with [4,2,30]', () => {
	expect(cookingTime([[4, 2, 30]])).toEqual(
		'no'
	);
});
