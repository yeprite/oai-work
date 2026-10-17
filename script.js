const button = document.getElementById("welcome-button");
const message = document.getElementById("welcome-message");

button.addEventListener("click", () => {
  message.textContent = "Welcome to my first app!";
});

document.getElementById("friends-button").addEventListener("click", () => {
  message.textContent = "hello my friends";
});

const totalForm = document.getElementById("total-form");
const firstNumber = document.getElementById("first-number");
const secondNumber = document.getElementById("second-number");
const totalResult = document.getElementById("total-result");

totalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const first = firstNumber.valueAsNumber;
  const second = secondNumber.valueAsNumber;
  if (!Number.isFinite(first) || !Number.isFinite(second)) {
    totalResult.textContent = "Please enter two valid numbers.";
    return;
  }
  const total = first + second;
  totalResult.textContent = Number.isFinite(total)
    ? `Total: ${Number(total.toPrecision(15))}`
    : "The total is too large. Please use smaller numbers.";
});

totalForm.addEventListener("input", () => {
  totalResult.textContent = "";
});
