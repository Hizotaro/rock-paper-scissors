let humanScore = 0;
let computerScore = 0;
const winningScore = 5;

function getComputerChoice() {
    const randomChoiceIndex = Math.floor(Math.random() * 3);

    if (randomChoiceIndex === 0) {
        return "rock";
    } else if (randomChoiceIndex === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    const normalizedHumanChoice = humanChoice.toLowerCase();

    if (normalizedHumanChoice === computerChoice) {
        return "The round was a tie.";
    } else if (
        (normalizedHumanChoice === "rock" && computerChoice === "scissors") ||
        (normalizedHumanChoice === "paper" && computerChoice === "rock") ||
        (normalizedHumanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return "You won the round.";
    } else {
        computerScore++;
        return "Computer won the round.";
    }
}

const choiceButtons = document.querySelectorAll("[data-choice]");
const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const roundResultDisplay = document.querySelector("#round-result");
const gameStatusDisplay = document.querySelector("#game-status");
const newGameButton = document.querySelector("#new-game");

function handleChoiceClick(event) {
    const humanChoice = event.currentTarget.dataset.choice;
    const computerChoice = getComputerChoice();
    const roundResult = playRound(humanChoice, computerChoice);

    roundResultDisplay.textContent = roundResult;
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    if (humanScore === winningScore || computerScore === winningScore) {
        if (humanScore === winningScore) {
            gameStatusDisplay.textContent = "You won the game!";
        } else {
            gameStatusDisplay.textContent = "Computer won the game.";
        }

        choiceButtons.forEach((button) => {
            button.disabled = true;
        });
        newGameButton.disabled = false;
    } else {
        gameStatusDisplay.textContent = "Choose your next move.";
    }
}

choiceButtons.forEach((button) => {
    button.addEventListener("click", handleChoiceClick);
});

function startNewGame() {
    humanScore = 0;
    computerScore = 0;

    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    roundResultDisplay.textContent = "No round played yet.";
    gameStatusDisplay.textContent = "Choose a move to begin.";

    choiceButtons.forEach((button) => {
        button.disabled = false;
    });
    newGameButton.disabled = true;
}

newGameButton.addEventListener("click", startNewGame);
