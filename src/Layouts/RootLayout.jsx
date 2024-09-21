import React, {useContext, useState} from 'react'
import {Outlet, NavLink} from "react-router-dom"
import { ProjectContext } from '../Context/ProjectContext'
import { Note, CaretLeft, CaretDown, File, House, Folder, List} from 'phosphor-react'



export default function RootLayout() {
    const {projects} = useContext(ProjectContext)
    const [expandProjects, setExpandProjects] = useState(false)
    const [expandNav, setExpandNav] = useState(false)
  return (
    <div className="root-layout">
        <nav className="side-nav-bar">
            <h1>
                <List className="nav-mobile-toggle" onClick={() => setExpandNav(!expandNav)}/>
                Task<span className="highlight-text">er</span>
            </h1>
            <div className={expandNav ? "links-container expand" : "links-container"}>
                <NavLink to="/"><House/>Home</NavLink>
                <p onClick={() => setExpandProjects(!expandProjects)}><Folder/>Projects {expandProjects ? <CaretDown/> : <CaretLeft/>}</p>
                <div className={`project-link-container ${expandProjects ? 'open' : 'close'}`}>
                    {projects.map(project => {
                        return (
                            <NavLink to={`/projects/${project.name}`} key={project.id}>
                                <File size="1em"/>{project.name}
                            </NavLink>
                        )
                    })}
                </div>
            </div>
        </nav>
        <main className="main-screen">
            <Outlet/>
        </main>
    </div>
  )
}
