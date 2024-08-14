import React, {useState} from 'react'
import Column from '../Columns/Column'
import "./Board.css"
import { columnColors } from '../../Data/InitialData'
import { PlusCircle, FolderOpen, Folder} from 'phosphor-react'
import ColumnForm from '../Forms/ColumnForm'
 
export default function Board({content}) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  
  return (
    <div className="board">
      {isFormOpen && <ColumnForm onClose={() => setIsFormOpen(false)} content={content}/>}
      <header className="board-header">
        <h2>{content.name}</h2>
        <div className="board-toolbar">
          <button className="add-column-btn" onClick={() => setIsFormOpen(true)}><PlusCircle/>Add Column</button>
        </div>
      </header>
      {content.columns.length > 0 ? 
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
        </main> 
        : 
        <main className="board-content empty">
          <FolderOpen size="8em"/>
          <h3>Nothing Here To See Yet</h3>
          <p>Get started by Creating Columns</p>
        </main>
      }
    </div>
  )
}
