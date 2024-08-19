import React, {useContext} from 'react'
import {ProjectContext} from "../../Context/ProjectContext"

export default function ProjectMenu({project}) {
    const {deleteProject} = useContext(ProjectContext)
  return (
    <div className="popup-menu project-menu">
        <button className="popup-edit-btn">Edit</button>
        <button className="popup-delete-btn" onClick={() => deleteProject(project.id)}>Delete</button>
    </div>
  )
}
