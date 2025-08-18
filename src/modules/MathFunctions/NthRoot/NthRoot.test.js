import { NthRoot } from "./NthRoot.js";

describe("NthRoot", () => {
  test("корень 2-й степени из 16 равен 4", () => {
    const context = { firstNumber: "16", secondNumber: "2" };
    const result = new NthRoot(context).execute();
    expect(result).toBeCloseTo(4, 10);
  });

  test("корень 3-й степени из 27 равен 3", () => {
    const context = { firstNumber: "27", secondNumber: "3" };
    const result = new NthRoot(context).execute();
    expect(result).toBeCloseTo(3, 10);
  });

  test("корень 4-й степени из 81 равен 3", () => {
    const context = { firstNumber: "81", secondNumber: "4" };
    const result = new NthRoot(context).execute();
    expect(result).toBeCloseTo(3, 10);
  });

  test("корень 3-й степени из -8 равен -2", () => {
    const context = { firstNumber: "-8", secondNumber: "3" };
    const result = new NthRoot(context).execute();
    expect(result).toBeCloseTo(-2, 10);
  });

  test("корень 2-й степени из -4 — недопустимо, возвращает NaN", () => {
    const context = { firstNumber: "-4", secondNumber: "2" };
    const result = new NthRoot(context).execute();
    expect(result).toBeNaN();
  });

  test("степень ≤ 0 — возвращает NaN", () => {
    const context = { firstNumber: "25", secondNumber: "0" };
    const result = new NthRoot(context).execute();
    expect(result).toBeNaN();
  });

  test("нулевое значение x — результат 0", () => {
    const context = { firstNumber: "0", secondNumber: "5" };
    const result = new NthRoot(context).execute();
    expect(result).toBe(0);
  });

  test("результат больше определённого числа", () => {
    const context = { firstNumber: "1000", secondNumber: "3" };
    const result = new NthRoot(context).execute();
    expect(result).toBeGreaterThan(9);
  });

  test("результат меньше определённого числа", () => {
    const context = { firstNumber: "1000", secondNumber: "3" };
    const result = new NthRoot(context).execute();
    expect(result).toBeLessThan(11);
  });
});
