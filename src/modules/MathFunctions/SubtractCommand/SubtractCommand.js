import { Command } from "../mainCommand/mainCommand.js";

class SubtractCommand extends Command {
  constructor(context, a, b) {
    super(context, a, b);
  }

  execute() {
    return this.a - this.b;
  }
}

export { SubtractCommand };
