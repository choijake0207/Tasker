import React, {useState} from 'react'
import Task from '../Task/Task'
import "./Column.css"
import { Circle } from 'phosphor-react'


export default function Column({column, tasks, color}) {

  
 
  return (
    <div className="column">
        <header className="column-header" style={{borderBottom: `3px solid ${color}`}}>
            <div className="column-header-name" >
              <Circle size={".75em"} weight="fill" color={color}/>
              <p>{column.name}</p>
              <p>( {tasks.length} )</p>
            </div>
            
            <button> + Add Task</button>
        </header>
        <main>
          {tasks.map(task => {
            return (
              <Task
                task={task}
              />
            )
          })}
         
        </main>
    </div>
  )
} 
