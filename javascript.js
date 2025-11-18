let humanScore = 0;
let computerScore = 0;

const heroText = document.querySelector("#hero");
const hScoreDisplay = document.querySelector("#player-score");
const cScoreDisplay = document.querySelector("#computer-score");
const nextGameContainer = document.querySelector("#next-text");
const compChoiceImage = document.querySelector("#computer-image")

/*const rock = document.querySelector("#rock");
rock.addEventListener("click", playRound);
rock.addEventListener("mouseenter", choiceEnter);
rock.addEventListener("mouseleave", choiceLeave);

const paper = document.querySelector("#paper");
paper.addEventListener("click", playRound);
paper.addEventListener("mouseenter", choiceEnter);
paper.addEventListener("mouseleave", choiceLeave);

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", playRound);
scissors.addEventListener("mouseenter", choiceEnter);
scissors.addEventListener("mouseleave", choiceLeave);*/

const playerSelections = document.querySelectorAll(".selection");
playerSelections.forEach(initializePlayerSelection);

function getComputerChoice () {

    const computerChoice = Math.floor(Math.random()*3);
    
    if (computerChoice === 0) {
        compChoiceImage.src = "./images/rock.png";
        return "ROCK";
    } else if (computerChoice === 1) {
        compChoiceImage.src = "./images/paper.png";
        return "PAPER";
    } else {
        compChoiceImage.src = "./images/scissors.png";
        return "SCISSORS";
    }
}

function choiceEnter(event) {
    event.target.border = "2rem solid";
}

function choiceLeave(event) {
    event.target.border = "";
}

function initializePlayerSelection(selection) {
    selection.addEventListener("click", playRound);
    selection.addEventListener("mouseenter", choiceEnter);
    selection.addEventListener("mouseleave", choiceLeave);
    humanScore = hScoreDisplay.textContent = 0;
    computerScore = cScoreDisplay.textContent = 0;
}

function deinitPlayerSelection(selection) {
    selection.removeEventListener("click", playRound);
    selection.removeEventListener("mouseenter", choiceEnter);
    selection.removeEventListener("mouseleave", choiceLeave);
    selection.border = "";
}

function playRound(event) {

    const computerChoice = getComputerChoice();
    const humanChoice = event.target.id.toUpperCase();

    console.log(event);
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

    if((humanScore === 5) || (computerScore === 5)) {

        playerSelections.forEach(deinitPlayerSelection);

        if(humanScore === 5) {
            heroText.textContent = "Good job! You won.";
        } else {
            heroText.textContent = "Maybe next time.";
        }

        playAgain = document.createElement("button");
        playAgain.textContent = "Play Again";
        playAgain.addEventListener("click", () => {
            playerSelections.forEach(initializePlayerSelection);
            compChoiceImage.src = "./images/question-mark.png";
            playAgain.remove();
        });

        nextGameContainer.appendChild(playAgain);

    }
}

