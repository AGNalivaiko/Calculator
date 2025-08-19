import { Command } from "@main/mainCommand";

class TenInSelectedDegree extends Command {
  constructor(context, a, b) {
    super(context, a, b);
  }

  execute() {
    if (this.a) {
      let number = +this.a;

      if (number === 0) {
        number = "0";
      } else if (number > 0 && Number.isInteger(number)) {
        let res = 10;
        for (let i = 1; i < number; i++) {
          res *= 10;
        }
        return res;
      } else {
        alert("Введите целое неотрицательное число");
      }
    } else {
      alert("Введите число");
    }
  }
}

export { TenInSelectedDegree };
