import { NumberInSelectedDegreeCommand } from "./NumberInSelectedDegreeCommand.js";

beforeAll(() => {
  global.alert = jest.fn();
});

describe("NumberInSelectedDegreeCommand", () => {
  test("Проверка работы с положительными числами", () => {
    const context = {};
    expect(new NumberInSelectedDegreeCommand(context, 2, 3).execute()).toBe(8);
  });
  test("Работа с отрицательными числами", () => {
    const context = {};
    expect(new NumberInSelectedDegreeCommand(context, -2, 3).execute()).toBe(undefined);
    expect(global.alert).toHaveBeenCalledWith("Введите положительные числа");
    expect(global.alert).toHaveBeenCalled();
  });
});
