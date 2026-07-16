/**
 * Contains the artificial intelligence logic for the computer opponent.
 * Uses a heuristic rule-based approach to provide a challenging but beatable opponent.
 */

// Define the 8 possible winning combinations (indices 0-8 corresponding to grid cells 1-9)
const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
];

/**
 * Determines the best next move for the bot based on the current board state.
 * * @param {string[]} board - The current state of the 9-cell board.
 * @param {number[]} availableMoves - An array of unoccupied cell numbers (1-9).
 * @param {string} botMarker - The symbol used by the bot (default is 'O').
 * @param {string} playerMarker - The symbol used by the human player (default is 'X').
 * @returns {number} The chosen move as a 1-based index (1-9).
 */
export function getBotMove(
  board: string[], 
  availableMoves: number[], 
  botMarker: string = 'O', 
  playerMarker: string = 'X'
): number {
  
  /**
   * Helper function to find a critical move (either to win or to block the opponent).
   * @param {string} marker - The marker to check for ('X' or 'O').
   * @returns {number | null} The 1-based index of the critical move, or null if none exists.
   */
  const findCriticalMove = (marker: string): number | null => {
    for (const combo of WINNING_COMBINATIONS) {
      const [a, b, c] = combo;
      const cells = [board[a], board[b], board[c]];
      
      // Check if two cells in a winning combo belong to the given marker and the third is empty
      const markerCount = cells.filter(cell => cell === marker).length;
      const emptyCells = combo.filter(index => board[index] !== botMarker && board[index] !== playerMarker);

      if (markerCount === 2 && emptyCells.length === 1) {
        // Return the empty cell index converted to a 1-based move (1-9)
        return emptyCells[0] + 1; 
      }
    }
    return null;
  };

  // Rule 1: Offensive Strategy - Check if the bot can win on this turn
  const winningMove = findCriticalMove(botMarker);
  if (winningMove !== null) return winningMove;

  // Rule 2: Defensive Strategy - Check if the player is about to win, and block them
  const blockingMove = findCriticalMove(playerMarker);
  if (blockingMove !== null) return blockingMove;

  // Rule 3: Strategic Positioning - Take the center square (5) if it is available
  if (availableMoves.includes(5)) {
    return 5;
  }

  // Rule 4: Fallback Strategy - Pick a random available square
  const randomIndex = Math.floor(Math.random() * availableMoves.length);
  return availableMoves[randomIndex];
}
