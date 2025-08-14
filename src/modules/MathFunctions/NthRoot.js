import { Command } from "./mainCommand.js";

class NthRoot extends Command {
    constructor() {
        super();
    }

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

function abs(value) {
    return value < 0 ? -value : value;
}

export { NthRoot };
