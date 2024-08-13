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
    const addTask = (projectId, task) => {
      setProjects(prev => prev.map(project => {
        if (project.id === projectId) {
          return {
            ...project,
            tasks: [...project.tasks, task]
          }
        } return project
      }))
    }
    // delete task
    const deleteTask = (projectId, taskId) => {
      setProjects(prev => prev.map(project => {
        if (project.id === projectId) {
          const updatedTasks = project.tasks.filter(task => task.id !== taskId)
          return {
            ...project,
            tasks: updatedTasks
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
    // add project
    const addProject = (project) => {
      setProjects(prev => ([...prev, project]))
    }
    // delete project
    const deleteProject = (projectId) => {
      setProjects(prev => prev.filter(project => project.id !== projectId))
    }




    const values = {projects, setProjects, addTask, deleteTask, addProject, deleteProject, addColumn}

  return (
    <ProjectContext.Provider value={values}>
        {children}
    </ProjectContext.Provider>
  )
}
