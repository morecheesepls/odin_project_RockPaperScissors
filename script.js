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
let humanScore = 0;
let computerScore = 0;
    
let playRound = function(humanChoice, computerChoice) { // Logic for the response comparisons.
    if ( // Conditions for the computer to win.
        humanChoice === "rock" && computerChoice === "paper" || 
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock") {
            console.log(`${computerChoice} beats ${humanChoice}! You lose!`);

        computerScore = ++computerScore;
        console.log(`Plus one to the computer! COMPUTER SCORE: ${computerScore}`);
    } else if ( // Conditions for the user to win.
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
            console.log(`${humanChoice} beats ${computerChoice}! You win!`);
            
        humanScore = ++humanScore;
        console.log(`Plus one to the human! PLAYER SCORE: ${humanScore}`);
    } else if (humanChoice === computerChoice) { // Condition for a tie.
        console.log(`You selected ${humanChoice} and the computer selected ${computerChoice}. This round is a tie!`);
        console.log(`No one gets a point! PLAYER SCORE: ${humanScore} vs COMPUTER SCORE: ${computerScore}`);
    };

    return (humanScore, computerScore);
};

console.log(playRound(humanChoice, computerChoice));
