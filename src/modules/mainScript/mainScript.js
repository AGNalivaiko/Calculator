import { Calculator } from "../Calculator/Calculator.js";
import { initCalculatorEventListeners } from "../EventListener/eventListener.js";
import { changeColor } from "../changeColor/changeColor.js";

const display = document.querySelector(".display");
const memory = document.querySelector(".memory");
const history = document.querySelector(".display__wraper-previosOperation");
const button = document.querySelector(".theme-toggle");

const calculator = new Calculator(display, memory, history);

document.querySelectorAll(".btn--num").forEach((button) => {
  button.addEventListener("click", () => {
    if (!calculator.operator) {
      calculator.firstNumber += button.textContent;
    } else {
      calculator.secondNumber += button.textContent;
    }
    calculator.updateDisplay();
  });
});

document.querySelectorAll(".btn--operator").forEach((button) => {
  button.addEventListener("click", () => {
    if (!calculator.firstNumber) {
      return;
    }
    if (!calculator.operator) {
      calculator.operator = button.textContent;
      calculator.updateDisplay();
    } else {
      calculator.renderCalculate();
      calculator.operator = button.textContent;
      calculator.updateDisplay();
    }
  });
});

initCalculatorEventListeners(calculator);

changeColor(button);

calculator.updateDisplay();
