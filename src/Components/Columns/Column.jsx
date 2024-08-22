import React, {useState} from 'react'
import Task from '../Task/Task'
import MenuModal from '../Menus/MenuModal'
import "./Column.css"
import { Circle, DotsThreeOutlineVertical, Plus } from 'phosphor-react'
import TaskForm from '../Forms/TaskForm'
import ColumnForm from '../Forms/ColumnForm'
import Droppable from '../../Context/DnD/Droppable'
import Draggable from '../../Context/DnD/Draggable'

export default function Column({column, tasks, content}) {

  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isEditOn, setIsEditOn] = useState(false)


  return (
      <Droppable columnId={column.id} type="column">
        <div className="column">
          {isFormOpen && 
            <TaskForm 
              columnId={column.id}
              onClose={() => setIsFormOpen(false)}
              content={content}
            />
          }
          {isEditOn && 
            <ColumnForm
              isEdit={true}
              currentColumn={column}
              onClose={() => setIsEditOn(false)}
              content={content}
            />
          }
          <header className="column-header" style={{borderBottom: `3px solid ${column.color}`}}>
              <div className="column-header-name" >
                <Circle size={".75em"} weight="fill" color={column.color}/>
                <p>{column.name}</p>
                <p>( {tasks.length} )</p>
              </div>
              <div className="column-header-buttons">
                <button className="add-task-btn" onClick={()=> setIsFormOpen(!isFormOpen)}><Plus size="1.2em" weight="bold"/></button>
                {isMenuOpen && 
                  <MenuModal 
                    type="column" 
                    project={content} 
                    column={column} 
                    toggleEdit={() => setIsEditOn(true)}
                    onClose={() => setIsMenuOpen(false)}
                  />
                }
                <button className="column-edit-button" onClick={() => setIsMenuOpen(!isMenuOpen)}><DotsThreeOutlineVertical size="1.2em" weight="bold"/></button>
              </div>
          </header>
          {tasks.length > 0 &&  
              <main>
                {tasks.map(task => {
                  return (
                    <Task
                      task={task}
                      content={content}
                      column={column}
                    />
                  )
                })}
              
              </main>
          }
          

        </div>
      </Droppable>
  )
} 
