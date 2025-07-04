const inputs = document.querySelectorAll(".input")
const result = document.querySelector(".result")

const add_button = document.querySelector(".add");
add_button.addEventListener("click", () => {
    result.textContent = +inputs[0].value + +inputs[1].value;
})
const subtract_button = document.querySelector(".subtract");
subtract_button.addEventListener("click", () => {
    result.textContent = +inputs[0].value - +inputs[1].value;
})
const multiply_button = document.querySelector(".multiply");
multiply_button.addEventListener("click", () => {
    result.textContent = +inputs[0].value * +inputs[1].value;
})
const divide_button = document.querySelector(".divide");
divide_button.addEventListener("click", () => {
    result.textContent = +inputs[0].value / +inputs[1].value;
})


