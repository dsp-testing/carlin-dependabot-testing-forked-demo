const _ = require('lodash');

function dummyFunction() {
  return _.map([1, 2, 3], (num) => num * 2);
}

module.exports = dummyFunction;
