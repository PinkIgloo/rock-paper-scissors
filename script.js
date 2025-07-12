const options = ["Rock", "Paper", "Scissors"];
let playerWins = 0;
let computerWins = 0;

function play(playerMove) {
  const computerMove = options[Math.floor(Math.random() * options.length)];

  let result = `Player chose: ${playerMove}<br>Computer chose: ${computerMove}<br>`;

  if (playerMove === computerMove) {
    result += "It's a tie!";
  } else {
    const playerWinsRound =
      (playerMove === "Rock" && computerMove === "Scissors") ||
      (playerMove === "Paper" && computerMove === "Rock") ||
      (playerMove === "Scissors" && computerMove === "Paper");

    if (playerWinsRound) {
      playerWins++;
      result += "🎉 Player wins this round!";
    } else {
      computerWins++;
      result += "💻 Computer wins this round!";
    }
  }

  // Update score display
  document.getElementById("result").innerHTML = result;
  document.getElementById("score").innerText = `Computer: ${computerWins} - Player: ${playerWins}`;

  // Check for game over
  if (playerWins === 3 || computerWins === 3) {
    const finalMessage = playerWins === 3 
      ? "🏆 Player wins the game!" 
      : "💀 Computer wins the game!";

    document.getElementById("result").innerHTML += `<br><strong>${finalMessage}</strong>`;
    
    // Reset for a new game
    playerWins = 0;
    computerWins = 0;
  }
}
