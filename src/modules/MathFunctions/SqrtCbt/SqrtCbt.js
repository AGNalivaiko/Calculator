import { Command } from "@main/mainCommand";
import absFunc from "../absFunc/abs.js";

class SqrtCbt extends Command {
  constructor(context, a, b) {
    super(context, a, b);
  }

  execute() {
    const x = +this.context.firstNumber;
    const tolerance = 1e-10;
    const maxIterations = 1000;

    if (x === 0) {
      return 0;
    }

    let guess = x / 3 || 1;
    let prevGuess = 0;
    let iterations = 0;

    while (absFunc(guess - prevGuess) > tolerance && iterations < maxIterations) {
      prevGuess = guess;
      guess = (2 * guess + x / (guess * guess)) / 3;
      iterations++;
    }
    return guess;
  }
}
export { SqrtCbt };
