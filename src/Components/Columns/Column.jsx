import React, {useState} from 'react'
import Task from '../Task/Task'
import "./Column.css"
import { Circle } from 'phosphor-react'


export default function Column({column, tasks}) {

  
 
  return (
    <div className="column">
        <header className="column-header">
            <div className="column-header-name">
              <Circle size={".75em"} weight="fill"/>
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
