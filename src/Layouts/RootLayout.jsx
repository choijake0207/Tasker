import React, {useContext} from 'react'
import {Outlet, NavLink} from "react-router-dom"
import { ProjectContext } from '../Context/ProjectContext'
import { Note, FolderSimple } from 'phosphor-react'



export default function RootLayout() {
    const {projects} = useContext(ProjectContext)
  return (
    <div className="root-layout">
        <nav className="side-nav-bar">
            <h1><Note/>tasker</h1>
            <NavLink to="/">Home</NavLink>
            <div className="project-container">
                <p><FolderSimple/>PROJECTS</p>
                {projects.map(project => {
                    return (
                        <NavLink to={`/projects/${project.name}`} key={project.id}>
                            - {project.name}
                        </NavLink>
                    )
                })}
            </div>
         
        </nav>
        <main className="main-screen">
            <Outlet/>
        </main>
    </div>
  )
}
