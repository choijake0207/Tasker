import React from 'react'


export default function ProjectForm({onClose}) {
  return (
    <div className="form-overlay">
        <div className="form-container">
            <h1>Create A New Project</h1>
            <form className="form">
                <label>Project Name</label>
                <input/>
                <label>Project Description (optional)</label>
                <textarea/>
                <div className="form-btn-container">
                    <button className="close-btn"type="button" onClick={onClose}>Close</button>
                    <button className="submit-btn"type="submit">Create</button>
                    
                </div>
            </form>
        </div>
    </div>
  )
}
