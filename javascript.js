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

  // make it case-insensitive and assign it to const
const playerChoiceInsensitive = playerChoice.toLowerCase();

// Check who won
// Output the result