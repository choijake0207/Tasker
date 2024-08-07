import React from 'react'

export default function Column({column}) {
  return (
    <div className="column">
        <header>
            <h3>{column.name}</h3>
        </header>
    </div>
  )
}
