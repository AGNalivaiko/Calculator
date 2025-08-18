import { MultiplyCommand } from "./MultiplyCommand.js";

describe("MultiplyCommand", () => {
  test("Должен умножать цифры", () => {
    const context = {};
    expect(new MultiplyCommand(context, 3, 3).execute()).toBe(9);
  });
  test("Должен работать с нулем", () => {
    const context = {};
    expect(new MultiplyCommand(context, 0, 7).execute()).toBe(0);
  });
  test("Должен работать с единицой", () => {
    const context = {};
    expect(new MultiplyCommand(context, 7, 1).execute()).toBe(7);
  });
  test("Должен работать с отрицательными числами", () => {
    const context = {};
    expect(new MultiplyCommand(context, 7, -1).execute()).toBe(-7);
  });
});
