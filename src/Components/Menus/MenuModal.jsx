import React, {useContext} from 'react'
import { ProjectContext } from '../../Context/ProjectContext'
import "./Menu.css"
export default function MenuModal({type, project, column, toggleEdit}) {
    const {deleteProject, deleteColumn, deleteTask} = useContext(ProjectContext)
    const handleDelete = () => {
        switch(type) {
            case "project":
                deleteProject(project.id)
                break;
            case "column":
                deleteColumn(project.id, column.id)
                break;
        }
    }

  return (
    <div className="popup-menu" id={`${type}-menu`}>
        <button className="popup-edit-btn" onClick={toggleEdit}>Edit</button>
        <button  className="popup-delete-btn" onClick={handleDelete}>Delete</button>
    </div>
  )
}
