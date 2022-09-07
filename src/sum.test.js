const sum = require("./sum");

test("add 1 + 2 to be equals 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("add 2 + 2 to be equals 4", () => {
  expect(sum(2, 2)).toBe(4);
});
