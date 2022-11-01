// Computer randomly selects Rock, Paper, Scissors

const array = ["Rock","Paper","Scissors"]

function getComputerChoice() {
    const item = Math.floor(Math.random() * array.length);
    const compChoice = array[item];
    return compChoice;
}

const computerSelection = getComputerChoice()

// User inputs selection of Rock, Paper, Scissors (case insensitive)
// If user inputs alternative selection or invalid selection, ask to input selection again
// REVISIT VALIDATION WITH LOOPS IN FUTURE
function getPlayerChoice() {
    const playerChoice = prompt("Choose Rock, Paper, or Scissors");
    if (playerChoice === "Rock" || playerChoice === "Paper" || playerChoice === "Scissors") {
        return playerChoice;
     } else {
    const playerChoiceAgain = prompt("Please try again. Choose Rock, Paper, or Scissors");
        if (playerChoiceAgain === "Rock" || playerChoiceAgain === "Paper" || playerChoiceAgain === "Scissors") {
        return playerChoiceAgain;
     } else {
        alert("Input Invalid. Please Try Again.")
     }
    }    
}

const playerSelection = getPlayerChoice()

// Create single round game to compare the two selections and determine a winner
// If user and computer select the same selection 
// return message playerSelection vs computerSelection. It’s a Tie!
// If user selects Rock and computer selects Scissors OR user selects Paper and computer selects Rock OR user selects Scissors and computer selects Paper 
// return message playerSelection beats computerSelection. You Win!
// Else return message computerSelection beats playerSelection. You Lose!
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert(playerSelection + " vs. " + computerSelection + ". It's a TIE!")
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock" ||
    playerSelection === "Scissors" && computerSelection === "Paper") {
        alert(playerSelection + " beats " +  computerSelection + ". You WIN!")
    } else {
        alert(computerSelection + " beats " +  playerSelection + ". You LOSE!")
    }
 }

 console.log(playRound(playerSelection, computerSelection));



// Create 5 round game 



// Print outcomes of each game and overall winner of the 5 rounds


