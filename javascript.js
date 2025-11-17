let humanScore = 0;
let computerScore = 0;

const heroText = document.querySelector("#hero");
const hScoreDisplay = document.querySelector("#player-score");
const cScoreDisplay = document.querySelector("#computer-score");

const rock = document.querySelector(".rock");
rock.addEventListener("click", playRound);

const paper = document.querySelector(".paper");
paper.addEventListener("click", playRound);

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", playRound)

function getComputerChoice () {
    const computerChoice = Math.floor(Math.random()*3);
    const choiceImage = document.querySelector(".computer-image")
    
    if (computerChoice === 0) {
        choiceImage.src = "./images/rock.png";
        return "ROCK";
    } else if (computerChoice === 1) {
        choiceImage.src = "./images/paper.png";
        return "PAPER";
    } else {
        choiceImage.src = "./images/scissors.png";
        return "SCISSORS";
    }
}

function playRound(event) {
    const computerChoice = getComputerChoice();
    const humanChoice = event.srcElement.className.toUpperCase();

    console.log(humanChoice);
    let youWon = `You won! ${humanChoice} beats ${computerChoice}`;
    let youLost = `You lost! ${computerChoice} beats ${humanChoice}`;

    if(humanChoice === computerChoice) {
        heroText.textContent = "You tied! Try again.";
    }
    else if (humanChoice === "ROCK") {
        if (computerChoice === "PAPER") {
            heroText.textContent = youLost;
            computerScore += 1;
            cScoreDisplay.textContent = computerScore;
        }
        else {
            heroText.textContent = youWon;
            humanScore += 1;
            hScoreDisplay.textContent = humanScore;
        }
    }
    else if (humanChoice === "PAPER") {
        if (computerChoice === "ROCK") {
            heroText.textContent = youWon;
            humanScore += 1;
            hScoreDisplay.textContent = humanScore;
        }
        else {
            heroText.textContent = youLost;
            computerScore += 1;
            cScoreDisplay.textContent = computerScore;
        }
    }
    else {
        if (computerChoice === "ROCK") {
            heroText.textContent = youLost;
            computerScore += 1;
            cScoreDisplay.textContent = computerScore;
        }
        else {
            heroText.textContent = youWon;
            humanScore += 1;
            hScoreDisplay.textContent = humanScore;
        }
    }
}

