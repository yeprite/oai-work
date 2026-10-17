const button = document.getElementById("welcome-button");
const message = document.getElementById("welcome-message");

button.addEventListener("click", () => {
  message.textContent = "Welcome to my first app!";
});

document.getElementById("friends-button").addEventListener("click", () => {
  message.textContent = "hello my friends";
});
