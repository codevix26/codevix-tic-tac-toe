# Contributing to Codevix Tic-Tac-Toe

First off, thank you for considering contributing to Codevix Tic-Tac-Toe! It's people like you that make open-source such a great community to learn, inspire, and create. 

Whether you're fixing a bug, improving the AI, or adding new features, your help is greatly appreciated.

---

## 🛠️ How Can I Contribute?

### 1. Reporting Bugs
If you find a bug, please create an issue on GitHub. Include as much detail as possible:
* Your operating system and terminal emulator.
* Node.js and pnpm version.
* Steps to reproduce the bug.
* Screenshots (if applicable).

### 2. Suggesting Enhancements
Have an idea to make the game better? Maybe a multiplayer mode, different board sizes, or a harder AI? 
* Open an issue with the label `enhancement`.
* Explain why this feature would be useful to most users.

### 3. Pull Requests (Code Contributions)
We actively welcome your pull requests! Here is the step-by-step process to get your code merged.

---

## 💻 Local Development Setup

To contribute code, you will need to set up the project locally.

**Prerequisites:**
* [Node.js](https://nodejs.org/) (v18 or higher recommended)
* [pnpm](https://pnpm.io/installation) (We use `pnpm` strictly instead of `npm` or `yarn`)

**Step-by-Step Guide:**

1. **Fork the Repository**
   Click the "Fork" button at the top right of this page to create your own copy of the repository.

2. **Clone your Fork**
   ```bash
   git clone [https://github.com/](https://github.com/)<your-username>/codevix-tic-tac-toe.git
   cd codevix-tic-tac-toe
   ```

3. **Install Dependencies**
   ```bash
   pnpm install
   ```

4. **Create a Branch**
   Always create a new branch for your work. Do not work directly on the `main` branch.
   ```bash
   git checkout -b feature/your-feature-name
   # or for bug fixes:
   git checkout -b fix/your-bug-fix
   ```

5. **Run the Game Locally**
   While making changes, you can test the game instantly using the dev script:
   ```bash
   pnpm dev
   ```

6. **Build for Production**
   Before submitting your code, ensure it builds without any TypeScript errors:
   ```bash
   pnpm build
   ```

---

## 📂 Project Structure Overview

To help you navigate the codebase:
* `src/index.ts`: The main entry point and game loop orchestrator.
* `src/core/Board.ts`: Object-oriented state management for the 3x3 grid.
* `src/core/Bot.ts`: The heuristic AI logic for the computer opponent.
* `src/ui/render.ts`: Handles drawing the colorful CLI grid.
* `src/ui/input.ts`: Manages asynchronous user prompts.
* `src/utils/helpers.ts`: Generic utility functions like non-blocking delays.

---

## 📝 Commit Guidelines

We prefer clean, structured commit messages. Try to follow the [Conventional Commits](https://www.conventionalcommits.org/) format:

* `feat: added impossible mode to AI` (For new features)
* `fix: resolved crashing issue on Ctrl+C` (For bug fixes)
* `docs: updated README with new screenshots` (For documentation changes)
* `refactor: cleaned up board rendering logic` (For code improvements without new features)

---

## 🚀 Submitting a Pull Request

1. Commit your changes and push them to your forked repository:
   ```bash
   git add .
   git commit -m "feat: your descriptive commit message"
   git push origin your-branch-name
   ```
2. Go to the original Codevix Tic-Tac-Toe repository.
3. You will see a prompt to **Compare & pull request**. Click it!
4. Fill out the PR template/description clearly explaining what you changed and why.
5. Submit the PR, and a maintainer will review it shortly!

---

## ⚖️ License Acknowledgement

By contributing to Codevix Tic-Tac-Toe, you agree that your contributions will be licensed under its MIT License.
