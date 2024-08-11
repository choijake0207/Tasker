import React, {useState, useContext} from 'react'
import { taskTemplate } from '../../Data/InitialData'
import "./Form.css"
import { ProjectContext } from '../../Context/ProjectContext'

export default function TaskForm({columnId, onClose, content}) {

    const [newTask, setNewTask] = useState(taskTemplate)
    const {addTask} = useContext(ProjectContext)
    const handleChange = (e) => {
        const {name,value} = e.target
        setNewTask(prev => ({...prev,[name]: value }))
    }

    const createTask = (e) => {
        e.preventDefault()
        const task = {...newTask, id: crypto.randomUUID(), columnId: columnId}
        addTask(content.id, task)
        setNewTask(taskTemplate)
        onClose()
    }

  return (
    <div className="form-overlay">
        <div className="form-container">
            <h1>Create A New Task</h1>
            <form className="form" onSubmit={createTask}>
                <label>Task Description</label>
                <textarea
                    className="info-input"
                    name="info"
                    maxLength={50}
                    value={newTask.info}
                    onChange={handleChange}
                    required
                />
                <label>Category Tags (optional)</label>
                <input
                    className="category-input"
                    type="text"
                    name="category"
                    value={newTask.category}
                    onChange={handleChange}
                />
                <label>Priority Level:</label>
                <select
                    className="priority-input"
                    name="priority"
                    value={newTask.priority}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Priority Level</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <div className="form-btn-container">
                    <button className="close-btn"type="button" onClick={onClose}>Close</button>
                    <button className="submit-btn"type="submit">Create</button>
                    
                </div>

            </form>
        
        </div>
    </div>
  )
}
