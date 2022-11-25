import React from "react";
import "./Card.css"
import Star from "./star.png"

function Card() {
    return(
        <div className="card-container">
            <div className="card"></div>
            <div className="card-rating">
                <img src={Star}/>
                <p className="rating-text">5.0 <span>(6) - USA</span></p>
            </div>
            <div className="card-text-container">
            <p className="card-text">Life lesson with Katie Zaferes</p>
            <p className="card-text"><span className="bold">From 125$</span> / person</p>
            </div>
                
            
            
        </div>
    )
}



export default Card