import { SqrtCbt } from "./SqrtCbt.js";

describe("SqrtCbt", () => {
  test("кубический корень из 27 равен 3", () => {
    const context = { firstNumber: "27" };
    const result = new SqrtCbt(context).execute();
    expect(result).toBeCloseTo(3, 10);
  });

  test("кубический корень из 8 равен 2", () => {
    const context = { firstNumber: "8" };
    const result = new SqrtCbt(context).execute();
    expect(result).toBeCloseTo(2, 10);
  });

  test("кубический корень из 0 равен 0", () => {
    const context = { firstNumber: "0" };
    const result = new SqrtCbt(context).execute();
    expect(result).toBe(0);
  });

  test("кубический корень из дробного числа (0.125) равен 0.5", () => {
    const context = { firstNumber: "0.125" };
    const result = new SqrtCbt(context).execute();
    expect(result).toBeCloseTo(0.5, 10);
  });

  test("кубический корень из 1 равен 1", () => {
    const context = { firstNumber: "1" };
    const result = new SqrtCbt(context).execute();
    expect(result).toBeCloseTo(1, 10);
  });

  test("кубический корень из отрицательного числа — работает корректно (из -8 → -2)", () => {
    const context = { firstNumber: "-8" };
    const result = new SqrtCbt(context).execute();
    expect(result).toBeCloseTo(-2, 10);
  });

  test("результат больше 1 при вводе 10", () => {
    const context = { firstNumber: "10" };
    const result = new SqrtCbt(context).execute();
    expect(result).toBeGreaterThan(1);
  });

  test("результат меньше 3 при вводе 20", () => {
    const context = { firstNumber: "20" };
    const result = new SqrtCbt(context).execute();
    expect(result).toBeLessThan(3);
  });
});
