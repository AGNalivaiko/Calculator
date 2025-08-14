import {Command} from "./mainCommand.js";

class SqrtCbt extends Command {
    constructor() { 
        super(); 
    }

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

function abs(value) {   return value < 0 ? -value : value; }

export {SqrtCbt}