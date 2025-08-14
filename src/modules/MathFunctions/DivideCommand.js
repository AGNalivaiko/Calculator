import {Command} from "./mainCommand.js";

class DivideCommand extends Command {
    constructor() {
        super();
    }
    
    execute() {
        if (this.b === 0) {
            alert('На ноль делить нельзя');
            this.context.reset();
            return '';
        }
        return this.a / this.b;
    }
}

export {DivideCommand}