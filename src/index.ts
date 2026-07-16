#!/usr/bin/env node

/**
 * Main entry point for the Codevix Tic-Tac-Toe CLI application.
 * Orchestrates the game loop, state management, and user interactions.
 */

import chalk from 'chalk';
import prompts from 'prompts';
import { Board } from './core/Board.js';
import { getBotMove } from './core/Bot.js';
import { renderBoard } from './ui/render.js';
import { getUserMove } from './ui/input.js';
import { sleep } from './utils/helpers.js';

/**
 * Initializes and manages the core game loop.
 * Operates asynchronously to accommodate non-blocking UI prompts and artificial Bot delays.
 * 
 * @returns {Promise<void>}
 */
async function startGame(): Promise<void> {
  let isPlaying = true;

  // Outer loop to handle replay functionality without restarting the entire CLI process
  while (isPlaying) {
    const board = new Board();
    let isPlayerTurn = true; // The human player ('X') always initiates the game

    // Inner loop for the active game session
    while (true) {
      // 1. Render the current state of the grid
      renderBoard(board.getState());

      const availableMoves = board.getAvailableMoves();

      if (isPlayerTurn) {
        // 2a. Handle Human Player Turn
        const move = await getUserMove(availableMoves);
        board.updateMove(move, 'X');
      } else {
        // 2b. Handle Bot Turn
        console.log(chalk.yellow('🤖 Bot is analyzing the board...'));
        
        // Introduce a slight delay to simulate processing time and improve UX
        await sleep(800); 
        
        const move = getBotMove(board.getState(), availableMoves, 'O', 'X');
        board.updateMove(move, 'O');
      }

      // 3. Evaluate End-Game Conditions (Win)
      const winner = board.checkWinner();
      if (winner) {
        renderBoard(board.getState());
        
        if (winner === 'X') {
          console.log(chalk.green.bold('🎉 Congratulations! You outsmarted the Bot! \n'));
        } else {
          console.log(chalk.red.bold('💀 Game Over! The Bot has defeated you. \n'));
        }
        break; // Exit the inner game loop
      }

      // 4. Evaluate End-Game Conditions (Draw)
      if (board.isDraw()) {
        renderBoard(board.getState());
        console.log(chalk.yellow.bold('🤝 It\'s a Draw! A battle of equals. \n'));
        break; // Exit the inner game loop
      }

      // 5. Toggle turn mechanism
      isPlayerTurn = !isPlayerTurn;
    }

    // 6. Post-game Prompt: Ask the user if they wish to initiate a new session
    const response = await prompts({
      type: 'confirm',
      name: 'playAgain',
      message: chalk.cyan('Do you want to play another round?'),
      initial: true
    });

    // If the user presses Ctrl+C during the prompt, gracefully terminate
    if (response.playAgain === undefined) {
      break;
    }

    isPlaying = response.playAgain;
  }

  // Final exit sequence
  console.log(chalk.magenta('\nThanks for playing Codevix Tic-Tac-Toe! Catch you later! 👋\n'));
  process.exit(0);
}

// Global Exception Handlers to ensure the terminal state is preserved gracefully
process.on('SIGINT', () => {
  console.log(chalk.redBright('\n\nGame terminated forcefully. See you next time! 👋\n'));
  process.exit(0);
});

// Initialize application
startGame().catch((err) => {
  console.error(chalk.red('An unexpected error occurred:'), err);
  process.exit(1);
});
