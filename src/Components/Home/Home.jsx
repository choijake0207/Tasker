import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProjectForm from '../Forms/ProjectForm'
import "./Home.css"

export default function Home({projects}) {
    const [isFormOpen, setIsFormOpen] = useState(false)
  return (
    <div className="home">
        {isFormOpen && <ProjectForm onClose={() => setIsFormOpen(false)}/>}
        <header className="home-header">
            <h1>All Projects</h1>
            <div className="tool-bar">
                <button onClick={() => setIsFormOpen(true)}>+ New Project</button>
            </div>
            
        </header>
        <main className="project-container">
            {projects.map(project => {
                return (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                )
            })}
        </main>
    </div>
  )
}
