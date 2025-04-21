import React, { useEffect, useState } from "react";
import "./styles.css";
import HangmanFigure from "./HangmanFigure";
import WordDisplay from "./WordDisplay";
import Keyboard from "./Keyboard";
import Difficulty from "./Difficulty";
import { getRandomWord } from "./Wordbank";

const Game = () => {
  const [secretWord, setSecretWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [didWin, setDidWin] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");

  const [page, setPage] = useState('start');

  useEffect (() => {
    if (page === 'game') {
      const word = getRandomWord();
      setSecretWord(word);

      if (difficulty === "easy" && word.length > 0) {
        setGuessedLetters([word[0], word[word.length-1]]);
      } else {
        setGuessedLetters([]);
      } 
    } 
  }, [page, difficulty]);

  const handleDifficultyChange = (newDifficulty) => {
    setDifficulty(newDifficulty);
  }

  const startGame = () => {
    setPage('game');
  }

  const checkWin = (word, guessed) => {
    return [...word].every(letter => guessed.includes(letter));
  }

  const resetGame = () => {
    const newWord = getRandomWord();
    setSecretWord(newWord);
    if (difficulty === "easy" && newWord.length > 0) {
      setGuessedLetters([newWord[0], newWord[newWord.length-1]]);
    } else {
      setGuessedLetters([]);
    } 
    setWrongGuesses(0);
    setGameOver(false);
    setDidWin(false);
  }
  

  const handleLetterClick = (letter) => {

    if (gameOver) return;

    if (!guessedLetters.includes(letter)) {
      const newGuessedLetters = [...guessedLetters, letter];
      setGuessedLetters(newGuessedLetters);
    
      if (!secretWord.includes(letter)) {
        const newWrongGuesses = wrongGuesses + 1;
        setWrongGuesses(newWrongGuesses);
    
        if (newWrongGuesses >=6) {
          setGameOver(true);
          setDidWin(false);
        }
       } 
       else {
          if (checkWin(secretWord,newGuessedLetters)) {
            setGameOver(true);
            setDidWin(true);
          }
        }
      }
  }

  if (page === 'start') {
    return (
      <div className="difficulty-page">
        <h1> Welcome to Hangman! </h1>
        <p> Choose the difficulty and start the game! </p>
        <Difficulty 
          difficulty={difficulty} 
          onDifficultyChange={handleDifficultyChange} 
        />
        <button className="start-btn" onClick={startGame}>Start Game</button>
      </div>
    );
  }


return (
  <div className="game-container">
    <HangmanFigure wrongGuesses = {wrongGuesses} />
    <WordDisplay displayedWord={secretWord} guessedLetters={guessedLetters} />
    {gameOver && (
      <div className ={`game-over-${didWin ? 'win' : 'lose'}`}>
        {didWin ? (
          <h3> Congrats, you guessed the word {secretWord}! </h3>
        ) : (
          <h3> Sorry, you lost! The word was {secretWord}</h3>
        )}
        <button className="reset-btn" onClick={resetGame}>Reset Game</button>
      </div>
    )}
    <Keyboard onLetterClick={handleLetterClick} guessedLetters={guessedLetters} disabled = {gameOver} />
    <div className = "back-to-start-container">
      <p> Want to play again? </p>
    <button className="back-to-start" onClick={() => setPage('start')}>Back to Start</button>
    </div>
  </div>
)

};

export default Game;
