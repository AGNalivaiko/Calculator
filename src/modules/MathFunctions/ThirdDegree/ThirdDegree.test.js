import { ThirdDegree } from "./ThirdDegree.js";

beforeAll(() => {
  global.alert = jest.fn();
});

describe(ThirdDegree, () => {
  test("Работа с положительными числами", () => {
    const context = {};
    expect(new ThirdDegree(context, 2).execute()).toBe(8);
  });
  test("Работа с нулём", () => {
    const context = {};
    expect(new ThirdDegree(context, 0).execute()).toBe(undefined);
    expect(global.alert).toHaveBeenCalledWith("Введите число");
  });
});
