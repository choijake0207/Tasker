import React from "react"
import { useNavigate } from "react-router-dom"

export default function ProjectCard ({project}) {
    const navigate = useNavigate()
    return (
        <div className="project-card" onClick={() => navigate(`/projects/${project.name}`)}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
        </div>
    )
}