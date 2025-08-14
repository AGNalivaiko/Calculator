import { Command } from "./mainCommand.js";

class FactorialCommand extends Command {
  constructor(context, a, b) {
    super(context, a, b);
  }

  execute() {
    if (this.a) {
      const value = +this.a;
      let sum = 1;

      for (let i = 1; i <= value; i++) {
        sum *= i;
      }
      return sum;
    } else {
      alert("Введите число");
    }
  }
}
export { FactorialCommand };
