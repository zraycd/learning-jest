const analyzeArray = require("./analyzeArray");
const caesarCipher = require("./caesarCipher");
const calculator = require("./calculator");
const capitalize = require("./capitalize");
const reverseString = require("./reverseString");

test("check if first letter capitalization works", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});
test("check if rever`se`s string correctly", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});
test("check calculator functions", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(4, 2)).toBe(2);
  expect(calculator.divide(10, 4)).toBe(2.5);
  expect(calculator.multiply(6, 2.5)).toBe(15);
});
test("check shifting", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, world!", 3)).toBe("Khoor, zruog!");
});
test("check if function properly returns object", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
