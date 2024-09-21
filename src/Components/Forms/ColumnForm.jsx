import React, {useState, useContext} from 'react'
import { columnTemplate } from '../../Data/InitialData'
import { ProjectContext } from '../../Context/ProjectContext'
import { columnColors } from '../../Data/InitialData'
import {v4 as uuidV4} from 'uuid'
import "./Form.css"

export default function ColumnForm({isEdit, onClose, content, currentColumn}) {
    const {addColumn, editColumn} = useContext(ProjectContext)
    const [newColumn, setNewColumn] = useState(isEdit ? currentColumn : columnTemplate)
 
    const handleChange = (e) => {
        const {name, value} = e.target
        setNewColumn(prev => ({...prev, [name]: value}))
    }
 
    const createColumn = (e) => {
        e.preventDefault()
        if (isEdit) {
            editColumn(content.id, newColumn)
        } else {
            const column = {...newColumn, id: uuidV4()}
            addColumn(content.id, column)
        }
        setNewColumn(columnTemplate)
        onClose()
    }

  return (
    <div className="form-overlay">
        <div className="form-container">
            {isEdit ? 
                <h1><span className="highlight-text">Edit</span> column</h1> 
                : <h1><span className="highlight-text">Create</span> a new column</h1> 
                
            }
            <form className="form" onSubmit={createColumn}>
                <label>Column Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={newColumn.name}
                    autoComplete="off"
                    maxLength={21}
                    required
                />
                <label>Choose A Color:</label>
                <div className="column-color-picker">
                    {columnColors.map((color, index) => {
                        return (
                            <label className="color-label" key={index}>
                                <input 
                                    name="color"
                                    type="radio"
                                    className="color-radio"
                                    checked={newColumn.color === color}
                                    onChange={handleChange}
                                    value={color}
                                    required
                                />
                                <span className="color-circle" style={{background: color}}/>
                            </label>
                        )
                    })}
                </div>
                <div className="form-btn-container">
                    <button className="close-btn"type="button" onClick={onClose}>Close</button>
                    <button className="submit-btn"type="submit">{isEdit ? "Save" : "Submit"}</button>
                </div>
            </form>
        </div>
    </div>
  )
}
