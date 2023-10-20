// Equality

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiple = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

// Truthiness Assertion

const isGreater = (num) => {
  return num > 10;
};

// Numeric Comparison Matchers

const square = (number) => {
  return number * number;
};

module.exports = { add, subtract, multiple, divide, isGreater, square };
