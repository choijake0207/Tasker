import React from 'react'
import "./Board.css"

export default function Board({content}) {
  return (
    <div className="board">
      <header className="board-header">{content.name}</header>
      <main className="board-content">

      </main>
    </div>
  )
}
