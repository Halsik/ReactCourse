import React from "react";
import "./Hero.css"

function Hero() {
    return (
        <section className="image-container">
            <div className="text-container">
                <h1 className="text-container-header">Online Experience</h1>
                <br></br>
                <br></br>
                <p className="text-container-p">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
                <br></br>
                <br></br>
                <p className="text-container-p">You can choose between all kind of sports like basketball, swimming, football and more!</p>
                <div className="button-container">     
                    <button className="text-container-button">Sing in now!</button>     
                </div>                  
            </div>
            <div className="image-box">
                <div className="image-section">
                    <div className="first-image"></div>
                </div>
                <div className="image-section">
                    <div className="first-image"></div>
                    <div className="second-image"></div>
                </div>
                <div className="image-section">
                    <div className="first-image"></div>
                    <div className="second-image"></div>
                </div>
                <div className="image-section">
                    <div className="first-image"></div>
                    <div className="second-image"></div>
                </div>
                <div className="image-section">
                    <div className="first-image"></div>
                    <div className="second-image"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero