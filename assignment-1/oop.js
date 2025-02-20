class TicTacToe {
  constructor(gameElementId, restartButtonId) {
    this.board = ["", "", "", "", "", "", "", "", ""];
    this.currentPlayer = "X";
    this.gameActive = true;
    this.gameElement = document.getElementById(gameElementId);
    this.statusDisplay = this.gameElement.querySelector(".status");
    this.cells = this.gameElement.querySelectorAll(".cell");
    this.restartButton = document.getElementById(restartButtonId);
    this.winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    this.initializeGame();
  }

  initializeGame() {
    this.cells.forEach((cell, index) => {
      cell.addEventListener("click", () => this.handleCellClick(index));
    });
    this.restartButton.addEventListener("click", () => this.handleRestartGame());
    this.updateStatus();
  }

  handleCellClick(cellIndex) {
    if (!this.gameActive || this.board[cellIndex] !== "") {
      return;
    }

    this.board[cellIndex] = this.currentPlayer;
    this.cells[cellIndex].innerText = this.currentPlayer;
    this.handleResultValidation();
  }

  handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
      const winCondition = this.winningConditions[i];
      const a = this.board[winCondition[0]];
      const b = this.board[winCondition[1]];
      const c = this.board[winCondition[2]];
      if (a === "" || b === "" || c === "") {
        continue;
      }
      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }

    if (roundWon) {
      this.statusDisplay.innerText = `Player ${this.currentPlayer} has won!`;
      this.gameActive = false;
      return;
    }

    let roundDraw = !this.board.includes("");
    if (roundDraw) {
      this.statusDisplay.innerText = `Game ended in a draw!`;
      this.gameActive = false;
      return;
    }

    this.handlePlayerChange();
  }

  handlePlayerChange() {
    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    this.updateStatus();
  }

  handleRestartGame() {
    this.board = ["", "", "", "", "", "", "", "", ""];
    this.currentPlayer = "X";
    this.gameActive = true;
    this.cells.forEach((cell) => (cell.innerText = ""));
    this.updateStatus();
  }

  updateStatus() {
    this.statusDisplay.innerText = `It's ${this.currentPlayer}'s turn`;
  }
}

const oopGame = new TicTacToe("oop-game", "oop-restart");

