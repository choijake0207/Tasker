import React from 'react'

export default function ProjectMenu() {
  return (
    <div className="popup-menu project-menu">
        <button className="popup-edit-btn">Edit</button>
        <button className="popup-delete-btn" onClick={() => deleteColumn(content.id)}>Delete</button>
    </div>
  )
}
