import React from 'react'

const HangmanFigure = ({wrongGuesses=0}) => {

  return (
    <div className="hangman-figure">
      <svg width="200" height="250">
        {/* Baza spânzurătorii */}
        <line x1="10" y1="240" x2="190" y2="240" stroke="black" strokeWidth="4" />
        {/* Stâlp vertical */}
        <line x1="50" y1="240" x2="50" y2="20" stroke="black" strokeWidth="4" />
        {/* Bara orizontală */}
        <line x1="50" y1="20" x2="150" y2="20" stroke="black" strokeWidth="4" />
        {/* Frânghia */}
        <line x1="150" y1="20" x2="150" y2="50" stroke="black" strokeWidth="4" />
         {/* Cap */}
         {wrongGuesses > 0 && (
          <circle cx="150" cy="70" r="20" stroke="black" strokeWidth="4" fill="none" />
        )}
        
        {/* Trunchi */}
        {wrongGuesses > 1 && (
          <line x1="150" y1="90" x2="150" y2="150" stroke="black" strokeWidth="4" />
        )}
        
        {/* Mâna stângă */}
        {wrongGuesses > 2 && (
          <line x1="150" y1="100" x2="120" y2="130" stroke="black" strokeWidth="4" />
        )}
        
        {/* Mâna dreaptă */}
        {wrongGuesses > 3 && (
          <line x1="150" y1="100" x2="180" y2="130" stroke="black" strokeWidth="4" />
        )}
        
        {/* Piciorul stâng */}
        {wrongGuesses > 4 && (
          <line x1="150" y1="150" x2="120" y2="190" stroke="black" strokeWidth="4" />
        )}
        
        {/* Piciorul drept */}
        {wrongGuesses > 5 && (
          <line x1="150" y1="150" x2="180" y2="190" stroke="black" strokeWidth="4" />
        )}
      </svg>
      <p>Wrong Guesses: {wrongGuesses}/6</p>
    </div>
  )
}

export default HangmanFigure
