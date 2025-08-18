import { SubtractCommand } from "./SubtractCommand.js";

describe(SubtractCommand, () => {
  test("Проверка работы на вычитание", () => {
    const context = {};
    expect(new SubtractCommand(context, 6, 3).execute()).toBe(3);
  });
  test("Проверка работы на вычитание c нулём", () => {
    const context = {};
    expect(new SubtractCommand(context, 6, 0).execute()).toBe(6);
  });
  test("Проверка работы на вычитание с отрицательными числами", () => {
    const context = {};
    expect(new SubtractCommand(context, 6, -3).execute()).toBe(9);
  });
});
