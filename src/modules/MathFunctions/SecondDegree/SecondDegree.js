import { Command } from "../mainCommand/mainCommand.js";

class SecondDegree extends Command {
  constructor(context, a, b) {
    super(context, a, b);
  }

  execute() {
    if (this.a) {
      return +this.a * +this.a;
    } else {
      alert("Введите число");
    }
  }
}

export { SecondDegree };
