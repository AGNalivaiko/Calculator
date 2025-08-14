const container = document.querySelector(".display__wraper");
const btnWrapper = document.querySelector(".buttons__wraper ");
const allButtons = document.querySelectorAll(".btn");

function changedTheme(button) {
  button.addEventListener("click", () => {
    container.classList.toggle("btn-whiteTheme");
    btnWrapper.classList.toggle("btn-whiteTheme");
    allButtons.forEach((btn) => {
      if (btn.classList.contains("btn--num")) {
        btn.classList.toggle("btn-whiteTheme");
      } else if (
        btn.classList.contains("btn_summ") ||
        btn.classList.contains("btn_minus") ||
        btn.classList.contains("btn_equal") ||
        btn.classList.contains("btn_multiplication") ||
        btn.classList.contains("btn_division")
      ) {
        btn.classList.toggle("btn-navyBlue");
      } else {
        btn.classList.toggle("btn-veryLightBlue");
      }
    });
  });
}

export { changedTheme };
