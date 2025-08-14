import { Command } from "./mainCommand.js";

class MultiplyCommand extends Command {
    constructor() {
        super();
    }

    execute() {
        return this.a * this.b;
    }
}

export { MultiplyCommand };
