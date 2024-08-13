import React, {useState} from 'react'
import Column from '../Columns/Column'
import "./Board.css"
import { columnColors } from '../../Data/InitialData'
import { PlusCircle } from 'phosphor-react'
import ColumnForm from '../Forms/ColumnForm'
 
export default function Board({content}) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  
  return (
    <div className="board">
      {isFormOpen && <ColumnForm onClose={() => setIsFormOpen(false)}/>}
      <header className="board-header">
        <h2>{content.name}</h2>
      </header>
      <main className="board-content">
        {content.columns.map((column, index) => {
          return (
            <Column
              key={column.id}
              column={column}
              content={content}
              color={columnColors[index]}
              tasks={content.tasks.filter(task => task.columnId === column.id)}
            />
          )
        })}
        <div className="column column-form">
          <header className="column-header column-form-header">
            <button className="add-column-btn" onClick={() => setIsFormOpen(true)}><PlusCircle/> Add Column</button>
          </header>
        </div>
      </main>
    </div>
  )
}
