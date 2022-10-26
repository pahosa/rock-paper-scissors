// Computer will randomly select Rock, Paper, Scissors
function getComputerChoice(string) {
    const randomChoice = Math.floor(Math.random() * string.length);
    const item = string[randomChoice];
    return item;
}

const compOptions = ["Rock","Paper","Scissors"];
const computerSelection = getComputerChoice(compOptions);

// When a user inputs either Rock, Paper, Scissors
function getPlayerChoice(selection) {
    const playerOption = prompt("What is your selection?");
   if (playerOption === ("Rock" || "Paper" || "Scissors")) {
    alert("Thanks for your choice");
   } else {
    alert("Please enter valid option");
   }
}

const playerOptions = ["Rock","Paper","Scissors"];
//const playerSelection = getPlayerChoice(playerOptions);

function playRound(playerSelection,computerSelection) {
 if (playerSelection === computerSelection) {
    return alert("It's a Tie! Try again");
 } else {
    return alert("Who won?");
 }
}

const playerSelection = "Rock";
console.log(playRound(playerSelection, computerSelection));



// If user and computer select same string, then print “Tie. Try Again”

// If user selects Rock and computer selects Paper, print “You lose! Paper beats Rock”

// If user selects Rock and computer selects Scissors, print “You Win! Rock beats Scissors”

// If user selects Paper and computer selects Rock, print “You win! Paper beats Rock!”

// If user selects Paper and computer selects Scissors, print “You Lose! Scissors beat Paper!”

// If user selects Scissors and computer selects Rock, print “You lose! Rock beats Scissors!”

// If user selects Scissors and computer selects Paper, print “You Win! Scissors beat Paper!”

//

// Keep tally of a 5 round game

// Print user outcome of 5 round game, You Win! Or You Lose!

