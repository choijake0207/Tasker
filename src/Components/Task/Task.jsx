import React from 'react'

export default function Task({task}) {
  return (
    <div className="task">
        {task.info}
    </div>
  )
}
