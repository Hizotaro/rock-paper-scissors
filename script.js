let humanScore = 0;
let computerScore = 0;

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

function handleChoiceClick(event) {
    const humanChoice = event.currentTarget.dataset.choice;
    const computerChoice = getComputerChoice();
    const roundResult = playRound(humanChoice, computerChoice);

    roundResultDisplay.textContent = roundResult;
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    gameStatusDisplay.textContent = "Choose your next move.";
}

choiceButtons.forEach((button) => {
    button.addEventListener("click", handleChoiceClick);
});
