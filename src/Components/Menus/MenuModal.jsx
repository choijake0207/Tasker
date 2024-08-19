import React, {useContext} from 'react'
import { ProjectContext } from '../../Context/ProjectContext'

export default function MenuModal({type, project, column}) {
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
        <button className="popup-edit-btn">Edit</button>
        <button  className="popup-delete-btn" onClick={handleDelete}>Delete</button>
    </div>
  )
}
