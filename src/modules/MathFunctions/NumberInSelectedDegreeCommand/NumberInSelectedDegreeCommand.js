import { Command } from "../mainCommand";

class NumberInSelectedDegreeCommand extends Command {
  constructor(context, a, b) {
    super(context, a, b);
  }

  execute() {
    const num1 = +this.a;
    const num2 = +this.b;
    let res = 1;
    if (num1 > 0 && num2 > 0) {
      for (let i = 0; i < num2; i++) {
        res *= num1;
      }
      return res;
    } else {
      alert("Введите положительные числа");
    }
  }
}

export { NumberInSelectedDegreeCommand };
