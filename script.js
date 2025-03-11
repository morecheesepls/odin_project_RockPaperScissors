const gameText = document.querySelector("#messages");
const humanScoreBoard = document.querySelector("#player");
const computerScoreBoard = document.querySelector("#computer");
let computerChoice = getComputerChoice();
let humanChoice;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() { // Logic for the computer's selection.
    let computerChoice = Math.floor(Math.random() * 3) + 1; // A random number is chosen between 1 and 3.
    
    if (computerChoice === 1) { // Converts the numerical selection to a string.
        computerChoice = "rock";
    } else if (computerChoice === 2) {
        computerChoice = "paper";
    } else if (computerChoice === 3) {
        computerChoice = "scissors";
    };

    return computerChoice;
};

function getHumanChoice() { // Adds event listeners to button elements and starts/continues gameplay when a button is clicked.
    const buttons = document.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => {
            humanChoice = button.id;
            let computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        });
    });
};

function playRound(humanChoice, computerChoice) { // Logic for the response comparisons.
        if (computerScore === 5 || humanScore === 5) {
            winner(humanScore, computerScore);
        } else if ( // Conditions for the computer to win.
            humanChoice === "rock" && computerChoice === "paper" || 
            humanChoice === "paper" && computerChoice === "scissors" ||
            humanChoice === "scissors" && computerChoice === "rock") {
            computerScore = computerScore + 1;
            gameText.textContent = `You lose! The Computer chose ${computerChoice} and the Player chose ${humanChoice}!`;
            humanScoreBoard.textContent = `Player Score: ${humanScore}`
            computerScoreBoard.textContent = `Computer Score: ${computerScore}`;
        } else if ( // Conditions for the user to win.
            humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper") {
            humanScore = humanScore + 1;
            gameText.textContent = `You win! The Player chose ${humanChoice} and the Computer chose ${computerChoice}!`;
            humanScoreBoard.textContent = `Player Score: ${humanScore}`
            computerScoreBoard.textContent = `Computer Score: ${computerScore}`;
        } else if (humanChoice === computerChoice) { // Condition for a tie.
            gameText.textContent = `It's a tie! The Computer chose ${computerChoice} and the Player chose ${humanChoice}!`;
            humanScoreBoard.textContent = `Player Score: ${humanScore}`
            computerScoreBoard.textContent = `Computer Score: ${computerScore}`;
        } else { // Invalid Selection
            gameText.textContent = "Invalid selection. Please try again.";
            humanScoreBoard.textContent = `Player Score: ${humanScore}`
            computerScoreBoard.textContent = `Computer Score: ${computerScore}`;
        };
};

function winner (humanScore, computerScore) { // Announce Winner Logic
    if (humanScore > computerScore) {
        gameText.textContent = `The game is over! The player has ${humanScore} points and the computer has ${computerScore} points. The player wins the game!`;
    } else if (humanScore < computerScore) {
        gameText.textContent = `The game is over! The player has ${humanScore} points and the computer has ${computerScore} points. The computer wins the game!`;
    } else {
        rgameText.textContent = `The game is over! The player has ${humanScore} points and the computer has ${computerScore} points. The game ends in a tie!`;
    };
};

getHumanChoice();