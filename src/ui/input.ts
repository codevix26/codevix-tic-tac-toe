import prompts from 'prompts';
import chalk from 'chalk';

/**
 * Prompts the user to select a valid move from the available options on the board.
 * Utilizes the 'prompts' library to ensure an interactive and safely validated input stream.
 *
 * @param {number[]} availableMoves - An array of currently unoccupied board indices (e.g., [1, 2, 4, 7]).
 * @returns {Promise<number>} A promise that resolves to the user's validated move (1-9).
 */
export async function getUserMove(availableMoves: number[]): Promise<number> {
  const response = await prompts(
    {
      type: 'text', // Using 'text' instead of 'number' to retain full control over validation logic and avoid prompt UI glitches.
      name: 'move',
      message: chalk.cyanBright('Your turn! Select an empty box (1-9):'),
      validate: (value: string) => {
        const num = parseInt(value.trim(), 10);

        // 1. Validate boundary conditions and data type
        if (isNaN(num) || num < 1 || num > 9) {
          return chalk.red('❌ Invalid input! Please enter a number between 1 and 9.');
        }

        // 2. Ensure the selected cell is not already occupied by 'X' or 'O'
        if (!availableMoves.includes(num)) {
          return chalk.red('⚠️ This box is already occupied! Please choose an empty box.');
        }

        return true; // Input passes all validations
      },
    },
    {
      // Handle graceful termination if the user sends a SIGINT (Ctrl+C) during the prompt
      onCancel: () => {
        console.log(chalk.redBright('\n\nGame terminated by user. See you next time! 👋\n'));
        process.exit(0);
      },
    }
  );

  // Convert the validated string input back to a base-10 integer before returning to the core controller
  return parseInt(response.move, 10);
}
