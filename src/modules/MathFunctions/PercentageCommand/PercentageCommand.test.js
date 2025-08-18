import { PercentageCommand } from "./PercentageCommand.js";

describe("PercentageCommand", () => {
  test("Проверка работы с положительными числами", () => {
    const context = {};
    expect(new PercentageCommand(context, 4, 100).execute()).toBe(4);
  });
  test("Проверка работы с отрицательными числами", () => {
    const context = {};
    expect(new PercentageCommand(context, -4, 100).execute()).toBe(-4);
  });
});
