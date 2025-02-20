const createTicTacToe = (gameElementId, restartButtonId) => {
  let board = ["", "", "", "", "", "", "", "", ""];
  let currentPlayer = "X";
  let gameActive = true;
  const gameElement = document.getElementById(gameElementId);
  const statusDisplay = gameElement.querySelector(".status");
  const cells = gameElement.querySelectorAll(".cell");
  const restartButton = document.getElementById(restartButtonId);
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const updateStatus = () => {
    statusDisplay.innerText = `It's ${currentPlayer}'s turn`;
  };

  const handleResultValidation = () => {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
      const winCondition = winningConditions[i];
      const a = board[winCondition[0]];
      const b = board[winCondition[1]];
      const c = board[winCondition[2]];
      if (a === "" || b === "" || c === "") {
        continue;
      }
      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }

    if (roundWon) {
      statusDisplay.innerText = `Player ${currentPlayer} has won!`;
      gameActive = false;
      return;
    }

    let roundDraw = !board.includes("");
    if (roundDraw) {
      statusDisplay.innerText = `Game ended in a draw!`;
      gameActive = false;
      return;
    }

    handlePlayerChange();
  };

  const handlePlayerChange = () => {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    updateStatus();
  };

  const handleCellClick = (cellIndex) => {
    if (!gameActive || board[cellIndex] !== "") {
      return;
    }

    board[cellIndex] = currentPlayer;
    cells[cellIndex].innerText = currentPlayer;
    handleResultValidation();
  };

  const handleRestartGame = () => {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    cells.forEach((cell) => (cell.innerText = ""));
    updateStatus();
  };

  const initializeGame = () => {
    cells.forEach((cell, index) => {
      cell.addEventListener("click", () => handleCellClick(index));
    });
    restartButton.addEventListener("click", handleRestartGame);
    updateStatus();
  };

  initializeGame();

  return {}; // Return an empty object as the API (no public methods)
};

const fpGame = createTicTacToe("fp-game", "fp-restart");

