import React from "react";
import './hero.css'
import Sydney from '../images/sydney.webp'

function Hero(props) {
    
    return(
        <section className="hero-container">
            <div className="hero-image-container">
                <img src={props.place.img}/>
            </div>
            <div className="hero-content-container">
                <h3 className="hero-header">{props.place.country}</h3>
                <h1 className="hero-title">{props.place.place}</h1>
                <h4 className="hero-date">{props.place.date}</h4>
                <p className="hero-text">{props.place.text}</p>
            </div>
        </section>
    )
}

export default Hero