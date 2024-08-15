import React from 'react'
import { useDroppable } from '@dnd-kit/core'

export default function Droppable({children, columnId}) {
    const {isOver, setNodeRef} = useDroppable({
        id: `column-${columnId}`
    })
    const style = {background: isOver ? "rgb(56,59,68)" : null}
    
  return (
    <div ref={setNodeRef} style={style}>{children}</div>
  )
}
