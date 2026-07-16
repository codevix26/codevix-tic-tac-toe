/**
 * Utility functions for the Tic-Tac-Toe CLI application.
 * Provides generic, reusable helper methods isolated from core game or UI logic.
 */

/**
 * Asynchronously pauses the execution thread for a specified duration.
 * Utilizes Promises to create a non-blocking delay. This is essential for mimicking 
 * human-like processing time (e.g., giving the illusion that the Bot is "thinking") 
 * without freezing the entire Node.js event loop.
 *
 * @param {number} ms - The duration to pause execution in milliseconds.
 * @returns {Promise<void>} A promise that resolves after the specified delay.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
