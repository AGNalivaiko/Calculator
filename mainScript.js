import Calculator from "./modules/classes/Calculator.js";

///// ==== Переменные ==== 
const display = document.querySelector('.display');
const memory = document.querySelector('.memory');
const history = document.querySelector('.display__wraper-previosOperation');
export const calculator = new Calculator(display, memory, history);

// ======= Добавление операндов и операторов =============
document.querySelectorAll('.btn--num').forEach(button => {
    button.addEventListener('click', () => {
    if (!calculator.operator) calculator.firstNumber += button.textContent;
    else calculator.secondNumber += button.textContent;
    calculator.updateDisplay();
    })
});

document.querySelectorAll('.btn--operator').forEach(button => {
    button.addEventListener('click', () => {
        if(!calculator.firstNumber) return;
        else if (!calculator.operator) {
            calculator.operator = button.textContent;
            calculator.updateDisplay();
        } else {
            calculator.renderCalculate();
            calculator.operator = button.textContent;
            calculator.updateDisplay();
        }
    })
})

calculator.updateDisplay();