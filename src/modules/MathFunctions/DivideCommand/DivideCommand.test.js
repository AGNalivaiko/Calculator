import { DivideCommand } from "./DivideCommand.js";

beforeAll(() => {
  global.alert = jest.fn();
});

describe(DivideCommand, () => {
  test("Провека деления", () => {
    const context = {};
    expect(new DivideCommand(context, 9, 3).execute()).toBe(3);
  });
  test("Деление на ноль", () => {
    const context = { reset: jest.fn() };
    expect(new DivideCommand(context, 9, 0).execute()).toBe("");
    expect(global.alert).toHaveBeenCalledWith("На ноль делить нельзя");
    expect(context.reset).toHaveBeenCalled();
  });
});
