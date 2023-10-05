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
    let message = "It's a draw! You both chose " + lowercasePlayer;
    console.log(message);
  } else if (
    (lowercasePlayer === "rock" && lowercaseComputer === "paper") ||
    (lowercasePlayer === "scissors" && lowercaseComputer === "rock") ||
    (lowercasePlayer === "paper" && lowercaseComputer === "scissors")
  ) {
    let message =
      "You lose! " + lowercaseComputer + " beats " + lowercasePlayer;
    console.log(message);
  } else {
    let message = "You win! " + lowercasePlayer + " beats " + lowercaseComputer;
    console.log(message);
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
