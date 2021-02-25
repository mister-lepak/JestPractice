import { TestScheduler } from "jest";
import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyze,
  fetchData,
} from "./index";
// AFTER
jest.mock("node-fetch");
import fetch from "node-fetch";
const { Response } = jest.requireActual("node-fetch");

test("Takes a string and returns that string with the first character capitalized", () => {
  const stringInput = "test";
  expect(capitalize(stringInput)).toMatch("Test");
});

test("Takes a string and returns it reversed", () => {
  const stringInput = "apple";
  expect(reverseString(stringInput)).toMatch("elppa");
});

test("Test object with basic operations: add, subtract, divide and multiply", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(5, 3)).toBe(2);
  expect(calculator.divide(81, 9)).toBe(9);
  expect(calculator.multiply(3, 7)).toBe(21);
});

test("Test Caesar Cipher", () => {
  expect(caesarCipher("attack at dawn", 5)).toMatch("fyyfhp fy ifbs");
});

test("takes an array of numbers and returns an object with the following properties: average, min, max, and length.", () => {
  const data = [1, 8, 3, 4, 2, 6];
  expect(analyze(data)).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});

test("the data is 28", () => {
  return fetchData("https://www.balldontlie.io/api/v1/teams/28").then(
    (data) => {
      expect(data.id).toBe("28");
    }
  );
});
