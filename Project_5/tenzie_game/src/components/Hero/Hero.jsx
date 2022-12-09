import React from "react";
import './Hero.css'
import Die from "../Die/Die";

function Hero() {
    return(
        <div className="hero-container">
            <div className="hero-die-container">
                <Die />
                <Die />
                <Die />
                <Die />
                <Die />
                <Die />
                <Die />
                <Die />
                <Die />
                <Die />
            </div>
        </div>
    )
}

export default Hero