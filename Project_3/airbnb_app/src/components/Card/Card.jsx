import React from "react";
import "./Card.css"
import Star from "./star.png"
import cardImage from "./CardImage.jpeg"

function Card(props) {
    return(
        <div className="card-container">
            <div className="card">
                <img src={props.img}/>
            </div>
            <div className="card-rating">
                <img src={Star}/>
                <p className="rating-text">{props.rating} <span>{props.allRatings} - {props.country}</span></p>
            </div>
            <div className="card-text-container">
            <p className="card-text">{props.description}</p>
            <p className="card-text"><span className="bold">From {props.cost}$</span> / person</p>
            </div>
                
            
            
        </div>
    )
}



export default Card