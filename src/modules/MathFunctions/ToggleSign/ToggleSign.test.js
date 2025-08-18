import { ToggleSign } from "./ToggleSign.js";

describe("ToggleSign", () => {
  test("меняет знак первого числа, если оператор не установлен", () => {
    const context = {
      firstNumber: 3,
      operator: null,
      secondNumber: null,
    };
    new ToggleSign(context).execute();
    expect(context.firstNumber).toBe("-3");
  });

  test("меняет знак второго числа, если оператор установлен", () => {
    const context = {
      firstNumber: 3,
      operator: "+",
      secondNumber: 5,
    };
    new ToggleSign(context).execute();
    expect(context.secondNumber).toBe("-5");
  });

  test("ничего не делает, если оператор и цифры не установлены", () => {
    const context = {
      firstNumber: null,
      operator: null,
      secondNumber: null,
    };
    new ToggleSign(context).execute();
    expect(context.secondNumber).toBe(null);
  });
});
