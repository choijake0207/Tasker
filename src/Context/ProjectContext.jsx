import React, {createContext, useEffect, useState} from 'react'
import { initialProjects } from '../Data/InitialData'

export const ProjectContext = createContext()



export function ContextProvider({children}) {

  // initialize state from either saved data or blank template
    const [projects, setProjects] = useState(() => {
      const savedProjects = localStorage.getItem("projects")
      if (savedProjects) {
        return JSON.parse(savedProjects)
      } else {
        localStorage.setItem("projects", JSON.stringify(initialProjects))
        return initialProjects
      }
    })

    // save data change to local storage
    useEffect(() => {
      localStorage.setItem("projects", JSON.stringify(projects))
    }, [projects])

    // add task
    const addTask = (projectId, columnId, task) => {
      setProjects(prev => prev.map(project => {
        if (project.id === projectId) {
          return {
            ...project,
            columns: project.columns.map(column => {
              if (column.id === columnId) {
                return {
                  ...column,
                  tasks: [...column.tasks, task]
                } 
              }
              return column
            })
          }
        } return project
      }))
    }
    // edit task
    const editTask = (projectId, columnId, updatedTask) => {
      setProjects(prev => prev.map(project => {
        if (project.id === projectId) {
          return {
            ...project,
            columns: project.columns.map(column => {
              if (column.id === columnId) {
                return {
                  ...column,
                  tasks: column.tasks.map(task => 
                    task.id === updatedTask.id ? {...task, ...updatedTask} : task
                  )
                }
              }
              return column
            })
          }
        }
        return project
      }))
    }
    // delete task
    const deleteTask = (projectId, columnId, taskId) => {
      setProjects(prev => prev.map(project => {
        if (project.id === projectId) {
          return {
            ...project,
            columns: project.columns.map(column => {
              if (column.id === columnId) {
                return {
                  ...column,
                  tasks: column.tasks.filter(task => task.id !== taskId)
                }
              }
              return column
            })
          }
        }
        return project
      }))
    }
    // add column
    const addColumn = (projectId, column) => {
      setProjects(prev => prev.map(project => {
        if (project.id === projectId) {
          return {
            ...project,
            columns: [...project.columns, column]
          }
        }
        return project
      }))
    }
    // edit columns
    const editColumn = (projectId, updatedColumn) => {
      setProjects(prev => prev.map(project => {
        if (project.id === projectId) {
          return {
            ...project,
            columns: project.columns.map(column => 
              column.id === updatedColumn.id ? {...column, ...updatedColumn} : column
            )
          }
        }
        return project
      }))
    }
    // delete columns
    const deleteColumn = (projectId, columnId) => {
      setProjects(prev => prev.map(project => {
        if (project.id === projectId) {
          const updatedColumns = project.columns.filter(column => column.id !== columnId)
          return {
            ...project,
            columns: updatedColumns
          }
        }
        return project
      }))
    }
    // add project
    const addProject = (project) => {
      setProjects(prev => ([...prev, project]))
    }
    // edit projects
    const editProject = (updatedProject) => {
      setProjects(prev => prev.map(project => 
        project.id === updatedProject.id ? {...project, ...updatedProject} : project
      ))
    }
    // delete project
    const deleteProject = (projectId) => {
      setProjects(prev => prev.filter(project => project.id !== projectId))
    }

    // dnd: drag task to different column
    // const moveTaskToColumn = (taskId, columnId, content) => {
    //   const task = content.columns.flatMap(column => column.tasks).find(task => task.id === taskId)
    //   console.log(columnId)
    //   const originColumn = content.columns.find(column => column.tasks.some(task => task.id === taskId))
    //   const targetColumn = content.columns.find(column => column.id === columnId)
    //   if (task && originColumn && targetColumn) {
    //     if (originColumn.id !== targetColumn.id) {
    //       const updatedColumns = content.columns.map(column => {
    //         if (column.id === originColumn.id) {
    //           return {
    //             ...column,
    //             tasks: column.tasks.filter(task => task.id !== taskId)
    //           }
    //         }
    //         if (column.id === targetColumn.id) {
    //           const updatedTask = {...task, columnId: targetColumn.id}
    //           return {
    //             ...column,
    //             tasks: [...column.tasks, updatedTask]
    //           }
    //         }
    //         return column
    //       })
    //       setProjects(prev => prev.map(project => {
    //         if (project.id === content.id) {
    //           return {
    //             ...project,
    //             columns: updatedColumns
    //           }
    //         }
    //         return project
    //       }))
    //     }
    //   }
    // }
    const handleTaskMove = (active, over, content) => {
      const [activeType, activeId] = active.id.split("/")
      const [overType, overId] = over.id.split("/")
      console.log(overType)
      const task = content.columns.flatMap(column => column.tasks).find(task => task.id === activeId)
      const originColumn = content.columns.find(column => column.tasks.some(task => task.id === activeId))
      
      // check whether over is task or column
      let targetTaskId 
      let targetColumnId
      if (overType === "column") {
        targetColumnId = overId
        targetTaskId = null
      } else if (overType === "task") {
        targetTaskId = overId
        const targetColumn = content.columns.find(column => column.tasks.some(task => task.id === overId))
        targetColumnId = targetColumn.id
      }

      // same column movement
      if (originColumn.id === targetColumnId) {
        // if task-over-task, target index / if task-over-column, append to end of array
        const targetIndex = targetTaskId ? originColumn.tasks.findIndex(task => task.id === targetTaskId) : originColumn.tasks.length
        // filter out active task
        const updatedTaskArray = originColumn.tasks.filter(task => task.id !== activeId)
        // insert active task
        updatedTaskArray.splice(targetIndex, 0, task)
        // create updated columns
        const updatedColumns = content.columns.map(column => {
          if (column.id === originColumn.id) {
            return {
              ...column,
              tasks: updatedTaskArray
            }
          }
          return column
        })
        setProjects(prev => prev.map(project => {
          if (project.id === content.id) {
            return {
              ...project,
              columns: updatedColumns
            }
          }
          return project
        }))
        return
      }
      // different column movement
      if (originColumn.id !== targetColumnId) {
        const targetColumn = content.columns.find(column => column.id === targetColumnId)
        if (!targetColumn) {
          console.log("No Target Column")
        }
        // remove task from origin
        const updatedOriginTasksArray = originColumn.tasks.filter(task => task.id !== activeId)
        // insert task 
        const updatedTargetTasksArray = [...targetColumn.tasks]
        const targetIndex = targetTaskId ? updatedTargetTasksArray.findIndex(task => task.id === targetTaskId) : updatedTargetTasksArray.length
        console.log(targetIndex)
        updatedTargetTasksArray.splice(targetIndex, 0, task)
        // create updated columns
        const updatedColumns = content.columns.map(column => {
          if (column.id === originColumn.id) {
            return {
              ...column,
              tasks: updatedOriginTasksArray
            }
          }
          if (column.id === targetColumnId) {
            return {
              ...column,
              tasks: updatedTargetTasksArray
            }
          }
          return column
        })
        // set state
        setProjects(prev => prev.map(project => {
          if (project.id === content.id) {
            return {
              ...project,
              columns: updatedColumns
            }
          }
          return project
        }))
      }

    }
     
    
   



    const values = {projects, setProjects, addTask, deleteTask, addProject, deleteProject, addColumn, deleteColumn, editColumn, editProject, editTask, handleTaskMove}

  return (
    <ProjectContext.Provider value={values}>
        {children}
    </ProjectContext.Provider>
  )
}
