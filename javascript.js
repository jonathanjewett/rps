console.log("Hello, World! And Tacos");

//Button Code
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

rockBtn.addEventListener("click", function (e) {
  console.log(playRound("ROCK", getComputerChoice()));
});

paperBtn.addEventListener("click", function (e) {
  console.log(playRound("PAPER", getComputerChoice()));
});

scissorsBtn.addEventListener("click", function (e) {
  console.log(playRound("SCISSORS", getComputerChoice()));
});

const getComputerChoice = () => {
  const compChoices = ["Rock", "Paper", "Scissors"];
  return compChoices[Math.floor(Math.random() * 3)];
};

let playerScore = 0;
let computerScore = 0;

const playRound = (playerSelection, computerSelection) => {
  if (playerScore >= 5 || computerScore >= 5) {
    restartGame();
  }
  const playerChoice = playerSelection.toUpperCase();
  const computerChoice = computerSelection.toUpperCase();
  let roundResult = "";

  //creates variables for results container and results for this round
  const resultsContainer = document.querySelector("#results-display");
  const roundResultText = document.createElement("p");
  roundResultText.classList.add('resultMessage');

  if (playerChoice === "ROCK") {
    if (computerChoice === "SCISSORS") {
      roundResult = "You Win! Rock beats Scissors";
    } else if (computerChoice === "PAPER") {
      roundResult = "You Lose! Paper beats Rock";
    } else {
      roundResult = "It's a tie!";
    }
  } else if (playerChoice === "PAPER") {
    if (computerChoice === "ROCK") {
      roundResult = "You Win! Paper beats Rock";
    } else if (computerChoice === "SCISSORS") {
      roundResult = "You Lose! Scissors beats Paper";
    } else {
      roundResult = "It's a tie!";
    }
  } else if (playerChoice === "SCISSORS") {
    if (computerChoice === "PAPER") {
      roundResult = "You Win! Scissors beats Paper";
    } else if (computerChoice === "ROCK") {
      roundResult = "You Lose! Rock beats Scissors";
    } else {
      roundResult = "It's a tie!";
    }
  }

  roundResultText.textContent = roundResult;
  resultsContainer.appendChild(roundResultText);

  const playerScoreDisplay = document.querySelector("#player-score");
  const computerScoreDisplay = document.querySelector("#computer-score");

  let result = roundResult;
  if (result.includes("Win")) {
    playerScore++;
    playerScoreDisplay.textContent = "Player: " + playerScore;
    if (playerScore === 5) {
      alert("Player wins!");
    }
  } else if (result.includes("Lose")) {
    computerScore++;
    computerScoreDisplay.textContent = "Computer: " + computerScore;
    if (computerScore === 5) {
      alert("Computer wins!");
    }
  }

  return;
};

const restartGame = () => {
  playerScore = 0;
  computerScore = 0;
  const playerScoreDisplay = document.querySelector("#player-score");
  const computerScoreDisplay = document.querySelector("#computer-score");
  playerScoreDisplay.textContent = "Player: ";
  computerScoreDisplay.textContent = "Computer: ";

  document.querySelectorAll('.resultMessage').forEach(e => e.remove());

};
