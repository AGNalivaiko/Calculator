import { AddCommand } from "../MathFunctions/AddCommand.js";
import { SubtractCommand } from "../MathFunctions/SubtractCommand.js";
import { MultiplyCommand } from "../MathFunctions/MultiplyCommand.js";
import { PercentageCommand } from "../MathFunctions/PercentageCommand.js";
import { NthRoot } from "../MathFunctions/NthRoot.js";
import { NumberInSelectedDegreeCommand } from "../MathFunctions/NumberInSelectedDegreeCommand.js";
import { DivideCommand } from "../MathFunctions/DivideCommand.js";

class Calculator {
  constructor(display, memory, history) {
    this.display = display;
    this.memory = memory;
    this.firstNumber = "";
    this.secondNumber = "";
    this.operator = "";
    this.history = history;
    this.historyList = [];
  }

  updateDisplay() {
    this.display.textContent = this.operator
      ? `${this.firstNumber} ${this.operator} ${this.secondNumber}`
      : this.firstNumber || "0";
  }

  reset() {
    this.firstNumber = "";
    this.secondNumber = "";
    this.operator = "";
    this.updateDisplay();
  }

  calculate() {
    const num1 = +this.firstNumber;
    const num2 = +this.secondNumber;
    let res;

    if (this.firstNumber != "" && this.operator && this.secondNumber != "") {
      switch (this.operator) {
        case "+":
          res = new AddCommand(this, num1, num2).execute();
          break;
        case "-":
          res = new SubtractCommand(this, num1, num2).execute();
          break;
        case "x":
          res = new MultiplyCommand(this, num1, num2).execute();
          break;
        case "%":
          res = new PercentageCommand(this, num1, num2).execute();
          break;
        case "y^(√x)":
          res = new NthRoot(this, num1, num2).execute();
          break;
        case "xʸ":
          res = new NumberInSelectedDegreeCommand(this, num1, num2).execute();
          break;
        case "÷":
          res = new DivideCommand(this, num1, num2).execute();
          break;
        default:
          return;
      }
      this.addToHistory(`${num1} ${this.operator} ${num2} = ${res}`);

      return res;
    } else {
      alert("Неверный ввод: введите 2 числа");
      this.reset();
      return (this.display.textContent = "");
    }
  }

  renderCalculate() {
    this.firstNumber = this.calculate();
    this.secondNumber = "";
    this.operator = "";
    this.display.textContent = this.firstNumber;
  }

  executeCommand(command) {
    const result = command.execute();
    if (result !== undefined) {
      this.addToHistory(`${this.firstNumber} → ${result}`);
      this.firstNumber = result;
    }
    this.updateDisplay();
  }

  addToHistory(event) {
    this.historyList.push(event);

    if (this.historyList.length > 10) {
      this.historyList.shift();
    }

    this.history.innerHTML = this.historyList.map((item) => `<div>${item}</div>`).join("");
  }

  /// == Память калькулятор ==
  memoryAdd() {
    if (!this.secondNumber && !this.operator) {
      this.memory.textContent = +this.firstNumber;
      this.reset();
    } else {
      this.memory.textContent = this.calculate();
      this.reset();
    }
  }

  memoryClear() {
    this.memory.textContent = "";
  }

  memoryPlus() {
    this.memory.textContent = `${+this.memory.textContent + +this.firstNumber}`;
  }

  memoryMinus() {
    this.memory.textContent = `${+this.memory.textContent - +this.firstNumber}`;
  }

  memoryInDisplay() {
    if (this.operator) {
      if (this.operator === "%" && +this.memory.textContent === 0) {
        alert("Делить на ноль нельзя");
        return;
      }
      this.secondNumber = +this.memory.textContent;
      this.renderCalculate();
      this.memoryClear();
    } else {
      this.firstNumber = +this.memory.textContent;
      this.updateDisplay();
      this.memoryClear();
    }
  }
}

export { Calculator };
