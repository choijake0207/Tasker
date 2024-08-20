import React from 'react'
import { useDroppable } from '@dnd-kit/core'

export default function Droppable({children, columnId, isBoard, boardId}) {
    const id = isBoard ? `board/${boardId}` : `column/${columnId}`
    const {isOver, setNodeRef} = useDroppable({
        id: id
    })

    
  return (
    <div ref={setNodeRef} className={isOver && "droppable"}>{children}</div>
  )
}
