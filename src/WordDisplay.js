import React from 'react'

const WordDisplay = ({displayedWord = "", guessedLetters = [], difficulty="hard"}) => {

  const displayWord = displayedWord ? displayedWord.split('').map((letter, index) => {
    if (difficulty === "easy" && (index === 0 || index === displayedWord.length-1)) {
      return letter;
    }
    return guessedLetters.includes(letter) ? letter : '_';
  }).join(' ') : "_ _ _ _ _ _ _ _";
  

  return (
    <div className="word-display">
    
      <h1> Word: {displayWord} </h1>
    </div>
  )
}

export default WordDisplay
