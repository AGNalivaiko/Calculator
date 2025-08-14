import { Command } from "./mainCommand.js";

class MultiplyCommand extends Command {
  constructor(context, a, b) {
    super(context, a, b);
  }

  execute() {
    return this.a * this.b;
  }
}

export { MultiplyCommand };
