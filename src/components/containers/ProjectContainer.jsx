import "./ProjectContainer.css"
import React from 'react'
import ProjectContainerItem from "./ProjectContainerItem";
import IMG_CASTED from "../../assets/casted.png"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"

const data = [
    {
        id: 1,
        image: IMG_CASTED,
        title: "Casted (Unity Game)",
        github: "https://github.com/HeatedBread/casted-game",
        demo: "https://heatedbread.itch.io/casted"
    }
]

const PortfolioContainer = () => {
    return (
        <div className="container project__container">
        {
            data.map(({id, image, title, github, demo}) => {
                return (
            		<ProjectContainerItem key={id} title={title} img={image} github={github} demo={demo}/>    
                )
            })
        }
        </div>
    )
}

export default PortfolioContainer