const computerChoiceDisplay = document.querySelector("#computerChoiceDisplay");
const resultDisplay = document.querySelector("#resultDisplay");

const choices = ["Rock", "Paper", "Scissors"];

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const userChoice = e.target.id;
    const computerChoice =
      choices[Math.floor(Math.random() * choices.length)];
    computerChoiceDisplay.textContent = computerChoice;

    if (userChoice === "rock") {
      if (computerChoice === "Rock") {
        resultDisplay.textContent = "Draw";
      } else if (computerChoice === "Paper") {
        resultDisplay.textContent = "You Lose";
      } else {
        resultDisplay.textContent = "You Win";
      }
    } else if (userChoice === "paper") {
      if (computerChoice === "Rock") {
        resultDisplay.textContent = "You Win";
      } else if (computerChoice === "Paper") {
        resultDisplay.textContent = "Draw";
      } else {
        resultDisplay.textContent = "You Lose";
      }
    } else {
      if (computerChoice === "Rock") {
        resultDisplay.textContent = "You Lose";
      } else if (computerChoice === "Paper") {
        resultDisplay.textContent = "You Win";
      } else {
        resultDisplay.textContent = "Draw";
      }
    }
  });
});
