import React, {useState} from 'react'
import { projectTemplate } from '../../Data/InitialData'
import "./TaskForm.css"

export default function TaskForm({columnId, onClose}) {

    const [newTask, setNewTask] = useState(projectTemplate.tasks[0])
 
    const handleChange = (e) => {
        const {name,value} = e.target
        setNewTask(prev => ({...prev,[name]: value }))
    }

    const createTask = (e) => {
        e.preventDefault()
        const task = {...newTask, id: crypto.randomUUID(), columnId: columnId}
    }

  return (
    <div className="task-form-overlay">
        <div className="task-form-container">
            <h1>Create A New Task</h1>
            <form className="task-form" onSubmit={createTask}>
                <label>Task Description</label>
                <input
                    className="info-input"
                    type="text"
                    name="info"
                    maxLength={50}
                    value={newTask.info}
                    onChange={handleChange}
                    required
                />
                <label>Category Tags (optional)</label>
                <input
                    type="text"
                    name="category"
                    value={newTask.category}
                    onChange={handleChange}
                />
                <select
                    name="priority"
                    value={newTask.priority}
                    onChange={handleChange}
                >
                    <option value="">Select Priority Level</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <div className="task-form-btn-container">
                    <button type="button" onClick={onClose}>Close</button>
                    <button type="submit">Create</button>
                    
                </div>

            </form>
        
        </div>
    </div>
  )
}
