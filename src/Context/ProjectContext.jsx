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



    const values = {projects, setProjects}

  return (
    <ProjectContext.Provider value={values}>
        {children}
    </ProjectContext.Provider>
  )
}
