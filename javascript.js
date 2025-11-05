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

    if(humanChoice === computerChoice) {
        console.log("You tied! Try again.");
    }
    else if (humanChoice === "ROCK") {
        if (computerChoice === "PAPER") {
            console.log(youLost);
            computerScore += 1;
        }
        else {
            console.log(youWon);
            humanScore += 1;
        }
    }
    else if (humanChoice === "PAPER") {
        if (computerChoice === "ROCK") {
            console.log(youWon);
            humanScore += 1;
        }
        else {
            console.log(youLost);
            computerScore += 1;
        }
    }
    else {
        if (computerChoice === "ROCK") {
            console.log(youLost);
            computerScore += 1;
        }
        else {
            console.log(youWon);
            humanScore += 1;
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toUpperCase();
        let youWon = `You won! ${humanChoice} beats ${computerChoice}`;
        let youLost = `You lost! ${computerChoice} beats ${humanChoice}`;

        if(humanChoice === computerChoice) {
            console.log("You tied! Try again.");
        }
        else if (humanChoice === "ROCK") {
            if (computerChoice === "PAPER") {
                console.log(youLost);
                computerScore += 1;
            }
            else {
                console.log(youWon);
                humanScore += 1;
            }
        }
        else if (humanChoice === "PAPER") {
            if (computerChoice === "ROCK") {
                console.log(youWon);
                humanScore += 1;
            }
            else {
                console.log(youLost);
                computerScore += 1;
            }
        }
        else {
            if (computerChoice === "ROCK") {
                console.log(youLost);
                computerScore += 1;
            }
            else {
                console.log(youWon);
                humanScore += 1;
            }
        }
    }

    for(let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log(`Final Score:
        You - ${humanScore}
        Computer - ${computerScore}`);
}

playGame();