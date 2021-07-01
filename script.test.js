import * as jsf from "./script";

test("should return a random number between min and max", () => {
  const output = jsf.randomNumber(1, 2);
  expect(output === 1 || output === 2).toBeTruthy();
});

test("should return a capitalized string", () => {
  expect(jsf.capitalize("cat")).toBe("Cat");
  expect(jsf.capitalize("")).toBe("");
});
