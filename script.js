let round = 1; // initiate game rounds
let humanScore = 0; // Initiate human score
let computerScore = 0; //Initiate computer score

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
    if ( // Conditions for the computer to win.
        humanChoice === "rock" && computerChoice === "paper" || 
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock") {
        console.log(`${computerChoice} beats ${humanChoice}! You lose!`);
        
        return round++ && computerScore++;
    } else if ( // Conditions for the user to win.
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`${humanChoice} beats ${computerChoice}! You win!`);
        
        return round++ && humanScore++;
    } else if (humanChoice === computerChoice) { // Condition for a tie.
        console.log(`You selected ${humanChoice} and the computer selected ${computerChoice}. This round is a tie!`)

        return round++;
    }
};

console.log(`Round ${round}`);
playRound(humanChoice, computerChoice);
console.log(`YOU: ${humanScore} vs COMPUTER: ${computerScore}`);