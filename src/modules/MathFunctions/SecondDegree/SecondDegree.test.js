import { SecondDegree } from "./SecondDegree.js";

beforeAll(() => {
  global.alert = jest.fn();
});

describe("SecondDegree", () => {
  test("Работа с положительными числами", () => {
    const context = {};
    expect(new SecondDegree(context, 2).execute()).toBe(4);
  });
  test("Работа с нулём", () => {
    const context = {};
    expect(new SecondDegree(context, 0).execute()).toBe(undefined);
    expect(global.alert).toHaveBeenCalledWith("Введите число");
  });
});
