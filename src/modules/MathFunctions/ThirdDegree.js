import {Command} from "./mainCommand.js";


class ThirdDegree extends Command {
    constructor() { super(); }

    execute() {
        if(this.a) {
            return +this.a * +this.a * +this.a;
        } else alert('Введите число');
    }
}

export {ThirdDegree}