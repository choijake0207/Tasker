import React, {useState, useContext} from 'react'
import { taskTemplate } from '../../Data/InitialData'
import "./Form.css"
import { ProjectContext } from '../../Context/ProjectContext'
import {v4 as uuidV4} from 'uuid'

export default function TaskForm({columnId, onClose, content, isEdit, currentTask}) {

    const [newTask, setNewTask] = useState(isEdit ? currentTask : taskTemplate)
    const {addTask, editTask} = useContext(ProjectContext)
    const handleChange = (e) => {
        const {name,value} = e.target
        setNewTask(prev => ({...prev,[name]: value }))
    }

    const createTask = (e) => {
        e.preventDefault()
        if (isEdit) {
            editTask(content.id, columnId, newTask)
        } else {
            const task = {...newTask, id: uuidV4(), columnId: columnId}
            addTask(content.id, columnId, task)
        }
        setNewTask(taskTemplate)
        onClose()
    }

  return (
    <div className="form-overlay">
        <div className="form-container">
            {isEdit ? 
                <h1><span className="highlight-text">Edit</span> task</h1>
                : <h1><span className="highlight-text">Create</span> a new task</h1>
            }
            <form className="form" onSubmit={createTask}>
                <label>Task Description</label>
                <textarea
                    className="info-input"
                    name="info"
                    maxLength={200}
                    value={newTask.info}
                    onChange={handleChange}
                    required
                />
                <label>Category Tag (optional)</label>
                <input
                    className="category-input"
                    type="text"
                    name="category"
                    value={newTask.category}
                    onChange={handleChange}
                    maxLength={15}
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
                    <button className="submit-btn"type="submit">{isEdit ? "Save" : "Add"}</button>
                    
                </div>

            </form>
        
        </div>
    </div>
  )
}
