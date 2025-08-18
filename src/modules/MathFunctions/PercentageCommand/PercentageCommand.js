import { Command } from "../mainCommand/mainCommand.js";

class PercentageCommand extends Command {
  constructor(context, a, b) {
    super(context, a, b);
  }

  execute() {
    return (this.a / this.b) * 100;
  }
}

export { PercentageCommand };
