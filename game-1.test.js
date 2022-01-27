const findResult = require('./game-1');

test('solution found', () => {
    const numbers = findResult([2, 5, 8, 14, 0], 10);
    expect(numbers).toEqual([2, 8]);
});

test('Solution not found', () => {
    const numbers = findResult([1, 14, 20, 5], 10);
    expect(numbers).toEqual('Not found');
});

test('Solution found', () => {
    const numbers = findResult([-2, 4, 8, 9], 2);
    expect(numbers).toEqual([-2, 4]);
});

test('Solution found', () => {
    const numbers = findResult(['a', 1.1, 2, 4, 'b', 6, 8], 8);
    expect(numbers).toEqual([2, 6]);
});

test('Solution found', () => {
    const numbers = findResult([1, 1, 1], 2);
    expect(numbers).toEqual([1, 1]);
});

test('Solution not found', () => {
    const numbers = findResult([1, 1, 1], 3);
    expect(numbers).toEqual('Not found');
});