import React from "react";
import './navbar.css'
import GlobeIcon from '../images/globe-icon.png'


function Navbar() {
    return(
        <nav className="navbar">
            <img src={GlobeIcon}/>
            <h1 className="navbar-header">My Travel Journal</h1>
        </nav>
    )
}

export default Navbar