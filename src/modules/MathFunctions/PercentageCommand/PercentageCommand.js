import { Command } from "@main/mainCommand";

class PercentageCommand extends Command {
  constructor(context, a, b) {
    super(context, a, b);
  }

  execute() {
    return (this.a / this.b) * 100;
  }
}

export { PercentageCommand };
