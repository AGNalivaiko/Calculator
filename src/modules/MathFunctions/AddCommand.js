import { Command } from "./mainCommand.js";

class AddCommand extends Command {
    constructor() {
        super();
    }

    execute() {
        return this.a + this.b;
    }
}

export { AddCommand };
