// Computer (Opponent) will randomly choose between Rock, Paper or Scissors
function getComputerChoice(array) {
    const randomChoice = Math.floor(Math.random() * array.length);
    const choice = array[randomChoice];
    return choice;
}

    const array = ["Rock","Paper","Scissors"];
    const computerSelection = getComputerChoice(array);

// User will input their selection between Rock, Paper or Scissors (case insensitive)
function getPlayerChoice(item) {
    const playerChoice = prompt("Choose One: Rock, Paper, Scissors", "");
    if (playerChoice === "Paper" || playerChoice === "Rock" || playerChoice === "Scissors") {
    return playerChoice
    } else {
    alert("Input Invalid: Please try again.")
    }
}

const playerSelection = getPlayerChoice();

// Based on the rules of rock, paper, scissors
// If computer and user select the same item then return a message of “It’s a Tie, Try Again!”
// If user selects Rock and computer selects Scissors then return message “Rock beats Scissors. You Win!”
// If user selects Paper and computer selects Rock then return message “Paper beats Rock. You Win!”
// If user selects Scissors and computer selects Paper then return message “Scissors beats Paper. You Win!”
// Or else return message “[computerSelection} beats [playerSelection] You Lost.”
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert(playerSelection + " and " + computerSelection + "." + " It's a Tie! Play again.")
    } else if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
        alert(playerSelection + " beats " + computerSelection + "." + " You Win!")
    } else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
        alert(playerSelection + " beats " + computerSelection + "." + " You Win!")
    } else if ((playerSelection === "Scissors") && (computerSelection === "Paper")) {
        alert(playerSelection + " beats " + computerSelection + "." + " You Win!")
    } else {
        alert(computerSelection + " beats " + playerSelection + "." + " You Lose.")
    }
  }
   
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

// Record tally of a 5 round game
// Print user outcome of 5 round game with a message of the winner
function game() {

}



