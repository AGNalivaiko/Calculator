let display = document.querySelector('.display');
let memory = document.querySelector('.memory');

let firstNumber = '';
let operator = '';
let secondNumber = '';

function updateDisplay() {
    if (!operator) {
      display.textContent = firstNumber || '0';
    } else {
      display.textContent = firstNumber + '' + operator + '' + secondNumber;
    }
}

document.querySelectorAll('.btn--num').forEach(button => {
  button.addEventListener('click', () => {
    if (!operator) firstNumber += button.textContent;
    else secondNumber += button.textContent;
    updateDisplay();
  })
})

document.querySelectorAll('.btn--operator').forEach(button => {
  button.addEventListener('click', () => {
    if (!firstNumber) return;
    else if(!operator) {
      operator = button.textContent;
      updateDisplay();
    } else {
      calculate();
      renderCalculate();
      operator = button.textContent;
      updateDisplay();
    }
  })
})

function reset() {
    firstNumber = '';
    operator = '';
    secondNumber = '';
    display.textContent = '';
    updateDisplay();
}

function calculate() {
  if (firstNumber && operator && secondNumber) {
    let num1 = +firstNumber;
    let num2 = +secondNumber;
    let res;

    switch(operator) {
      case '+': res = num1 + num2; break;
      case '-': res = num1 - num2; break;
      case "x": res = num1 * num2; break;
      case '%': res = (num1 / num2) * 100; break;
      case 'x^y' : res = numberInSelectedDegree(); break;
      case '÷': 
      if (num2 === 0) {
        alert('На ноль делить нельзя');
        res=''; break;
      } else(res = num1 / num2); break;
      default: return;
    }
    return res;
  }
  else{
    reset();
    return null;
  }
}

function renderCalculate() {
    firstNumber = calculate();
    operator = '';
    secondNumber = '';
    display.textContent = firstNumber;
}

function squareRoot() {
  let val = +firstNumber;
  if (val) {
    for (let i = 0; i <= val; i++) {
      if (i * i === val) {
        firstNumber = i;
        return updateDisplay();
      }
    }
    alert('Это число не имеет квадратного корня');
    reset();
    } else alert('Введите число');
}

function threeSquareRoot() {
  let val = +firstNumber;
  if (val) {
    for (let i = 0; i <= val; i++) {
      if (i * i * i === val) {
        firstNumber = i;
        return updateDisplay();
      }
    }
    alert('Это число не имеет кубического корня');
    reset();
    } else alert('Введите число');
}

function factorial() {
  if(firstNumber) {
    let value = +firstNumber;
    let sum = 1;
  
    for (let i = 1; i <= value; i++) {
      sum *= i;
    }
    firstNumber = sum;
    updateDisplay();
  } else alert('Введите число');
  
}

function secondDegree() {
  if(firstNumber) {
    let value = +firstNumber;
    firstNumber = value * value;
    updateDisplay();

  } else alert('Введите число');
}

function thirdDegree() {
  if(firstNumber) {
    let value = +firstNumber;
    firstNumber = value * value * value;
    updateDisplay();

  } else alert('Введите число');
}

function numberInSelectedDegree() {
    let num1 = +firstNumber;
    let num2 = +secondNumber;
    let res = 1;

    for (let i  = 0; i < num2; i ++) {
      res *= num1;
    }
    return res;
}

function tenInSelectedDegree() {
  let number = +firstNumber;
  if (number === 0) {
    firstNumber = '0';
  } else if (number > 0 && Number.isInteger(number)) {
    let res = 10;
    for (let i = 1; i < number; i++) {
      res *= 10;
    }
    firstNumber = res.toString();
  } else {
    alert('Введите целое неотрицательное число');
    reset();
    return;
  }
  updateDisplay();
}

function negativeDigree() {
  let number = +firstNumber;

  firstNumber = `${1/number}`;
  updateDisplay();
}

function saveInMemory() {
  if(!secondNumber) {
    memory.textContent = firstNumber;
    reset();
  } else {
    memory.textContent = calculate();
    reset();
  }
}

function resetMemory() {
  memory.textContent = '';
}

function displayMemory() {
  if (operator) {
    if (operator === '%' && +memory.textContent === 0) {
      alert('Делить на ноль нельзя');
      resetMemory();
      return;
    }
    secondNumber = +memory.textContent;
    calculate();
    renderCalculate();
    resetMemory();
  } else {
    firstNumber = +memory.textContent;
    updateDisplay();
    resetMemory();
  }
}

function minusNumberInMemory() {
    memory.textContent = `${memory.textContent - firstNumber}`;
}

function plusNumberInMemory() {
    memory.textContent = `${(+memory.textContent) + (+firstNumber)}`;
}

function toggleSign() {
  if (!operator) {
    if (firstNumber) {
      if (firstNumber.startsWith('-')) {
        firstNumber = firstNumber.slice(1);
      } else {
        firstNumber = '-' + firstNumber;
      }
      updateDisplay();
    }
  } else {
    if (secondNumber) {
      if (secondNumber.startsWith('-')) {
        secondNumber = secondNumber.slice(1);
      } else {
        secondNumber = '-' + secondNumber;
      }
      updateDisplay();
    }
  }
}

updateDisplay()