const dummyFunction = require('../index');

test('dummyFunction should fail', () => {
  expect(dummyFunction()).toBe([2, 4, 6]); // This will fail because toBe is used instead of toEqual
});
