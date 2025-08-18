import { Command } from "../mainCommand/mainCommand.js";

export class NegativeDigree extends Command {
  constructor(context, a, b) {
    super(context, a, b);
  }

  execute() {
    return this.a ? `${1 / +this.a}` : alert("Введите число");
  }
}
