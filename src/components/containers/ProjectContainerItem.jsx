import { Link } from "react-router-dom"
import React from 'react'

const ProjectContainerItem = (props) => {
    const title = props.title;
    const img = props.img;
    const github = props.github;
    const demo = props.demo;
  return (
    <a href="" className="project__item">
        <div className="project__item-image">
            <img src={img} alt="item image" />
        </div>
        <h3>{title}</h3>
        <div className="project__item-cta">
            <Link className="btn" to={github} target="_blank" rel="noopener noreferrer">Github</Link>
            <Link className="btn btn-primary" to={demo} target="_blank" rel="noopener noreferrer">Live Demo</Link>
        </div>
    </a>
)
}

export default ProjectContainerItem