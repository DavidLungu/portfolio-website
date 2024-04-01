import "./ProjectContainer.css"
import React from 'react';
import { v4 as uuidv4 } from 'uuid'
import ProjectContainerItem from "./ProjectContainerItem"
import jsonData from '../../projects.json';

const PortfolioContainer = () => {
    return (
        <div className="container project__container">
        {
            jsonData && Object.entries(jsonData).map(([key, item]) => (
                <ProjectContainerItem key={uuidv4()} title={item.title} img={`/project-thumbnails/${item.image}`} github={item.github} demo={item.demo}/>    
            ))
        }
        </div>
    )
}

export default PortfolioContainer