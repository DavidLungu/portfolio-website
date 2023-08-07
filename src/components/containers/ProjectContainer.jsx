import "./ProjectContainer.css"
import React from 'react'
import ProjectContainerItem from "./ProjectContainerItem";
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"

const data = [
    {
        id: 1,
        image: IMG1,
        title: "New Title",
        github: "https://github.com",
        demo: "https://github.com"
    },    {
        id: 1,
        image: IMG1,
        title: "New Title",
        github: "https://github.com",
        demo: "https://github.com"
    },    {
        id: 1,
        image: IMG1,
        title: "New Title",
        github: "https://github.com",
        demo: "https://github.com"
    },    {
        id: 1,
        image: IMG1,
        title: "New Title",
        github: "https://github.com",
        demo: "https://github.com"
    },    {
        id: 1,
        image: IMG1,
        title: "New Title",
        github: "https://github.com",
        demo: "https://github.com"
    },    {
        id: 1,
        image: IMG1,
        title: "New Title",
        github: "https://github.com",
        demo: "https://github.com"
    },
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