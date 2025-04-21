import React from 'react'

const Difficulty = ({difficulty, onDifficultyChange}) => {

  return (
    <div className='difficulty-container'>
        <h2> Choose the difficulty </h2>
        <div className='difficulty-options'>
            <input type="radio" id="easy" name="difficulty" value="easy" checked={difficulty === "easy"} onChange={() => onDifficultyChange("easy")} />
            <label htmlFor="easy">Easy</label>

            <input type="radio" id="hard" name="difficulty" value="hard" checked={difficulty === "hard"} onChange={() => onDifficultyChange("hard")} />
            <label htmlFor="easy">Hard</label>
        </div>
    </div>
  )
}

export default Difficulty
