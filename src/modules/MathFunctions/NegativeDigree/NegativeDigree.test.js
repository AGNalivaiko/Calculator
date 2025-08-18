import { NegativeDigree } from "./NegativeDigree.js";
beforeAll(() => {
  global.alert = jest.fn();
});

describe(NegativeDigree, () => {
  test("Проверка функции", () => {
    const context = {};
    expect(new NegativeDigree(context, 2).execute()).toBe("0.5");
  });
  test("Работа с отрицательными числами", () => {
    const context = {};
    expect(new NegativeDigree(context, -2).execute()).toBe("-0.5");
  });
  test("Проверка работы с нулём", () => {
    const context = {};
    expect(new NegativeDigree(context, 0).execute()).toBe(undefined);
    expect(global.alert).toHaveBeenCalledWith("Введите число");
  });
});
