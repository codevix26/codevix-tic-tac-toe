/**
 * Represents the core state and operational logic of the Tic-Tac-Toe board.
 * Encapsulates board manipulation, win detection, and draw validation.
 */
export class Board {
  /** 
   * Represents the 9 cells of the board. 
   * State is private to prevent unauthorized mutations from outside the class.
   */
  private state: string[];

  /**
   * Defines the 8 possible winning combinations (indices 0-8).
   * Marked as read-only to ensure structural integrity throughout the game lifecycle.
   */
  private readonly WINNING_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  /**
   * Initializes a fresh board instance.
   * Cells are populated with strings '1' through '9' to serve as visual reference points for the user.
   */
  constructor() {
    this.state = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  }

  /**
   * Retrieves a read-only copy of the current board state.
   * Using the spread operator ensures the internal state reference is not leaked.
   * 
   * @returns {string[]} An array of 9 strings representing the board layout.
   */
  public getState(): string[] {
    return [...this.state];
  }

  /**
   * Scans the board to identify all currently unoccupied cells.
   * 
   * @returns {number[]} An array of available moves formatted as 1-based indices (1-9).
   */
  public getAvailableMoves(): number[] {
    const available: number[] = [];
    
    this.state.forEach((cell, index) => {
      // If the cell does not contain an 'X' or 'O', it is deemed available
      if (cell !== 'X' && cell !== 'O') {
        available.push(index + 1); // Convert the 0-based array index to a 1-based move
      }
    });
    
    return available;
  }

  /**
   * Applies a player's or bot's move to the board state.
   * 
   * @param {number} move - The targeted cell number (1-9).
   * @param {string} marker - The symbol to place on the board ('X' or 'O').
   * @returns {boolean} True if the move was valid and applied, false otherwise.
   */
  public updateMove(move: number, marker: string): boolean {
    const index = move - 1;
    
    // Validate boundary conditions and ensure the target cell is not already occupied
    if (index >= 0 && index < 9 && this.state[index] !== 'X' && this.state[index] !== 'O') {
      this.state[index] = marker;
      return true;
    }
    
    return false;
  }

  /**
   * Evaluates the current board state against all winning combinations.
   * 
   * @returns {string | null} Returns the winning marker ('X' or 'O'), or null if no winner exists yet.
   */
  public checkWinner(): string | null {
    for (const combo of this.WINNING_COMBINATIONS) {
      const [a, b, c] = combo;
      
      // Check if all three indices in a combination share the identical marker
      if (
        this.state[a] === this.state[b] &&
        this.state[a] === this.state[c]
      ) {
        return this.state[a]; 
      }
    }
    
    return null;
  }

  /**
   * Determines if the game has reached a stalemate (draw).
   * A draw occurs when there are no available moves left and no winner has been declared.
   * 
   * @returns {boolean} True if the game is a draw, false otherwise.
   */
  public isDraw(): boolean {
    return this.checkWinner() === null && this.getAvailableMoves().length === 0;
  }
}
