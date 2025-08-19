import {
  FactorialCommand,
  TenInSelectedDegree,
  NegativeDigree,
  ToggleSign,
  SecondDegree,
  ThirdDegree,
  Sqrt,
  SqrtCbt,
} from "@math/MathFunctions";

function initCalculatorEventListeners(calculator) {
  /// Вывод вычислений на экран
  document.querySelector(".btn_equal").addEventListener("click", () => {
    calculator.renderCalculate();
  });

  // Сброс дисплея
  document.querySelector(".btn_reset").addEventListener("click", () => {
    calculator.reset();
  });

  // Факториал числа
  document.querySelector(".btn_factorial").addEventListener("click", () => {
    calculator.executeCommand(new FactorialCommand(calculator, calculator.firstNumber));
  });

  // Возведение 10 в указанную степень
  document.querySelector(".btn_tenPowNumber").addEventListener("click", () => {
    calculator.executeCommand(new TenInSelectedDegree(calculator, calculator.firstNumber));
  });

  // Отрицательная степень, 1/x
  document.querySelector(".btn_number_x").addEventListener("click", () => {
    calculator.executeCommand(new NegativeDigree(calculator, calculator.firstNumber));
  });

  // Смена знака
  document.querySelector(".btn_changeSybol").addEventListener("click", () => {
    calculator.executeCommand(new ToggleSign(calculator));
  });

  // число во второй степени
  document.querySelector(".btn_nuberPowTwo").addEventListener("click", () => {
    calculator.executeCommand(new SecondDegree(calculator, calculator.firstNumber));
  });

  // число в третьей степени
  document.querySelector(".btn_nuberPowThree").addEventListener("click", () => {
    calculator.executeCommand(new ThirdDegree(calculator, calculator.firstNumber));
  });

  // корень квадратный
  document.querySelector(".btn_rootTwoOfNumber").addEventListener("click", () => {
    calculator.executeCommand(new Sqrt(calculator));
  });

  // корень кубический
  document.querySelector(".btn_rootThreeOfNumber").addEventListener("click", () => {
    calculator.executeCommand(new SqrtCbt(calculator));
  });

  // сохранение в памяти
  document.querySelector(".btn_saveInMemory").addEventListener("click", () => {
    calculator.memoryAdd();
  });

  // сброс памяти
  document.querySelector(".btn_MC").addEventListener("click", () => {
    calculator.memoryClear();
  });

  // число на экране приплюсовывается к памяти
  document.querySelector(".btn_MPlus").addEventListener("click", () => {
    calculator.memoryPlus();
  });

  //число на экране отнимается от памяти
  document.querySelector(".btn_MMinus").addEventListener("click", () => {
    calculator.memoryMinus();
  });

  // вывод памяти на рабочий экран
  document.querySelector(".btn_MR").addEventListener("click", () => {
    calculator.memoryInDisplay();
  });
}

export { initCalculatorEventListeners };
