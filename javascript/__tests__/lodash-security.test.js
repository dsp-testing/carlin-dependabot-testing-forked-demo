var _ = require('lodash');

describe.each(['unset', 'omit'])('%s prototype protection', function (method) {
  test.each(['__proto__.toString', 'constructor.prototype.toString'])(
    'does not delete Object.prototype through %s',
    function (path) {
      var descriptor = Object.getOwnPropertyDescriptor(Object.prototype, 'toString');

      try {
        _[method]({}, path);
        expect(Object.getOwnPropertyDescriptor(Object.prototype, 'toString')).toEqual(descriptor);
      } finally {
        Object.defineProperty(Object.prototype, 'toString', descriptor);
      }
    }
  );
});

test('unset and omit still remove ordinary nested properties', function () {
  var object = { nested: { keep: true, remove: true } };

  expect(_.omit(object, 'nested.remove')).toEqual({ nested: { keep: true } });
  expect(object.nested.remove).toBe(true);
  expect(_.unset(object, 'nested.remove')).toBe(true);
  expect(object).toEqual({ nested: { keep: true } });
});
