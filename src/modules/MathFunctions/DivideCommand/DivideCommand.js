import { Command } from "@main/mainCommand";

class DivideCommand extends Command {
  constructor(context, a, b) {
    super(context, a, b);
  }

  execute() {
    if (this.b === 0) {
      alert("На ноль делить нельзя");
      this.context.reset();
      return "";
    }
    return this.a / this.b;
  }
}

export { DivideCommand };
