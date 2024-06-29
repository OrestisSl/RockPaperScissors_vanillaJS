const rock_btn = document.querySelector("#rockBtn");
const paper_btn = document.querySelector("#paperBtn");
const scissors_btn = document.querySelector("#scissorsBtn");
const displayPlayerChoice = document.querySelector("#displ_playerChoice");
const displayCompChoice = document.querySelector("#displ_compChoice");
const displayResult = document.querySelector("#result");
const startGame_Btn = document.querySelector("#startBtn");
const resetGame_Btn = document.querySelector("#resetGame_btn");
const choices = ["rock", "paper", "scissors"];

export {
  rock_btn,
  paper_btn,
  scissors_btn,
  displayCompChoice,
  displayPlayerChoice,
  displayResult,
  choices,
  startGame_Btn,
  resetGame_Btn
};
