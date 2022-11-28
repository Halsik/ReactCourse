import React from "react";
import "./Card.css"
import Star from "./star.png"
import cardImage from "./CardImage.jpeg"

function Card(props) {

    console.log(props.details.price)


    let bageText;
    if(props.details.openSpots === 0) {
        bageText = "SOLDOUT"
    } else if(props.details.location === "Online") {
        bageText = "Online"
    }

    return(
        <div className="card-container">
            <div className="card">
                {bageText && <div className="soldout">
                    <p className="soldout-text">{bageText}</p>
                </div>}
                <img src={props.details.coverImg}/>
            </div>
            <div className="card-rating">
                <img src={Star}/>
                <p className="rating-text">{props.details.stats.rating} <span>{props.details.stats.reviewCount} - {props.details.country}</span></p>
            </div>
            <div className="card-text-container">
            <p className="card-text">{props.details.title}</p>
            <p className="card-text"><span className="bold">From {props.details.price}$</span> / person</p>
            </div>
                
            
            
        </div>
    )
}



export default Card