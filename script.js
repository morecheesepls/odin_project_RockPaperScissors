// function getComputerChoice() { // Logic for the computer's selection.
//     let computerChoice = Math.floor(Math.random() * 3) + 1; // A random number is chosen between 1 and 3.
    
//     if (computerChoice === 1) { // Converts the numerical selection to a string.
//         computerChoice = "rock";
//     } else if (computerChoice === 2) {
//         computerChoice = "paper";
//     } else if (computerChoice === 3) {
//         computerChoice = "scissors";
//     };

//     return computerChoice;
// }

// function getHumanChoice() { // Logic for the user's selection.
//     let humanChoice = prompt("Please choose 'Rock', 'Paper', or 'Scissors': ", " ").toLowerCase(); // Prompts the user to make a selection and converts the response to lowercase.

//     return humanChoice;
// }

// const computerChoice = getComputerChoice();
// const humanChoice = getHumanChoice();

// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;
        
//     function playRound(humanChoice, computerChoice) { // Logic for the response comparisons.
//     if ( // Conditions for the computer to win.
//             humanChoice === "rock" && computerChoice === "paper" || 
//             humanChoice === "paper" && computerChoice === "scissors" ||
//             humanChoice === "scissors" && computerChoice === "rock") {
//                 humanScore = ++humanScore;

//             console.log(`You win! ${humanChoice} beats ${computerChoice}! The score is now Player: ${humanScore} vs Computer: ${computerScore}`);
//         } else if ( // Conditions for the user to win.
//             humanChoice === "rock" && computerChoice === "scissors" ||
//             humanChoice === "paper" && computerChoice === "rock" ||
//             humanChoice === "scissors" && computerChoice === "paper") {
//                 computerScore = ++computerScore;

//             console.log(`You lose! ${computerChoice} beats ${humanChoice}! The score is now Player: ${humanScore} vs Computer: ${computerScore}`);
//         } else if (humanChoice === computerChoice) { // Condition for a tie.
//             console.log(`It's a tie! ${computerChoice} is equal to ${humanChoice}! The score remains Player: ${humanScore} vs Computer: ${computerScore}`);
//         };

//         return humanScore;
//         return computerScore;
//     };

//     return playRound(humanChoice, computerChoice);
// };

// console.log(playGame());


function getComputerChoice() {
    let computerChoice = "rock";
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = "paper";
    return humanChoice;
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore = ++humanScore;
            console.log(`You win! ${humanChoice} beats ${computerChoice}! The score is now Player: ${humanScore} vs Computer: ${computerScore}`);

            return humanScore;
        };

        return playRound(humanChoice, computerChoice);
    };
};

playGame();