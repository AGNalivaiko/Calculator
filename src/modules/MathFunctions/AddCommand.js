import { Command } from "./mainCommand.js";

class AddCommand extends Command {
  constructor(context, a, b) {
    super(context, a, b);
  }

  execute() {
    return this.a + this.b;
  }
}

export { AddCommand };
