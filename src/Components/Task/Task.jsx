import React, {useContext}from 'react'
import "./Task.css"
import { ProjectContext } from '../../Context/ProjectContext'
import { Trash, Pencil, DotsThreeOutlineVertical } from 'phosphor-react'

export default function Task({task, color, content}) {

  const {deleteTask} = useContext(ProjectContext)

  return (
    <div className="task">
      <header className="task-header">
        <div className="task-header-tags">
          <p className={`task-priority ${task.priority}`}>{task.priority}</p>
          {task.category && <p className="task-category">{task.category}</p> }
        </div>
        <button className="task-edit-btn"><DotsThreeOutlineVertical size="1.2em"weight="bold"/></button>
      </header>
      <section className="task-details">
        <h4 className="task-info">{task.info}</h4>
      </section>
      <footer className="task-footer">
        <p className="task-date">Date Created</p>
      </footer>
    </div>
  )
}
