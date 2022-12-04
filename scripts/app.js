function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    const selectRandom = Math.floor(Math.random() * options.length);
    return options[selectRandom];
};

let getUserChoice;
let computerSelection;
let playerSelection;

function playRound(playerSelection, computerSelection){
    getUserChoice = prompt('Rock, paper, scissors! Choose one: ');
    playerSelection = getUserChoice.toLowerCase();
    computerSelection = getComputerChoice();
    if(playerSelection == computerSelection){
        return `It's a tie!`;
    }else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        return `Computer won! Scissors beats paper`;
    }else if(playerSelection == 'scissors' && computerSelection == 'rock'){
        return `Computer won! Rock beats scissors`;
    }else if(playerSelection == 'rock' && computerSelection == 'paper'){
        return `Computer won! Paper beats rock`;
    }else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        return `You won! Scissors beats paper`;
    }else if(playerSelection == 'rock' && computerSelection == 'scissors'){
        return `You won! Rock beats scissors`;
    }else if(playerSelection == 'paper' && computerSelection == 'rock'){
        return `You won! Paper beats rock`;
    }else{
        return `Your choice is incorrect! Select rock, paper or scissors!`
    }
}



