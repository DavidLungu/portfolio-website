import "./Container.css"
import "./ProjectContainer.css"
import React from 'react'
import ProjectContainerItem from "./ProjectContainerItem";
import IMG1 from "../../assets/portfolio1.jpg"

const PortfolioContainer = () => {
    return (
    <div className="container project__container">
        <ProjectContainerItem title="Test Title" img={IMG1} github="https://github.com" demo="https://github.com"/>
        <ProjectContainerItem title="Test Title" img={IMG1} github="https://github.com" demo="https://github.com"/>
        <ProjectContainerItem title="Test Title" img={IMG1} github="https://github.com" demo="https://github.com"/>
        <ProjectContainerItem title="Test Title" img={IMG1} github="https://github.com" demo="https://github.com"/>
        <ProjectContainerItem title="Test Title" img={IMG1} github="https://github.com" demo="https://github.com"/>
        <ProjectContainerItem title="Test Title" img={IMG1} github="https://github.com" demo="https://github.com"/>
    </div>
)
}

export default PortfolioContainer