# Hangman Game

A classic and simple Hangman word-guessing game built with React, featuring multiple difficulty levels and a responsive design.

## Features

- **Multiple Difficulty Levels**: Choose between 'Easy' and 'Hard' modes
  - Easy mode reveals the first and last letters of the word
  - Hard mode shows no letters initially
- **Visual Hangman**: Progressive visualization of the hangman as incorrect guesses are made
- **Word Bank**: Large collection of words to guess from (50 words)
- **Game Stats**: Track wrong guesses and game outcomes

## How to Play

1. Start the game and select a difficulty level (Easy or Hard)
2. Guess letters by clicking on the on-screen keyboard
3. You have 6 incorrect guesses before the game ends
4. Correctly guess the word before the hangman is complete to win!

## Game Controls

- Click letter buttons to make guesses
- Use the "Reset Game" button to start over with a new word
- Use the "Back to Start" button to return to the difficulty selection screen

## Technical Implementation

The game is built using:
- React for UI components and state management
- CSS for styling
- SVG for the hangman figure visualization

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AndiTaTaEe/hangman-game.git
cd hangman-game
```

2. Install dependencies: 
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open http://localhost:3000 in your browser to play the game.

## Future Enhancements
- add category selection for words
- implement a high score system
- add sound effects and animations
- create a hint system

