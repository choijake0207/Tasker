import React, {createContext, useState} from 'react'
import { initialProjects } from '../Data/InitialData'

export const ProjectContext = createContext()



export function ContextProvider({children}) {

    const [projects, setProjects] = useState(initialProjects)



    const values = {projects, setProjects}

  return (
    <ProjectContext.Provider value={values}>
        {children}
    </ProjectContext.Provider>
  )
}
