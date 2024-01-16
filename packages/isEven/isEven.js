'use strict';
const isOdd = require('@vh/isodd');
module.exports = isEven;

function isEven(number) {
  return !isOdd(number);
}
