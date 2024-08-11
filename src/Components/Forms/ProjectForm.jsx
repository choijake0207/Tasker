import React, {useState, useContext} from 'react'
import { projectTemplate } from '../../Data/InitialData'
import { ProjectContext } from '../../Context/ProjectContext'

export default function ProjectForm({onClose}) {
    const [newProject, setNewProject] = useState(projectTemplate)
    const {addProject} = useContext(ProjectContext)
    const handleChange = (e) => {
        const {name, value} = e.target
        setNewProject(prev => ({...prev, [name]: value}))
    }
    const createProject = (e) => {
        e.preventDefault()
        const project = {...newProject, id: crypto.randomUUID()}
        addProject(project)
        setNewProject(projectTemplate)
        onClose()
    }
  return (
    <div className="form-overlay">
        <div className="form-container">
            <h1>Create A New Project</h1>
            <form className="form" onSubmit={createProject}>
                <label>Project Name</label>
                <input
                    type="text"
                    value={newProject.name}
                    name="name"
                    onChange={handleChange}
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
                    <button className="submit-btn"type="submit">Create</button>
                    
                </div>
            </form>
        </div>
    </div>
  )
}
