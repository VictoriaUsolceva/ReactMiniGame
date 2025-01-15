import React from 'react'

export default function GameOver({message, clearSetca, setShowDiv}) {

  return (
    <div id='game-over'>
        <h1>Уведомление</h1>
        <h2>{message}</h2>
        <button onClick={() => clearSetca(setShowDiv)}>OK</button>
    </div>
  )
}
