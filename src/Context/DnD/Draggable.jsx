import React from 'react'
import { useDraggable } from '@dnd-kit/core'

export default function Draggable({children, taskId, columnId, isColumn}) {
    const id = isColumn ? `column/${columnId}` : `task/${taskId}`
    const {attributes, listeners, setNodeRef, transform, isDragging} = useDraggable({
        id: id,
        activationConstraint: {
          delay: 150,
          distance: 15,
        }
      })
    const style = transform ? {transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`} : undefined

  return (
    <div 
      style={style} 
      ref={setNodeRef} 
      {...listeners} 
      {...attributes} 
      className={isDragging && "draggable"}
    >
      {children}
    </div>
  )
}
