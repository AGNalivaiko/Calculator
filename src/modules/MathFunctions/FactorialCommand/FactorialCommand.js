import { Command } from "@main/mainCommand";

class FactorialCommand extends Command {
  constructor(context, a, b) {
    super(context, a, b);
  }

  execute() {
    const value = Number(this.a);

    // Проверка на число и неотрицательность
    if (isNaN(value) || value < 0) {
      alert("Введите неотрицательное число");
      return;
    }

    let result = 1;
    for (let i = 2; i <= value; i++) {
      result *= i;
    }
    return result;
  }
}

export { FactorialCommand };
