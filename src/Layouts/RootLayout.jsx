import React, {useContext, useState} from 'react'
import {Outlet, NavLink} from "react-router-dom"
import { ProjectContext } from '../Context/ProjectContext'
import { Note, CaretLeft, CaretDown } from 'phosphor-react'



export default function RootLayout() {
    const {projects} = useContext(ProjectContext)
    const [expandProjects, setExpandProjects] = useState(false)
  return (
    <div className="root-layout">
        <nav className="side-nav-bar">
            <h1><Note/>tasker</h1>
            <div className="links-container">
                <NavLink to="/">Home</NavLink>
                <NavLink onClick={() => setExpandProjects(!expandProjects)}>Projects {expandProjects ? <CaretDown/> : <CaretLeft/>}</NavLink>
                {expandProjects && <div className="project-container">
                    {projects.map(project => {
                        return (
                            <NavLink to={`/projects/${project.name}`} key={project.id}>
                                {project.name}
                            </NavLink>
                        )
                    })}
                </div>}
            </div>
        </nav>
        <main className="main-screen">
            <Outlet/>
        </main>
    </div>
  )
}
