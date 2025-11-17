let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    const computerChoice = Math.floor(Math.random()*3);
    const choiceImage = document.querySelector(".computer-image")
    
    if (computerChoice === 0) {
        choiceImage.src = "./images/rock.png";
    } else if (computerChoice === 1) {
        choiceImage.src = "./images/paper.png";
    } else {
        choiceImage.src = "./images/scissors.png";
    }
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

getComputerChoice();