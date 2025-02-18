const humanSelection = document.querySelectorAll("button[value]");
const playerChoiceElement = document.getElementById("playerChoice");
const computerChoiceElement = document.getElementById("computerChoice");
const playerScoreElement = document.getElementById("playerScore");
const computerScoreElement = document.getElementById("computerScore");
const gameTitle = document.getElementById("title");
const gameDesc = document.getElementById("description");
const gameResult = document.getElementById("result");
const gameModal = document.querySelector(".modal");
const playAgainBtn = document.getElementById("playAgain");

[...humanSelection].map((choice) => {
  choice.addEventListener("click", () => {
    switch (choice.value) {
      case "rock":
        playerChoiceElement.textContent = "✊";
        break;
      case "paper":
        playerChoiceElement.textContent = "✋";
        break;
      case "scissors":
        playerChoiceElement.textContent = "✌️";
    }
    playGame(choice.value);
  });
});

const getComputerChoice = function () {
  const choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    computerChoiceElement.textContent = "✊";
    return "rock";
  } else if (choice === 1) {
    computerChoiceElement.textContent = "✋";
    return "paper";
  } else {
    computerChoiceElement.textContent = "✌️";
    return "scissors";
  }
};

let playerScore = 0;
let computerScore = 0;
let finish = false;

function playGame(humanSelection) {
  let computerSelection = getComputerChoice();

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
      playerScore++;
      playerScoreElement.textContent = playerScore;
      gameTitle.textContent = "You win!";
      gameDesc.textContent = `${humanSelection} beats ${computerSelection}`;
    } else if (loseConditions) {
      computerScore++;
      computerScoreElement.textContent = computerScore;
      gameTitle.textContent = "You lose!";
      gameDesc.textContent = `${humanSelection} is beaten by ${computerSelection}`;
    } else {
      gameTitle.textContent = "Game tie!";
      gameDesc.textContent = `${humanSelection} ties with ${computerSelection}`;
    }

    if (playerScore === 5) {
      gameResult.textContent = "You win the Game!";
      finish = true;
    } else if (computerScore === 5) {
      gameResult.textContent = "You lost the Game!";
      finish = true;
    }

    if (finish) gameModal.classList.add("show");
  }

  playRound(humanSelection, computerSelection);
}

playAgainBtn.addEventListener('click', () => {
  location.reload();
})