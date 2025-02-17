function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    console.log(`A random number between 1 and 3 is selected: ${computerChoice}`);
    if (computerChoice === 1) {
        computerChoice = "Rock";
    } else if (computerChoice === 2) {
        computerChoice = "Paper";
    } else if (computerChoice === 3) {
        computerChoice = "Scissors";
    };

    return computerChoice;
}

console.log(`Computer selection stored: ${getComputerChoice()}`);

// function getHumanChoice() {
//     let humanChoice = prompt("Please make your selection: ", " ");
//     console.log(`The user has selected ${humanChoice}`);
    
//     humanChoice = humanChoice.toLowerCase();
//     console.log(`Converting string to lowercase: ${humanChoice}`);

//     return humanChoice;
// }

// console.log(`Human selection stored: ${getHumanChoice()}`);

let humanScore = 0;
let computerScore = 0;

