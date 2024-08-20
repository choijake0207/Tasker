import React, {useState, useContext} from 'react'
import Column from '../Columns/Column'
import "./Board.css"
import { columnColors } from '../../Data/InitialData'
import { PlusCircle, FolderOpen, Folder} from 'phosphor-react'
import ColumnForm from '../Forms/ColumnForm'
import { DndContext } from '@dnd-kit/core'
import { ProjectContext } from '../../Context/ProjectContext'
import Droppable from '../../Context/DnD/Droppable'
 
export default function Board({content}) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const {moveTaskToColumn} = useContext(ProjectContext)

  const handleDragEnd = (event) => {
    const {active, over} = event
    if (!over) return
    const [activeType, activeId] = active.id.split("/")
    const [overType, overId] = over.id.split("/")
    if (activeType === "task" && overType === "column") {
      moveTaskToColumn(activeId, overId, content)
    } 
  }

  

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {/* <Droppable isBoard={true} boardId={content.id}> */}
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
              {content.columns.map((column) => {
                return (
                  <Column
                    key={column.id}
                    column={column}
                    content={content}
                    tasks={column.tasks}
                  />
                )
              })}
            </main> 
            : 
            <main className="board-content empty">
              <FolderOpen size="8em"/>
              <h3>Nothing Here To See Yet</h3>
              <p>Get started by <span className="highlight-text" onClick={()=>setIsFormOpen(true)}>Creating Columns</span>
              </p>
            </main>
          }
        </div>
      {/* </Droppable> */}
    </DndContext>
  )
}
