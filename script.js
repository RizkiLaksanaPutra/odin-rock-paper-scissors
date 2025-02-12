const getHumanChoice = () =>
  prompt("Input Rock, Paper, or Scissors:").toLowerCase();

const getComputerChoice = function () {
  const computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

function playGame() {
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanSelection, computerSelection) {
    const winConditions =
      (humanSelection === "rock" && computerSelection === "scissors") ||
      (humanSelection === "paper" && computerSelection === "rock") ||
      (humanSelection === "scissors" && computerSelection === "paper");

    const loseConditions =
      (computerSelection === "rock" && humanSelection === "scissors") ||
      (computerSelection === "paper" && humanSelection === "rock") ||
      (computerSelection === "scissors" && humanSelection === "paper");

    if (winConditions) {
      alert(`You win! ${humanSelection} beats ${computerSelection}`);
      humanScore++;
    } else if (loseConditions) {
      alert(`You lose! ${computerSelection} beats ${humanSelection}`);
      computerScore++;
    } else {
      alert(`Game tie both selected ${humanSelection}`);
    }

    if (humanScore < 5 && computerScore < 5) {
      humanSelection = getHumanChoice();
      computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
    }
    document.getElementById('finalScore').innerText = `Final score: Human = ${humanScore}, Computer = ${computerScore}`;
  }

  playRound(humanSelection, computerSelection);
}

playGame();
