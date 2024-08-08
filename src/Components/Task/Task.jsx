import React, {useContext}from 'react'
import "./Task.css"
import { ProjectContext } from '../../Context/ProjectContext'
import { Trash, Pencil } from 'phosphor-react'

export default function Task({task, color, content}) {

  const {deleteTask} = useContext(ProjectContext)

  return (
    <div className="task" style={{borderLeft: `3px solid ${color}`}}>
      <header className="task-header">
        <p className={`task-priority ${task.priority}`}>{task.priority}</p>
        {task.category && <p className="task-category">{task.category}</p> }
      </header>
      <section className="task-details">
        <h4 className="task-info">{task.info}</h4>
      </section>
      <footer className="task-footer">
        <p className="task-date">Date Created</p>
        <button><Pencil/></button>
        <button onClick={() => deleteTask(content.id, task.id)}><Trash/></button>
      </footer>
    </div>
  )
}
