import React, {useContext, useState}from 'react'
import "./Task.css"
import { ProjectContext } from '../../Context/ProjectContext'
import { Trash, Pencil, DotsThreeOutlineVertical } from 'phosphor-react'
import Draggable from '../../Context/DnD/Draggable'
import MenuModal from "../Menus/MenuModal"
import TaskForm from '../Forms/TaskForm'


export default function Task({task, content, column}) {

  const {deleteTask} = useContext(ProjectContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isEditOn, setIsEditOn] = useState(false)
  const handleEditButtonClick = (e) => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <>
      {isEditOn &&
        <TaskForm
          onClose={() => setIsEditOn(false)}
          isEdit={true}
          currentTask={task}
          content={content}
          columnId={column.id}
        />
      }
      <Draggable taskId={task.id}>
        <div className="task">
          {isMenuOpen && 
            <MenuModal
              onClose={() => setIsMenuOpen(false)}
              type="task"
              toggleEdit={() => setIsEditOn(true)}
              project={content}
              task={task}
              column={column}
            />
          }
          <header className="task-header">
            <div className="task-header-tags">
              <p className={`task-priority ${task.priority}`}>{task.priority}</p>
              {task.category && <p className="task-category">{task.category}</p> }
            </div>
            <button 
              className="task-edit-btn" 
              onClick={handleEditButtonClick} 
              onPointerDown={(e) => e.stopPropagation()}
            >
              <DotsThreeOutlineVertical size="1.2em"weight="bold"/>
            </button>
          </header>
          <section className="task-details">
            <h4 className="task-info">{task.info}</h4>
          </section>
          <footer className="task-footer">
            <p className="task-date">Date Created</p>
          </footer>
        </div>
      </Draggable>
    </>
  )
}
