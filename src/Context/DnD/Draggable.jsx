import React from 'react'
import { useDraggable } from '@dnd-kit/core'

export default function Draggable({children, taskId}) {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: `task-${taskId}`
      })
    const style = transform ? {transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`} : undefined

  return (
    <div style={style} ref={setNodeRef} {...listeners} {...attributes}>{children}</div>
  )
}
