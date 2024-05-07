const cells = document.querySelectorAll(".cell");
const restartBtn = document.querySelector("#restart-btn");
const message = document.querySelector("#message");

let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

function handleCellClick(e) {
  const cellIndex = parseInt(e.target.getAttribute("data-cell"));

  if (gameBoard[cellIndex] === "" && gameActive) {
    gameBoard[cellIndex] = currentPlayer;
    e.target.textContent = currentPlayer;
    checkWin();
    checkDraw();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let condition of winConditions) {
    const [a, b, c] = condition;
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      message.textContent = `${currentPlayer} wins!`;
      gameActive = false;
    }
  }
}

function checkDraw() {
  if (!gameBoard.includes("") && gameActive) {
    message.textContent = `It's a draw!`;
    gameActive = false;
  }
}

function restartGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  message.textContent = "";
  cells.forEach((cell) => (cell.textContent = ""));
}

cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
restartBtn.addEventListener("click", restartGame);
