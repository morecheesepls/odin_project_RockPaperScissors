let humanScore = 0;
let computerScore = 0;

function getComputerSelection() { // Logic for the computer's selection.
    let computerSelection = Math.floor(Math.random() * 3) + 1; // A random number is chosen between 1 and 3.
    
    if (computerSelection === 1) { // Converts the numerical selection to a string.
        computerSelection = "rock";
    } else if (computerSelection === 2) {
        computerSelection = "paper";
    } else if (computerSelection === 3) {
        computerSelection = "scissors";
    };

    return computerSelection;
}

function getHumanChoice() { // Logic for the user's selection.
    let humanChoice = prompt("Please choose 'Rock', 'Paper', or 'Scissors': ", " ").toLowerCase(); // Prompts the user to make a selection and converts the response to lowercase.

    return humanChoice;
}

const computerChoice = getComputerSelection();
const humanChoice = getHumanChoice();

function playRound(humanChoice, computerChoice) { // Logic for the response comparisons.
    IF (humanChoice === computerChoice) {
        console.log(`You selected ${humanChoice} and the computer selected ${computerChoice}. This round is a tie!`);
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log(`${computerChoice} beats ${humanChoice}! You lose!`);
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`${humanChoice} beats ${computerChoice}! You win!`);
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log(`${computerChoice} beats ${humanChoice}! You lose!`);
        computerScore++;
    } else if ()
}

console.log(`You have selected: ${humanChoice}`);
console.log(`The computer has selected: ${computerChoice}`);