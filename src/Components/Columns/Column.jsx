import React, {useState} from 'react'
import Task from '../Task/Task'
import "./Column.css"

export default function Column({column, tasks}) {

  

  return (
    <div className="column">
        <header>
            <h3>{column.name}</h3>
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
