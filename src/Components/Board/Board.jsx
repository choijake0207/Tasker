import React from 'react'
import Column from '../Columns/Column'
import "./Board.css"

export default function Board({content}) {
  return (
    <div className="board">
      <header className="board-header">{content.name}</header>
      <main className="board-content">
        {content.columns.map(column => {
          return (
            <Column
              column={column}
              content={content}
              tasks={content.tasks.filter(task => task.columnId === column.id)}
            />
          )
        })}
      </main>
    </div>
  )
}
