const messages = document.querySelector("#messages");
const playerScoreboard = document.querySelector("#player");
const computerScoreboard = document.querySelector("#computer");
const buttons = document.querySelectorAll("button");
let humanChoice;
let gameStatusMessage;
let playerScore = 0;
let computerScore = 0;

// Scoreboard
playerScoreboard.textContent = `Player Score: ${playerScore}`;
computerScoreboard.textContent = `Computer Score: ${computerScore}`;

// Start the game and clear the scoreboard
const startGame = messages.addEventListener("click", () => {
    messages.textContent = "Round 1 has started! Please make your selection."
    playGame();
});

// Logic for the computer's selection.
function getComputerChoice() { 
    let computerChoice = Math.floor(Math.random() * 3) + 1; // A random number is chosen between 1 and 3.
    
    if (computerChoice === 1) { // Converts the numerical selection to a string.
        computerChoice = "rock";
    } else if (computerChoice === 2) {
        computerChoice = "paper";
    } else if (computerChoice === 3) {
        computerChoice = "scissors";
    };

    return computerChoice;
}

// Human Selection
function getHumanChoice() {
    buttons.forEach(button, () => {
        button.addEventListener("click", () => {
            console.log(button.id);
        })
    })
}

// // Logic for the user's selection.
// function getHumanChoice() {
//     let humanChoice = prompt("Please choose 'Rock', 'Paper', or 'Scissors': ", " ").toLowerCase(); // Prompts the user to make a selection and converts the response to lowercase.

//     return humanChoice;
// }

// Gameplay Logic
function playGame() { 
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    playerScore = 0;
    computerScore = 0;
        
    let playRound = function(humanChoice, computerChoice) { // Logic for the response comparisons.
        if ( // Conditions for the computer to win.
                humanChoice === "rock" && computerChoice === "paper" || 
                humanChoice === "paper" && computerChoice === "scissors" ||
                humanChoice === "scissors" && computerChoice === "rock") {
                computerScore = computerScore + 1;
                return (`You lose! ${computerChoice} beats ${humanChoice}! The score is now Player: ${humanScore} vs Computer: ${computerScore}`);
            } else if ( // Conditions for the user to win.
                humanChoice === "rock" && computerChoice === "scissors" ||
                humanChoice === "paper" && computerChoice === "rock" ||
                humanChoice === "scissors" && computerChoice === "paper") {
                humanScore = humanScore + 1;
                return (`You win! ${humanChoice} beats ${computerChoice}! The score is now Player: ${humanScore} vs Computer: ${computerScore}`);
            } else if (humanChoice === computerChoice) { // Condition for a tie.
                return (`It's a tie! ${computerChoice} is equal to ${humanChoice}! The score remains Player: ${humanScore} vs Computer: ${computerScore}`);
            } else { // Invalid Selection
                return ("Invalid selection. Please try again.");
            };
    };
        
        function winner (humanScore, computerScore) { // Announce Winner Logic
            if (humanScore > computerScore) {
                return (`The game is over! The player has ${humanScore} points and the computer has ${computerScore} points. The player wins the game!`);
            } else if (humanScore < computerScore) {
                return (`The game is over! The player has ${humanScore} points and the computer has ${computerScore} points. The computer wins the game!`);
            } else {
                return (`The game is over! The player has ${humanScore} points and the computer has ${computerScore} points. The game ends in a tie!`);
            };
        };
        console.log(winner(humanScore, computerScore));
    };