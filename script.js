// Get references to HTML elements
const buttons = document.querySelectorAll("input");
const resultDisplay = document.getElementById("result");
const scoreDisplay = document.getElementById("score");

// Initialize scores
let scores = { player: 0, computer: 0 };

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const randomChoice = choices[randomIndex];
  return randomChoice;
}

// Function to update the score display
function updateScore() {
  scoreDisplay.textContent = `Player: ${scores.player}, Computer: ${scores.computer}`;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.value, getComputerChoice(), scores);
    updateScore();
  });
});

function playRound(playerSelection, computerSelection, scores) {
  // Change output to lower case for easier comparison
  let lowercasePlayer = playerSelection.toLowerCase();
  let lowercaseComputer = computerSelection.toLowerCase();

  if (lowercasePlayer === lowercaseComputer) {
    resultDisplay.textContent =
      "It's a draw! You both chose " + lowercasePlayer;
  } else if (
    (lowercasePlayer === "rock" && lowercaseComputer === "paper") ||
    (lowercasePlayer === "scissors" && lowercaseComputer === "rock") ||
    (lowercasePlayer === "paper" && lowercaseComputer === "scissors")
  ) {
    resultDisplay.textContent =
      "You lose! " + lowercaseComputer + " beats " + lowercasePlayer;
    scores.computer++;
  } else {
    resultDisplay.textContent =
      "You win! " + lowercasePlayer + " beats " + lowercaseComputer;
    scores.player++;
  }

  // Check for a winner (first to 5 points)
  if (scores.player >= 5) {
    resultDisplay.textContent = "Player wins the game!";
    buttons.forEach((button) => {
      button.disabled = true;
    });
  } else if (scores.computer >= 5) {
    resultDisplay.textContent = "Computer wins the game!";
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }
}

// function game() {
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   function playNextRound() {
//     rl.question(
//       "Please pick between Rock, Paper, or Scissors: ",
//       (playerResponse) => {
//         playerResponse = playerResponse.toLowerCase();
//         if (["rock", "paper", "scissors"].includes(playerResponse)) {
//           const computerChoice = getComputerChoice();
//           playRound(playerResponse, computerChoice, scores);
//           console.log("Player: " + scores.player);
//           console.log("Computer: " + scores.computer);
//           playNextRound(); // Continue playing without the round limit
//         } else {
//           console.log("Invalid choice. Please pick Rock, Paper, or Scissors.");
//           playNextRound();
//         }
//       }
//     );
//   }

//   playNextRound();
// }

// game();
