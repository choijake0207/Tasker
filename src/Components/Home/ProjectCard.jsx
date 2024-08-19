import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import { DotsThree } from "phosphor-react"
import ProjectForm from "../Forms/ProjectForm"
import MenuModal from "../Menus/MenuModal"

export default function ProjectCard ({project}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isEditOn, setIsEditOn] = useState(false)
    const navigate = useNavigate()
    return (
        // wrapped in fragment to make edit form absolute relative to home not card
        <> 
            {isEditOn && 
                <ProjectForm 
                    onClose={() => setIsEditOn(false)} 
                    project={project} 
                    isEdit={true}
                />
            }
            <div className="project-card">
                {isMenuOpen && <MenuModal type="project" project={project} toggleEdit={() => setIsEditOn(!isEditOn)}/>}
                <button className="toggle-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}><DotsThree size={"2em"}/></button>
                <div className="project-card-text"onClick={() => navigate(`/projects/${project.name}`) }>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>
            </div>
        </>
    )
}