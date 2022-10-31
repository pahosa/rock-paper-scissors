// Computer randomly selects Rock, Paper, Scissors

const array = ["Rock","Paper","Scissors"]

function getComputerChoice() {
    const item = Math.floor(Math.random() * array.length);
    const compChoice = array[item];
}

const computerSelection = getComputerChoice()

// User inputs selection of Rock, Paper, Scissors (case insensitive)
function getPlayerChoice() {
    const playerChoice = prompt("Choose Rock, Paper, or Scissors");
    return playerChoice;
}

const playerSelection = getPlayerChoice()

console.log(playerSelection);

// If user inputs alternative selection or invalid selection, ask to input selection again



// If user and computer select the same selection 
// return message playerSelection vs computerSelection. It’s a Tie!



// If user selects Rock and computer selects Scissors OR user selects Paper and computer selects Rock OR user selects Scissors and computer selects Paper 
// return message playerSelection beats computerSelection. You Win!



// Else return message computerSelection beats playerSelection. You Lose!



// Create 5 round game 



// Print outcomes of each game and overall winner of the 5 rounds


