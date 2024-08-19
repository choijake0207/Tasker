import React, {useState, useContext} from 'react'
import { columnTemplate } from '../../Data/InitialData'
import { ProjectContext } from '../../Context/ProjectContext'
import { columnColors } from '../../Data/InitialData'

export default function ColumnForm({onClose, content}) {
    const {addColumn} = useContext(ProjectContext)
    const [newColumn, setNewColumn] = useState(columnTemplate)
    const handleChange = (e) => {
        const {name, value} = e.target
        setNewColumn(prev => ({...prev, [name]: value}))
    }
    const handleColor = (color) => {
        setNewColumn(prev => ({
            ...prev,
            color: color
        }))
    }
    const createColumn = (e) => {
        e.preventDefault()
        const column = {...newColumn, id: crypto.randomUUID()}
        addColumn(content.id, column)
        setNewColumn(columnTemplate)
        onClose()
    }

  return (
    <div className="form-overlay">
        <div className="form-container">
            <h1><span className="highlight-text">Create</span> a new column</h1>
            <form className="form" onSubmit={createColumn}>
                <label>Column Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={newColumn.name}
                />
                <div className="column-color-picker">
                    <label>Choose A Color:</label>
                    {columnColors.map((color, index) => {
                        return (
                            <button 
                                key={index}
                                type="button"
                                className="color-picker-btn"
                                style={{background: color}}
                                onClick={() => handleColor(color)}
                            />
                        )
                    })}
                </div>
                <div className="form-btn-container">
                    <button className="close-btn"type="button" onClick={onClose}>Close</button>
                    <button className="submit-btn"type="submit">Create</button>
                </div>
            </form>
        </div>
    </div>
  )
}
