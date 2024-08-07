import React, {useContext} from 'react'
import {Outlet, NavLink} from "react-router-dom"
import { ProjectContext } from '../Context/ProjectContext'

export default function RootLayout() {
    const {projects} = useContext(ProjectContext)
  return (
    <div className="root-layout">
        <nav>
            <h1>Tasker</h1>
            {projects.map(project => {
                return (
                    <NavLink to={`/projects/${project.name}`} key={project.id}>
                        {project.name}
                    </NavLink>
                )
            })}
        </nav>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
