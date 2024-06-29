import {
  rock_btn,
  paper_btn,
  scissors_btn,
  resetGame_Btn,
  displayPlayerChoice,
  displayCompChoice,
  displayResult,
  choices,
} from "./constants.js";

const generateCompChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const displayChoices = (playerChoice, compChoice) => {
  displayPlayerChoice.textContent = `Player: ${playerChoice}`;
  displayCompChoice.textContent = `Computer: ${compChoice}`;
};

const playGame = (playerChoice) => {
  const pcChoice = generateCompChoice();
  displayChoices(playerChoice, pcChoice);
  determineWinner(playerChoice, pcChoice);
};

const determineWinner = (playerChoice, compChoice) => {
  let result = "";

  const playerWin_Paper = playerChoice === "scissors" && compChoice === "paper";
  const playerWin_Rock = playerChoice === "paper" && compChoice === "rock";
  const playerWin_Scissors =
    playerChoice === "rock" && compChoice === "scissors";

  if (playerChoice === compChoice) {
    result = "DRAW";
  } else if (playerWin_Paper || playerWin_Rock || playerWin_Scissors) {
    result = "PLAYER WINS";
  } else {
    result = "COMPUTER WINS";
  }

  displayResult.textContent = result;
  resetGame_Btn.disabled = false;

  rock_btn.disabled = true;
  paper_btn.disabled = true;
  scissors_btn.disabled = true;
};

const resetGame = () => {
  displayPlayerChoice.textContent = "Player:";
  displayCompChoice.textContent = "Computer:";
  displayResult.textContent = "";

  rock_btn.disabled = false;
  paper_btn.disabled = false;
  scissors_btn.disabled = false;
  
  resetGame_Btn.disabled = true;
};

const attachEventListeners = () => {
  resetGame_Btn.disabled = true;

  resetGame_Btn.addEventListener("click", resetGame);
  rock_btn.addEventListener("click", () => playGame("rock"));
  paper_btn.addEventListener("click", () => playGame("paper"));
  scissors_btn.addEventListener("click", () => playGame("scissors"));
};

export { attachEventListeners };
