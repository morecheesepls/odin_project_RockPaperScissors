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
    
function playRound(humanChoice, computerChoice) { // Logic for the response comparisons.
   if ( // Conditions for the computer to win.
        humanChoice === "rock" && computerChoice === "paper" || 
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock") {
            ++humanScore;

        console.log(`You win! ${humanChoice} beats ${computerChoice}! The score is now Player: ${humanScore} vs Computer: ${computerScore}`);
    } else if ( // Conditions for the user to win.
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
            ++computerScore;

        console.log(`You lose! ${computerChoice} beats ${humanChoice}! The score is now Player: ${humanScore} vs Computer: ${computerScore}`);
    } else if (humanChoice === computerChoice) { // Condition for a tie.
        console.log(`It's a tie! ${computerChoice} is equal to ${humanChoice}! The score remains Player: ${humanScore} vs Computer: ${computerScore}`);
    };

    return humanScore;
    return computerScore;
};

console.log(playRound(humanChoice, computerChoice));








// TEST CODE

// let num = 0;

// let addNum = function(num) {
//     num = num+1;
//     return num;
// }

// function totalNum() {
//     num = addNum(num);
//     num = addNum(num);
//     num = addNum(num);
//     num = addNum(num);
//     num = addNum(num);
//     return num;
// }

// console.log(totalNum());