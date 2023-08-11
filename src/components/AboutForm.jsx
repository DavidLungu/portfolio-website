import "./AboutForm.css"
import React from 'react'
import { Link } from "react-router-dom"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination'

import IMG1 from "../assets/portfolio1.jpg"
import IMG2 from "../assets/portfolio2.jpg"
import IMG3 from "../assets/portfolio3.jpg"

const AboutForm = () => {
  return (
    <div className="about">

        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a Software Developer, aspiring to create Full Stack web applications.</p>
            <Link to="/projects">
            <button className="btn btn-primary">See Projects</button></Link>
        </div>

        <div className="right">
            <div className="img-container">
                <Swiper 
                    modules={[Pagination]}
                    pagination={true}
                    // style={{  
                    //     "--swiper-pagination-bullet-inactive-color": "#fff",
                    //     "--swiper-pagination-bullet-size": "32px",
                    // }}
                >
                </Swiper>

                <div className="img-stack top">
                    <img className="img" src={IMG1} alt="image" />
                </div>
                <div className="img-stack bottom">
                    <img className="img" src={IMG3} alt="image" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutForm