import { Command } from "@main/mainCommand";

class AddCommand extends Command {
  constructor(context, a, b) {
    super(context, a, b);
  }

  execute() {
    return this.a + this.b;
  }
}

export { AddCommand };
