import React from 'react'
import Column from '../Columns/Column'
import "./Board.css"
import { columnColors } from '../../Data/InitialData'
 
export default function Board({content}) {
  return (
    <div className="board">
      <header className="board-header">
        {`/projects/${content.name}`}
      </header>
      <h2>{content.name}</h2>
      <main className="board-content">
        {content.columns.map((column, index) => {
          return (
            <Column
              key={column.id}
              column={column}
              color={columnColors[index]}
              tasks={content.tasks.filter(task => task.columnId === column.id)}
            />
          )
        })}
        <div className="column column-form">
          <header>
            <button>+ ADD A COLUMN</button>
          </header>
        </div>
      </main>
    </div>
  )
}
