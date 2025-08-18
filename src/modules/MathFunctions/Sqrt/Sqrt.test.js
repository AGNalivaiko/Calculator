import { Sqrt } from "./Sqrt.js";

describe("Sqrt", () => {
  test("корень из 4 равен 2", () => {
    const context = { firstNumber: "4" };
    const result = new Sqrt(context).execute();
    expect(result).toBeCloseTo(2, 10);
  });

  test("корень из 0 равен 0", () => {
    const context = { firstNumber: "0" };
    const result = new Sqrt(context).execute();
    expect(result).toBe(0);
  });

  test("корень из 9 равен 3", () => {
    const context = { firstNumber: "9" };
    const result = new Sqrt(context).execute();
    expect(result).toBeCloseTo(3, 10);
  });

  test("корень из 2 приблизительно 1.4142...", () => {
    const context = { firstNumber: "2" };
    const result = new Sqrt(context).execute();
    expect(result).toBeCloseTo(Math.sqrt(2), 10);
  });

  test("корень из отрицательного числа — NaN", () => {
    const context = { firstNumber: "-16" };
    const result = new Sqrt(context).execute();
    expect(result).toBeNaN();
  });

  test("результат больше 4 при вводе 25", () => {
    const context = { firstNumber: "25" };
    const result = new Sqrt(context).execute();
    expect(result).toBeGreaterThan(4);
  });

  test("результат меньше 6 при вводе 25", () => {
    const context = { firstNumber: "25" };
    const result = new Sqrt(context).execute();
    expect(result).toBeLessThan(6);
  });

  test("корректно работает с нецелыми числами", () => {
    const context = { firstNumber: "0.25" };
    const result = new Sqrt(context).execute();
    expect(result).toBeCloseTo(0.5, 10);
  });
});
