const {
  add,
  subtract,
  multiple,
  divide,
  isGreater,
  square,
} = require("../src/calculator");

// Equality

describe("Calculation TestCases", () => {
  test("Add 2 numbers", () => {
    let sum = add(1, 2);
    expect(sum).toBe(3);
  });

  test("Subtract 2 numbers", () => {
    let sub = subtract(8, 4);
    expect(sub).toBe(4);
  });

  test("Multiple 2 numbers", () => {
    let product = multiple(5, 3);
    expect(product).not.toBe(18);
  });

  test("Divide 2 numbers", () => {
    let div = divide(50, 2);
    expect(div).toBe(25);
  });
});

// Truthiness Assertion

describe("Truthiness Assertion", () => {
  test("should return a truthy value for a number greater than 10", () => {
    const result = isGreater(20);
    expect(result).toBeTruthy();
  });

  test("should return a falsy value for a number not greater than 10", () => {
    const result = isGreater(4);
    expect(result).toBeFalsy();
  });
});

// Numeric comparison

describe("Square Function", () => {
  test("should correctly calculate the square of a number greater than the expected value", () => {
    expect(square(5)).toBeGreaterThan(20);
  });

  test("should correctly calculate the square of a number greater than or equal to the expected value", () => {
    expect(square(10)).toBeGreaterThanOrEqual(100);
  });

  test("should correctly calculate the square of a number less than the expected value", () => {
    expect(square(4)).toBeLessThan(20);
  });

  test("should correctly calculate the square of a number less than or equal to the expected value", () => {
    expect(square(8)).toBeLessThanOrEqual(85);
  });
});
