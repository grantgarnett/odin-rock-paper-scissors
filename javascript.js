function getComputerChoice () {
    let computerChoice = Math.floor(Math.random()*3);
    
    if (computerChoice === 0) {
        return "ROCK";
    } else if (computerChoice === 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();
    let youWon = `You won! ${humanChoice} beats ${computerChoice}`;
    let youLost = `You lost! ${computerChoice} beats ${humanChoice}`;

    console.log(youWon);
    console.log(youLost);
}

let humanScore = 0;
let computerScore = 0;

playRound(getHumanChoice(), getComputerChoice());