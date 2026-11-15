<div align="center">
  <img src="public/codevix-tic-tac-toe.png" alt="Codevix Tic-Tac-Toe Banner" width="100%" style="max-width: 800px; border-radius: 8px;" />
  <br />
  <br />
  <img src="public/logo-codevix.png" alt="Codevix Logo" width="120" />
  
  # Codevix Tic-Tac-Toe

  **A premium, interactive terminal-based Tic-Tac-Toe game built with Node.js & TypeScript.**

  [![npm version](https://badge.fury.io/js/codevix-tic-tac-toe.svg)](https://www.npmjs.com/package/codevix-tic-tac-toe)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  [Play Instantly](#-play-instantly) • [Features](#-features) • [Gameplay](#-gameplay) • [Development](#-local-development)
</div>

---

## 🚀 Play Instantly (No Installation Required)

You do not need to clone the repository to enjoy the game! If you have Node.js installed, simply open your terminal and run the following command to start playing immediately:

```bash
npx codevix-tic-tac-toe
```

---

## ✨ Features

* **Smart AI Opponent:** A heuristic-based AI that prioritizes winning and aggressively blocks your moves. Outsmart the bot to win!
* **Beautiful Terminal UI:** Crafted using double-lined ASCII borders, `cli-table3`, and vibrant `chalk` colors for a premium CLI experience.
* **Seamless Frame Rendering:** Clears the terminal gracefully between turns to provide a static-canvas gaming feel, preventing messy scrolling clutter.
* **Robust Input Validation:** Prevents application crashes from accidental keystrokes and handles forced interruptions (Ctrl+C) smoothly.
* **Production-Ready:** 100% TypeScript, fully object-oriented, strictly typed, and bundled via ESNext ESM standards.

---

## 📸 Gameplay

Experience a beautifully crafted, colorful ASCII interface directly in your command line.

### Player's Turn
<img src="public/cli-ss/Screenshot_20260716_235923_Termux.jpg" alt="Player Turn" width="600" style="border-radius: 8px;"/>

### Bot Analyzing
<img src="public/cli-ss/Screenshot_20260716_235931_Termux.jpg" alt="Bot Analyzing" width="600" style="border-radius: 8px;"/>

### Game Over Screen
<img src="public/cli-ss/Screenshot_20260716_235936_Termux.jpg" alt="Game Over" width="600" style="border-radius: 8px;"/>

---

## 🏗️ Tech Stack

This project is built using modern, industry-standard tooling:

* <img src="public/svg/typescript.svg" width="16" align="center" /> **TypeScript** (Language)
* <img src="public/svg/nodejs.svg" width="16" align="center" /> **Node.js** (Runtime)
* <img src="public/svg/pnpm.svg" width="16" align="center" /> **pnpm** (Package Manager)
* **tsup** (ESM Bundler)
* **CLI Libraries:** `chalk`, `cli-table3`, `prompts`, `clear`

---

## 💻 Local Development

If you want to view the source code, tweak the AI, or contribute to the project, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/codevix26/codevix-tic-tac-toe.git
cd codevix-tic-tac-toe
```

### 2. Install Dependencies
This project uses `pnpm` as its primary package manager.
```bash
pnpm install
```

### 3. Run the Game Locally
Execute the development script to run the TypeScript files directly.
```bash
pnpm dev
```

### 4. Build for Production
Compile the TypeScript source code into minified JavaScript (`dist/` folder).
```bash
pnpm build
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are highly welcome! 
Please feel free to check out our [CONTRIBUTING.md](./CONTRIBUTING.md) for details on how to get started.

---

## 👤 Author & Links

Developed with ❤️ by **Codevix**.

* <img src="public/svg/internet.svg" width="16" align="center" /> **Website:** [codevix.in](https://codevix.in)
* <img src="public/svg/github.svg" width="16" align="center" /> **GitHub:** [@codevix26](https://github.com/codevix26)
* ✉️ **Email:** [mail@codevix.in](mailto:mail@codevix.in)

## ⚖️ License

This project is open-source and distributed under the [MIT License](LICENSE).
