import { FactorialCommand } from "./FactorialCommand.js";

describe(FactorialCommand, () => {
  test("Проверяем факториал числа", () => {
    const context = {};
    expect(new FactorialCommand(context, 4).execute()).toBe(24);
  });
  test("Работа с нулем", () => {
    const context = {};
    expect(new FactorialCommand(context, 5).execute()).toBe(120);
  });
  test("Работа с нулем", () => {
    const context = {};
    expect(new FactorialCommand(context, 0).execute()).toBe(1);
  });
});
