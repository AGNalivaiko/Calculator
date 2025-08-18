import { Command } from "../mainCommand/mainCommand.js";
import absFunc from "../absFunc/abs.js";

class Sqrt extends Command {
  constructor(context, a, b) {
    super(context, a, b);
  }

  execute() {
    const x = +this.context.firstNumber;
    const tolerance = 1e-10;
    const maxIterations = 1000;

    if (x < 0) {
      return NaN;
    }

    if (x === 0) {
      return 0;
    }

    let guess = x / 2;
    let prevGuess = 0;
    let iterations = 0;

    while (absFunc(guess - prevGuess) > tolerance && iterations < maxIterations) {
      prevGuess = guess;
      guess = 0.5 * (guess + x / guess);
      iterations++;
    }
    return guess;
  }
}

export { Sqrt };
