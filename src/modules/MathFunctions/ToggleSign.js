import { Command } from "./mainCommand.js";

class ToggleSign extends Command {
  constructor(context, a, b) {
    super(context, a, b);
  }

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

export { ToggleSign };
