import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import { DotsThree } from "phosphor-react"
import ProjectMenu from "../Menus/ProjectMenu"

export default function ProjectCard ({project}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate()
    return (
        <div className="project-card">
            {isMenuOpen && <ProjectMenu project={project}/>}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}><DotsThree size={"2em"}/></button>
            <div onClick={() => navigate(`/projects/${project.name}`) }>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
            </div>
        </div>
    )
}