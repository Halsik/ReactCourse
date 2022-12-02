import React from "react";
import './Navbar.css'
import memeImage from '../Images/meme-logo.png'


function Navbar() {
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={memeImage}/>
                <h2 className="navbar-header">Meme Generator</h2>
            </div>
            <h3 className="navbar-title">React Course - Project 3</h3>
        </nav>
    )
}

export default Navbar