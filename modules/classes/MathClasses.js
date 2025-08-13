class Command {
    constructor(context, a, b) {
        this.context = context;
        this.a = a;
        this.b = b;
    }

    execute() {}
}

///  ======  Команды  ====
class AddCommand extends Command {
    execute () { return this.a + this.b; }
}

class SubtractCommand extends Command {
    execute () { return this.a - this.b; } 
}

class MultiplyCommand extends Command {
    execute() { return this.a * this.b; }
}

class DivideCommand extends Command {
    execute() {
        if (this.b === 0) {
            alert('На ноль делить нельзя');
            this.context.reset();
            return '';
        }
        return this.a / this.b;
    }
}

class PercentageCommand extends Command {
    execute() { return (this.a / this.b) * 100 }
}

class FactorialCommand extends Command {
    execute() {
        if(this.a) {
            let value = +this.a;
            let sum = 1;

            for (let i = 1; i <= value; i++) {
                sum *= i;
            }
            return sum;
        } else alert('Введите число')
    }
}

class NumberInSelectedDegreeCommand extends Command {
    execute() {
        let num1 = +this.a;
        let num2 = +this.b;
        let res = 1;
        if (num1 > 0 && num2 > 0) {
            for (let i = 0; i < num2; i++) {
                res *= num1;
            }
            return res;
        } else alert('Введите положительные числа')
    }
}

class TenInSelectedDegree extends Command {
    execute() {
        if(this.a) {
            let number = +this.a;

            if(number === 0) number = '0';
            else if (number > 0 && Number.isInteger(number)) {
                let res = 10;
                for (let i = 1; i < number; i++) res *= 10; 
                return res;
            } else alert('Введите целое неотрицательное число')
        } else alert ('Введите число');
    }
}

class NegativeDigree extends Command {
    execute() {  return this.a ? `${1/+this.a}` : alert('Введите число');    };
}

class ToggleSign extends Command {
    execute() {
        if (!this.context.operator) {
            if (this.context.firstNumber) {
                this.context.firstNumber = String(-Number(this.context.firstNumber));
            }
        } else {
            if (this.context.secondNumber) {
                this.context.secondNumber = String(-Number(this.context.secondNumber));
            }
        }
    }
}

class SecondDegree extends Command {
    execute() {
        if(this.a) {
            return +this.a * +this.a
        } else alert('Введите число');
    }
}

class ThirdDegree extends Command {
    execute() {
        if(this.a) {
            return +this.a * +this.a * +this.a;
        } else alert('Введите число');
    }
}

class Sqrt extends Command {
    execute() {
        let x = +this.context.firstNumber;
        const tolerance = 1e-10;
        const maxIterations = 1000;

        if (x < 0)  return NaN;

        if (x === 0) return 0;

        let guess = x / 2;
        let prevGuess = 0;
        let iterations = 0;

        while (abs(guess - prevGuess) > tolerance && iterations < maxIterations) {
            prevGuess = guess;
            guess = 0.5 * (guess + x / guess);
            iterations++;
        }
        return guess;
    }
}

class SqrtCbt extends Command {
    execute() {
        let x = +this.context.firstNumber;
        const tolerance = 1e-10;
        const maxIterations = 1000;

        if (x === 0) return 0;

        let guess = x / 3 || 1;
        let prevGuess = 0;
        let iterations = 0;

        while (abs(guess - prevGuess) > tolerance && iterations < maxIterations) {
            prevGuess = guess;
            guess = (2 * guess + x / (guess * guess)) / 3;
            iterations++;
        }
        return guess;
    }
}

class NthRoot extends Command {
    execute() {
        let x = +this.context.firstNumber;
        let y = +this.context.secondNumber;
        const tolerance = 1e-10;
        const maxIterations = 1000;

        if (y <= 0) return NaN; 
        if (x === 0) return 0;
        if (x < 0 && y % 2 === 0) return NaN; // корень чётной степени из отрицательного числа не существует

        let guess = x / y || 1;
        let prevGuess = 0;
        let iterations = 0;

        // Функция возведения в степень (целое y)
        function power(base, exp) {
            let result = 1;
            for (let i = 0; i < exp; i++) {
            result *= base;
            }
            return result;
        }

        // Итерации метода Ньютона
        while (abs(guess - prevGuess) > tolerance && iterations < maxIterations) {
            prevGuess = guess;
            // Формула Ньютона для корня y-й степени:
            // guess = ((y - 1) * guess + x / guess^(y-1)) / y
            guess = ((y - 1) * guess + x / power(guess, y - 1)) / y;
            iterations++;
        }

        return guess;
    }
}

// Моделирование метода Math.abs
function abs(value) {
  return value < 0 ? -value : value;
}


export {AddCommand, SubtractCommand, MultiplyCommand, 
    DivideCommand, PercentageCommand, FactorialCommand, 
    NumberInSelectedDegreeCommand, TenInSelectedDegree, NegativeDigree,
    ToggleSign, SecondDegree, ThirdDegree, Sqrt,SqrtCbt, NthRoot }