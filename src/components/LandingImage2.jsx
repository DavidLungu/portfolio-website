import "./LandingImage2.css"
import React from 'react'

const LandingImage2 = (props) => {
    const background = props.background;
    const heading = props.heading;
    const text = props.text;
    return (
    <div className="landing landing__2">
        <div className="mask">
            <img className="landing-bg" src={background} alt="Background"/>
        </div>
        <div className="content">
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default LandingImage2