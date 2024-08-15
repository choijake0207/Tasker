import React from 'react'
import { useDroppable } from '@dnd-kit/core'

export default function Droppable({children, columnId}) {
    const {isOver, setNodeRef} = useDroppable({
        id: `column/${columnId}`
    })

    
  return (
    <div ref={setNodeRef} className={isOver && "droppable"}>{children}</div>
  )
}
