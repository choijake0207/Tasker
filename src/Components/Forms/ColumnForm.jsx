import React, {useState} from 'react'
import { columnTemplate } from '../../Data/InitialData'

export default function ColumnForm() {

    const [newColumn, setNewColumn] = useState(columnTemplate)
    const handleChange = (e) => {
        const {name, value} = e.target
        setNewColumn(prev => ({...prev, [name]: value}))
    }
    const createColumn = (e) => {
        e.preventDefault()
        const column = {...newColumn, id: crypto.randomUUID()}
        setNewColumn(columnTemplate)
    }

  return (
    <div className="form-overlay">
        <div className="form-container">
            <form className="form" onSubmit={createColumn}>
                <label>Column Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={newColumn.name}
                />
            </form>
        </div>
    </div>
  )
}
