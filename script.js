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

const computerChoice = getComputerChoice();

function getHumanChoice() {
    const rawHumanChoice = prompt("Your choice:");

    return rawHumanChoice.toLowerCase();
}

const humanChoice = getHumanChoice();

function playRound(humanChoice, computerChoice) {
    const normalizedHumanChoice = humanChoice.toLowerCase();

    if (normalizedHumanChoice === computerChoice) {
        return "Tie";
    } else if (
        (normalizedHumanChoice === "rock" && computerChoice === "scissors") ||
        (normalizedHumanChoice === "paper" && computerChoice === "rock") ||
        (normalizedHumanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return "Human won";
    } else {
        computerScore++;
        return "Computer won";
    }
}

console.log(playRound(humanChoice, computerChoice));
