// Get random number from 0 to 2
function getRandomInt() {
  return Math.floor(Math.random() * 3);
}

// Get computer choice
function getComputerChoice() {
  let choice = getRandomInt();
  if (choice == 0) {
    return "Rock";
  } else if (choice == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// Assign it to a variable 
const computerChoice = getComputerChoice();

// Get player's choice
const playerChoice = prompt("Your choice? ", "rock");

  // make it case-insensitive, Capitalize first letter, lowerCase rest and assign it to const
const playerChoiceInsensitive = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();

// Check who won/ play round function
function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Rock") {
    
  } else if (playerSelection == "Paper") {

  } else {

  }
}
// Output the result