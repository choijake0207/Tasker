import React, { useState } from 'react'
import ProjectForm from '../Forms/ProjectForm'
import ProjectCard from './ProjectCard'
import { PlusCircle } from 'phosphor-react'
import "./Home.css"

export default function Home({projects}) {
    const [isFormOpen, setIsFormOpen] = useState(false)
  return (
    <div className="home">
        {isFormOpen && <ProjectForm onClose={() => setIsFormOpen(false)}/>}
        <header className="home-header">
            <h1>All Projects</h1>
            
        </header>
        <main className="project-container">
            <div className="project-card" onClick={() => setIsFormOpen(true)}>
                <PlusCircle size="1.25em"/> New Project
            </div>
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
