let getUserChoice;
let computerSelection;
let playerSelection;
let userPointsCounter = 0;
let computerPointsCounter = 0;
let userChoiceBtns = document.querySelectorAll(".btn-move-select");
let currentRoundInfo = document.querySelector(".current-round");

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const selectRandom = Math.floor(Math.random() * options.length);
  return options[selectRandom];
}

userChoiceBtns.forEach((choice) => {
  choice.addEventListener("click", () => {
    playRound(choice.value, getComputerChoice());
  });
});

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    currentRoundInfo.textContent = "Tie in this round!";
    return `It's a tie!`;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    currentRoundInfo.textContent = `Computer won! Scissors beats paper`;
    return computerPointsCounter++;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    currentRoundInfo.textContent = `Computer won! Rock beats scissors`;
    return computerPointsCounter++;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    currentRoundInfo.textContent = `Computer won! Paper beats rock`;
    return computerPointsCounter++;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    currentRoundInfo.textContent = `You won! Scissors beats paper`;
    return userPointsCounter++;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    currentRoundInfo.textContent = `You won! Rock beats scissors`;
    return userPointsCounter++;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    currentRoundInfo.textContent = `You won! Paper beats rock`;
    return userPointsCounter++;
  } 
}

function game() {
  if (computerPointsCounter > userPointsCounter) {
    return `Five rounds are over! Computer won ${computerPointsCounter} to ${userPointsCounter}`;
  } else {
    return `Five rounds are over! You won ${userPointsCounter} to ${computerPointsCounter}`;
  }
}

// console.log(game());
