import React from "react"
import { useNavigate } from "react-router-dom"
import { DotsThreeCircle } from "phosphor-react"

export default function ProjectCard ({project}) {
    const navigate = useNavigate()
    return (
        <div className="project-card">
            <button><DotsThreeCircle size={"2em"}/></button>
            <div onClick={() => navigate(`/projects/${project.name}`) }>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
            </div>
        </div>
    )
}