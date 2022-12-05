let getUserChoice;
let computerSelection;
let playerSelection;
let userPointsCounter = 0;
let computerPointsCounter = 0;

const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const selectRandom = Math.floor(Math.random() * options.length);
  return options[selectRandom];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = getUserChoice();
  computerSelection = getComputerChoice();
  if (playerSelection == computerSelection) {
    console.log("Tie in this round!");
    return `It's a tie!`;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    console.log(`Computer won! Scissors beats paper`);
    return computerPointsCounter++;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    console.log(`Computer won! Rock beats scissors`);
    return computerPointsCounter++;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    console.log(`Computer won! Paper beats rock`);
    return computerPointsCounter++;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log(`You won! Scissors beats paper`);
    return userPointsCounter++;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log(`You won! Rock beats scissors`);
    return userPointsCounter++;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log(`You won! Paper beats rock`);
    return userPointsCounter++;
  } else {
    return `Your choice is incorrect! Select rock, paper or scissors!`;
  }
}

function game() {
  // for(let rounds = 0; rounds < 5; rounds++){
  //     playRound();
  // }
  if (computerPointsCounter > userPointsCounter) {
    return `Five rounds are over! Computer won ${computerPointsCounter} to ${userPointsCounter}`;
  } else {
    return `Five rounds are over! You won ${userPointsCounter} to ${computerPointsCounter}`;
  }
}

// console.log(game());
