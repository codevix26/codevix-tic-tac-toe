import Table from 'cli-table3';
import chalk from 'chalk';
import clear from 'clear';

/**
 * Renders the game board to the standard output.
 * Utilizes a double-lined ASCII table for a premium terminal UI experience.
 * Includes a large ASCII header and developer branding.
 * 
 * @param {string[]} board - An array of 9 strings representing the current state of the grid.
 * @returns {void}
 */
export function renderBoard(board: string[]): void {
  // 1. Clear the terminal to create a seamless frame-refresh effect.
  clear();

  // 2. Render Large ASCII Header
  const asciiTitle = `
   _____ _   ___   _____ _   ___   _____ ___  ___ 
  |_   _| | / __| |_   _/_\\ / __| |_   _/ _ \\| __|
    | | | || (__    | |/ _ \\ (__    | || (_) | _| 
    |_| |_| \\___|   |_/_/ \\_\\___|   |_| \\___/|___|
  `;
  console.log(chalk.bold.magenta(asciiTitle));

  // 3. Render Developer Credentials
  console.log(
    chalk.cyan(' 🌐 Web: ') + chalk.white('codevix.in') + 
    chalk.cyan(' | 🐙 GitHub: ') + chalk.white('codevix26') + 
    chalk.cyan(' | ✉️ Email: ') + chalk.white('mail@codevix.in')
  );

  console.log(chalk.dim.gray('\n    Outsmart the Bot to Win!\n'));

  // 4. Initialize the table with double-line ASCII borders for a polished look.
  const table = new Table({
    chars: {
      'top': '═', 'top-mid': '╤', 'top-left': '╔', 'top-right': '╗',
      'bottom': '═', 'bottom-mid': '╧', 'bottom-left': '╚', 'bottom-right': '╝',
      'left': '║', 'left-mid': '╟', 'mid': '─', 'mid-mid': '┼',
      'right': '║', 'right-mid': '╢', 'middle': '│'
    },
    colWidths: [7, 7, 7], // Ensures square-like proportions for each grid cell
    colAligns: ['center', 'center', 'center'],
    style: {
      border: ['yellow'], // Applies a uniform color to the grid infrastructure
    }
  });

  /**
   * Helper utility to map cell state to its corresponding visual theme.
   * 
   * @param {string} cell - The raw value of the cell.
   * @returns {string} The ANSI-formatted string for terminal rendering.
   */
  const formatCell = (cell: string): string => {
    if (cell === 'X') return chalk.bold.red('X');
    if (cell === 'O') return chalk.bold.cyan('O');
    
    // Unoccupied cells display their reference number dimmed
    return chalk.dim.gray(cell); 
  };

  // 5. Construct the grid rows mapping the flat 1D state array to a 3x3 2D matrix view.
  const row1 = [formatCell(board[0]), formatCell(board[1]), formatCell(board[2])];
  const row2 = [formatCell(board[3]), formatCell(board[4]), formatCell(board[5])];
  const row3 = [formatCell(board[6]), formatCell(board[7]), formatCell(board[8])];

  table.push(row1, row2, row3);

  // 6. Output the compiled table to stdout
  console.log(table.toString());
  console.log('\n');
}
