import React from "react";
import "./Navbar.css"
import Bnblogo from "./logo.png"

function Navbar() {
    return(
        <div className="navbar-container">
            <img className="logo-image" src={Bnblogo}/>
        </div>
    )
}

export default Navbar