import React, {useState} from 'react'
import Task from '../Task/Task'
import ColumnMenu from '../Menus/ColumnMenu'
import "./Column.css"
import { Circle, DotsThreeOutlineVertical, Plus } from 'phosphor-react'
import TaskForm from '../Forms/TaskForm'



export default function Column({column, tasks, color, content}) {

  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
 
  return (
    <div className="column">
        {isFormOpen && 
          <TaskForm 
            columnId={column.id}
            onClose={() => setIsFormOpen(false)}
            content={content}
          />
        }
        <header className="column-header" style={{borderBottom: `3px solid ${color}`}}>
            <div className="column-header-name" >
              <Circle size={".75em"} weight="fill" color={color}/>
              <p>{column.name}</p>
              <p>( {tasks.length} )</p>
            </div>
            <div className="column-header-buttons">
              <button className="add-task-btn" onClick={()=> setIsFormOpen(!isFormOpen)}><Plus size="1.2em" weight="bold"/></button>
              {isMenuOpen && <ColumnMenu content={content} column={column}/>}
              <button className="column-edit-button" onClick={() => setIsMenuOpen(!isMenuOpen)}><DotsThreeOutlineVertical size="1.2em" weight="bold"/></button>
            </div>
        </header>
       {tasks.length > 0 &&  <main>
          {tasks.map(task => {
            return (
              <Task
                task={task}
                color={color}
                content={content}
              />
            )
          })}
         
        </main>}
      

    </div>
  )
} 
