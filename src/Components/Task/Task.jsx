import React from 'react'
import "./Task.css"

export default function Task({task, color}) {
  return (
    <div className="task" style={{borderLeft: `3px solid ${color}`}}>
      <header className="task-header">
        <p className={`task-priority ${task.priority}`}>{task.priority}</p>
        {task.category && <p className="task-category">{task.category}</p> }
      </header>
        <p>{task.info}</p>
    </div>
  )
}
