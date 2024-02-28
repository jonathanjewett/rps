console.log("Hello, World! And Tacos");

const getComputerChoice = () => {
  const compChoices = ["Rock", "Paper", "Scissors"];
  return compChoices[Math.floor(Math.random() * 3)];
};

// const playerSelection = 'paper';
// const computerSelection = getComputerChoice();

const playRound = (playerSelection, computerSelection) => {
  const playerChoice = playerSelection.toUpperCase();
  const computerChoice = computerSelection.toUpperCase();

  if (playerChoice === "ROCK") {
    if (computerChoice === "SCISSORS") {
      return "You Win! Rock beats Scissors";
    } else if (computerChoice === "PAPER") {
      return "You Lose! Paper beats Rock";
    } else {
      return "It's a tie!";
    }
  } else if (playerChoice === "PAPER") {
    if (computerChoice === "ROCK") {
      return "You Win! Paper beats Rock";
    } else if (computerChoice === "SCISSORS") {
      return "You Lose! Scissors beats Paper";
    } else {
      return "It's a tie!";
    }
  } else if (playerChoice === "SCISSORS") {
    if (computerChoice === "PAPER") {
      return "You Win! Scissors beats Paper";
    } else if (computerChoice === "ROCK") {
      return "You Lose! Rock beats Scissors";
    } else {
      return "It's a tie!";
    }
  }
};

const playGame = () => {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerInput = prompt("Choose Rock, Paper, or Scissors");
    let result = playRound(playerInput, getComputerChoice());
    if (result.includes("Win")) {
      playerScore++;
    } else if (result.includes("Lose")) {
      computerScore++;
    }
    console.log(result);
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);
  }

  if (playerScore > computerScore) {
    return 'Player wins! Final Score ' + playerScore + ' to ' + computerScore;
  } else if (playerScore < computerScore) {
    return 'Player loses! Final Score ' + playerScore + ' to ' + computerScore;
  } else {
    return 'You tied, wow, what are the chances?? Final Score ' + playerScore + ' to ' + computerScore;
  }
};

// console.log(playRound(playerSelection, computerSelection));

console.log(playGame());
