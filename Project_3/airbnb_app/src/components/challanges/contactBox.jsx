import React from "react";
import Phone from '../challanges/phone.png'
import Mail from './mail.png'

function Box(props) {
console.log(props)
    return(
            <div className="contact-box">
            <div className="contact-cards">
                <img className="cat-photo"src={props.img}/>
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img src={Phone}/>
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <img src={Mail}/>
                    <p>{props.mail}</p>
                </div>
            </div>
            </div>
    )
    }
    
    export default Box  