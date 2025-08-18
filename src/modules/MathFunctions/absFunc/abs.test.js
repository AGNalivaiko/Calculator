import absFunc from "./abs.js";

describe("absFunc", () => {
  test("Отрицательное значение", () => {
    expect(absFunc(-2)).toBe(2);
  });
  test("Положительное значение", () => {
    expect(absFunc(2)).toBe(2);
  });
});
