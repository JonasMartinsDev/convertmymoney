const convert = require("./convert");

test("convert contacao 4 and quantidade 4", () => {
  expect(convert.convert(4, 4)).toBe(16);
});

test("convert contacao 0 and quantidade 4", () => {
  expect(convert.convert(0, 4)).toBe(0);
});

test("toMoney converts float", () => {
  expect(convert.toMoney(2)).toBe("2.00");
});

test("toMoney converts string", () => {
  expect(convert.toMoney("2")).toBe("2.00");
});
