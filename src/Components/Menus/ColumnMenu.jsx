import React, {useContext} from 'react'
import "./Menu.css"
import { ProjectContext } from '../../Context/ProjectContext'

export default function ColumnMenu({content, column}) {
    const {deleteColumn} = useContext(ProjectContext)
  return (
    <div className="popup-menu">
        <button className="popup-edit-btn">Edit</button>
        <button className="popup-delete-btn" onClick={() => deleteColumn(content.id, column.id)}>Delete</button>
    </div>
  )
}
