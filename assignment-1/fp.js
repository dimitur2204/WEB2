const winningConditions = [
  [ 0, 1, 2 ],
  [ 3, 4, 5 ],
  [ 6, 7, 8 ],
  [ 0, 3, 6 ],
  [ 1, 4, 7 ],
  [ 2, 5, 8 ],
  [ 0, 4, 8 ],
  [ 2, 4, 6 ],
];

const updateBoard = (board, index, currentPlayer) => {
  if (board[index] !== "") {
    return board;
  }
  return board.map((cell, i) => (i === index ? currentPlayer : cell));
};

const checkWin = (board, currentPlayer) => {
  return winningConditions.some((condition) => {
    const [a, b, c] = condition;
    return (board[a] === currentPlayer && board[b] === currentPlayer &&
            board[c] === currentPlayer);
  });
};

const checkDraw = (board) => { return !board.some((cell) => cell === ""); };

const getStatus = (board, currentPlayer) => {
  if (checkWin(board, currentPlayer)) {
    return `Player ${currentPlayer} has won!`;
  }
  if (checkDraw(board)) {
    return `Game ended in a draw!`;
  }
  return `It's ${currentPlayer}'s turn`;
};

const createTicTacToe = (gameElementId, restartButtonId) => {
  let board = [ "", "", "", "", "", "", "", "", "" ];
  let currentPlayer = "X";
  let gameActive = true;
  const gameElement = document.getElementById(gameElementId);
  const statusDisplay = gameElement.querySelector(".status");
  const cells = gameElement.querySelectorAll(".cell");
  const restartButton = document.getElementById(restartButtonId);

  const renderBoard = (boardState) => {
    cells.forEach((cell, index) => { cell.innerText = boardState[index]; });
  };

  const updateStatus =
      (boardState,
       player) => { statusDisplay.innerText = getStatus(boardState, player); };

  const handleCellClick = (cellIndex) => {
    if (!gameActive || board[cellIndex] !== "") {
      return;
    }

    const newBoard = updateBoard(board, cellIndex, currentPlayer);
    board = newBoard;
    renderBoard(board);

    if (checkWin(board, currentPlayer)) {
      statusDisplay.innerText = `Player ${currentPlayer} has won!`;
      gameActive = false;
      return;
    }

    if (checkDraw(board)) {
      statusDisplay.innerText = `Game ended in a draw!`;
      gameActive = false;
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    updateStatus(board, currentPlayer);
  };

  const handleRestartGame = () => {
    board = [ "", "", "", "", "", "", "", "", "" ];
    currentPlayer = "X";
    gameActive = true;
    renderBoard(board);
    updateStatus(board, currentPlayer);
  };

  const initializeGame = () => {
    cells.forEach((cell, index) => {
      cell.addEventListener("click", () => handleCellClick(index));
    });
    restartButton.addEventListener("click", handleRestartGame);
    renderBoard(board);
    updateStatus(board, currentPlayer);
  };

  initializeGame();

  return {};
};

const fpGame = createTicTacToe("fp-game", "fp-restart");
