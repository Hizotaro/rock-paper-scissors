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

function getHumanChoice() {
    const rawHumanChoice = prompt("Your choice:");

    return rawHumanChoice;
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

function playGame() {
    for (let roundNumber = 0; roundNumber < 5; roundNumber++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        const roundResult = playRound(humanChoice, computerChoice);
        console.log(roundResult);
    }

    if (humanScore === computerScore) {
        return "The game was a tie.";
    } else if (humanScore > computerScore) {
        return "You won the game!";
    } else {
        return "Computer won the game.";
    }
}

console.log(playGame());
