import React, {useState} from 'react'
import "./Column.css"

export default function Column({column, tasks}) {

  
  const [columnTasks, setColumnTasks] = useState(tasks)

  return (
    <div className="column">
        <header>
            <h3>{column.name}</h3>
        </header>
        <main>
          {columnTasks.map(task => {
            return (
              <p>{task.info}</p>
            )
          })}
         
        </main>
    </div>
  )
}
