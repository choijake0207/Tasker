import React, {useState} from 'react'
import Task from '../Task/Task'
import "./Column.css"
import { Circle } from 'phosphor-react'
import TaskForm from '../Forms/TaskForm'



export default function Column({column, tasks, color}) {

  const [isFormOpen, setIsFormOpen] = useState(false)
  
 
  return (
    <div className="column">
        {isFormOpen && <TaskForm/>}
        <header className="column-header" style={{borderBottom: `3px solid ${color}`}}>
            <div className="column-header-name" >
              <Circle size={".75em"} weight="fill" color={color}/>
              <p>{column.name}</p>
              <p>( {tasks.length} )</p>
            </div>
            
            <button className="add-task-btn" onClick={()=> setIsFormOpen(!isFormOpen)}>+ ADD TASK</button>
        </header>
        <main>
          {tasks.map(task => {
            return (
              <Task
                task={task}
                color={color}
              />
            )
          })}
         
        </main>

    </div>
  )
} 
