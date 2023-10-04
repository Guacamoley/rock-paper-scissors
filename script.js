console.log("Hello");

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const randomChoice = choices[randomIndex];
  return randomChoice;
}

function playRound(playerSelection, computerSelection) {
  // Change output to lower case for easier comparison
  let lowercasePlayer = playerSelection.toLowerCase();
  let lowercaseComputer = computerSelection.toLowerCase();

  if (lowercasePlayer === lowercaseComputer) {
    response = "Its a draw!";
    return;
  } else if (lowercasePlayer === "rock" && lowercaseComputer === "paper") {
    return false;
  } else if (lowercasePlayer === "paper" && lowercaseComputer === "scissors") {
    return false;
  } else if (lowercasePlayer === "scissors" && lowercaseComputer === "rock") {
    return false;
  } else {
    return true;
  }
}

function game() {
  let round = 0;
  while (round < 5) {
    let playerResponse = prompt(
      "Please pick between Rock, Paper, or Scissors"
    ).toLowerCase();
    if (
      playerResponse === "rock" ||
      playerResponse === "paper" ||
      playerResponse === "scissors"
    ) {
      playRound(playerResponse, getComputerChoice());
      round++;
    } else {
      alert("Invalid choice. Please pick Rock, Paper, or Scissors.");
    }
  }
}

game();
