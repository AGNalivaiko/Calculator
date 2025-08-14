import { Command } from "./mainCommand.js";

class SubtractCommand extends Command {
  constructor(context, a, b) {
    super(context, a, b);
  }

  execute() {
    return this.a - this.b;
  }
}

export { SubtractCommand };
