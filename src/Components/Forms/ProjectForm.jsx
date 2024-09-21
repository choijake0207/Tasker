import React, {useState, useContext} from 'react'
import { projectTemplate } from '../../Data/InitialData'
import { ProjectContext } from '../../Context/ProjectContext'
import {v4 as uuidV4} from 'uuid'


export default function ProjectForm({onClose, project, isEdit}) {
    const [newProject, setNewProject] = useState(isEdit ? project : projectTemplate)
    const {addProject, editProject} = useContext(ProjectContext)
    const handleChange = (e) => {
        const {name, value} = e.target
        setNewProject(prev => ({...prev, [name]: value}))
    }
    const createProject = (e) => {
        e.preventDefault()
        if (isEdit) {
            editProject(newProject)
        } else {
            const project = {...newProject, id: uuidV4()}
            addProject(project)
        }
        setNewProject(projectTemplate)
        onClose()
    }
  return (
    <div className="form-overlay">
        <div className="form-container">
            {isEdit ? 
                <h1><span className="highlight-text">Edit</span> project</h1>
                : <h1><span className="highlight-text">Create</span> a new project</h1>
            }
            <form className="form" onSubmit={createProject}>
                <label>Project Name</label>
                <input
                    type="text"
                    value={newProject.name}
                    name="name"
                    onChange={handleChange}
                    maxLength={20}
                    required
                />
                <label>Project Description (optional)</label>
                <textarea
                    value={newProject.description}
                    name="description"
                    onChange={handleChange}
                />
                <div className="form-btn-container">
                    <button className="close-btn"type="button" onClick={onClose}>Close</button>
                    <button className="submit-btn"type="submit">{isEdit ? "Save" : "Create"}</button>
                    
                </div>
            </form>
        </div>
    </div>
  )
}
