import { AddCommand } from "./AddCommand.js";

var cm;
describe(AddCommand, () => {
  test("Должен правильно складывать два числа", () => {
    const context = {};
    const command = new AddCommand(context, 2, 3);
    expect(command.execute()).toBe(5);
  });

  test("Должен работать с отрицательными числами", () => {
    const context = {};
    expect(new AddCommand(context, -2, -3).execute()).toBe(-5);
  });

  test("Должен рабоать с нулём", () => {
    const context = {};
    expect(new AddCommand(context, 7, 0).execute()).toBe(7);
  });
});
