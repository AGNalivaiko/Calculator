import {Command} from "./mainCommand.js";

class PercentageCommand extends Command {
    constructor() {
        super();
    }

    execute() { 
        return (this.a / this.b) * 100 
    }
}

export {PercentageCommand}