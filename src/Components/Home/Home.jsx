import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Home.css"

function ProjectCard ({project}) {
    const navigate = useNavigate()
    return (
        <div className="project-card" onClick={() => navigate(`/projects/${project.name}`)}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
        </div>
    )
}


export default function Home({projects}) {
  return (
    <div className="home">
        <header className="home-header">
            <h1>All Projects</h1>
            <div className="tool-bar">
                <button>+ New Project</button>
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
