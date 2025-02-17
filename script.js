function getComputerChoice() { // Logic for the computer's selection.
    let computerChoice = Math.floor(Math.random() * 3) + 1; // A random number is chosen between 1 and 3.
    console.log(`A random number between 1 and 3 is selected: ${computerChoice}`);
    if (computerChoice === 1) { // Converts the numerical selection to a string.
        computerChoice = "Rock";
    } else if (computerChoice === 2) {
        computerChoice = "Paper";
    } else if (computerChoice === 3) {
        computerChoice = "Scissors";
    };

    return computerChoice;
}

console.log(`Computer selection stored: ${getComputerChoice()}`);

// function getHumanChoice() { // Logic for the user's selection.
//     let humanChoice = prompt("Please choose "Rock", "Paper", or "Scissors": ", " "); // Prompts the user to make a selection.
//     console.log(`The user has selected ${humanChoice}`);
    
//     humanChoice = humanChoice.toLowerCase();
//     console.log(`Converting string to lowercase: ${humanChoice}`);

//     return humanChoice;
// }

// console.log(`Human selection stored: ${getHumanChoice()}`);

let humanScore = 0;
let computerScore = 0;
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

