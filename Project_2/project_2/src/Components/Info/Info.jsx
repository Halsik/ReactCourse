import React from "react";
import "./info.css"

function Info() {
    return(
        <div>
            <div className="info-container"></div>
                <div className="info-details">
                    <h1 className="header-one">Michał Hals</h1>
                    <h3 className="header-two">Frontend Developer</h3>
                    <h6 className="header-three">halsik.github.io/MyProjects/</h6>
                    <div className="button-container">
                        <button className="info-button">Email</button>
                        <button className="info-button">Linkedin</button>
                    </div>
                </div>
            </div>
    )
}

export default Info