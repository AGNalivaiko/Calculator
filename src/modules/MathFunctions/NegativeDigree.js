import {Command} from "./mainCommand.js";


class NegativeDigree extends Command {
    constructor() { 
        super(); 
    }

    execute() {  
        return this.a ? `${1/+this.a}` : alert('Введите число');    
    };
}

export {NegativeDigree}