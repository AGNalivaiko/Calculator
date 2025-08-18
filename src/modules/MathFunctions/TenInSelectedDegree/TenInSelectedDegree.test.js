import { TenInSelectedDegree } from "./TenInSelectedDegree.js";

beforeAll(() => {
  global.alert = jest.fn();
});

describe(TenInSelectedDegree, () => {
  test("Работает с целым неотрицательным числом", () => {
    const context = {};
    expect(new TenInSelectedDegree(context, 2).execute()).toBe(100);
  });

  test("Не работает с целым неотрицательными числами", () => {
    const context = {};
    expect(new TenInSelectedDegree(context, -2.5).execute()).toBe(undefined);
    expect(global.alert).toHaveBeenCalledWith("Введите целое неотрицательное число");
  });

  test("Если отсутствует число", () => {
    const context = {};
    expect(new TenInSelectedDegree(context, 0).execute()).toBe(undefined);
    expect(global.alert).toHaveBeenCalledWith("Введите число");
  });
});
