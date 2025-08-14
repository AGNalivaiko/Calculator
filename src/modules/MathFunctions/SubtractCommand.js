import {Command} from "./mainCommand.js";

class SubtractCommand extends Command {
    constructor() {
        super();
    }

    execute () { 
        return this.a - this.b; 
    } 
}

export {SubtractCommand}