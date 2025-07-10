// Connect to HTML/CSS elements
const cells = document.querySelectorAll(".cell");
const gameStatus = document.getElementById("gameStatus");
const resetButton = document.getElementById("resetButton");

// Define Changes elements

// 9 empty elements in a string, that represent the input fields - will be updated to X or O
let board = ["", "", "", "", "", "", "", "", ""];

// Currently active player - X always starts
let currentPlayer = "X";

// Defines if game is active - at the beginning of the game "true", set to "false" when there is a winner
let gameActive = true;

// Possible winning conditions
const winningConditions = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal (top-left to bottom-right)
    [2, 4, 6]  // Diagonal (top-right to bottom-left)
];

// Handles the clicks of the cells
function handleClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.dataset.cellIndex);

    if (board[clickedCellIndex] !== "" || !gameActive) {
        return; // If cell is occupied or game is not active, do nothing
    }

    board[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    checkResult();
}

// The function is checking if the game has ended in a win or a draw after each move
function checkResult() {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        let a = board[winCondition[0]];
        let b = board[winCondition[1]];
        let c = board[winCondition[2]];

        if (a === "" || b === "" || c === "") {
            continue; // Skip if any cell in the condition is empty
        }
        if (a === b && b === c) {
            roundWon = true;
            break; // Game over!
        }
    }

    if (roundWon) {
        gameStatus.textContent = `Player ${currentPlayer} Wins!`;
        gameActive = false;
        return;
    }

    // Check for a draw
    let roundDraw = !board.includes("");
    if (roundDraw) {
        gameStatus.textContent = "It's a draw";
        gameActive = false;
        return;
    }

    // If no win or draw, indicate whose turn it is
    currentPlayer = currentPlayer === "X" ? "O" : "X"; 
    gameStatus.textContent = `Player ${currentPlayer}'s Turn`;
}

// Resets the game
function resetGame() {
    gameActive = true;
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', '']; // Clear the board array
    gameStatus.textContent = `Player ${currentPlayer}'s Turn`; // Reset status display

    cells.forEach(cell => {
        cell.textContent = '';
    });
}

// Add event listeners
cells.forEach(cell => cell.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetGame);