import React from 'react'

const Keyboard = ({onLetterClick, guessedLetters}) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  
  return (
    <div className="keyboard">
     {letters.map(letter => (
      <button key={letter} className='key' onClick={() => onLetterClick(letter)} disabled={guessedLetters.includes(letter)} style={{
        backgroundColor: guessedLetters.includes(letter) ? '#d9d9d9' : 'brown',
        color: guessedLetters.includes(letter) ? 'black' : 'white',
        cursor: guessedLetters.includes(letter) ? 'default' : 'pointer'
      }}>{letter}</button>
     ))}
    </div>
  )
}

export default Keyboard
