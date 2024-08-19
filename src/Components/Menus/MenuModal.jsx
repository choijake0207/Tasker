import React, {useContext, useRef, useEffect} from 'react'
import { ProjectContext } from '../../Context/ProjectContext'
import "./Menu.css"
export default function MenuModal({type, project, column, toggleEdit, onClose}) {
    const {deleteProject, deleteColumn, deleteTask} = useContext(ProjectContext)
    const modalRef = useRef(null)
    const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose()
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick)
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick)
        }
    },[])

    const handleInsideClick = (action) => {
        switch (action) {
            case "edit":
                toggleEdit()
                break;
            case "delete":
                handleDelete()
                break;
        }
        onClose()
    }

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
    <div className="popup-menu" id={`${type}-menu`} ref={modalRef}>
        <button className="popup-edit-btn" onClick={() => handleInsideClick("edit")}>Edit</button>
        <button  className="popup-delete-btn" onClick={() => handleInsideClick("delete")}>Delete</button>
    </div>
  )
}
