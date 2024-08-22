import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import "./dnd.css"

export default function Droppable({children, columnId, type, taskId}) {
  let typeId
  switch (type) {
    case "column":
      typeId = `column/${columnId}`;
      break;
    case "task":
      typeId = `task/${taskId}`
      break;
  }
  const {isOver, setNodeRef} = useDroppable({
      id: typeId
  })

    
  return (
    <div ref={setNodeRef} className={isOver && "droppable"}>{children}</div>
  )
}
