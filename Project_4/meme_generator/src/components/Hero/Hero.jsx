import React from "react";
import './Hero.css'
import memeData from '../memeData'

function Hero() {

        const arrayOfMemes = memeData.data.memes
        

        const getNewMeme = () => {
            let randomNumber = Math.floor(Math.random() * arrayOfMemes.length)
            console.log(arrayOfMemes[randomNumber].url)
        }
    return(
        <div className="hero-form-container">
            <div className="hero-form">
                <div className="hero-form-inputs">
                    <input id="hero-text-input" type="text" placeholder="upper text"/>
                    <input id="hero-text-input" type="text" placeholder="bottom text"/>
                </div>
                <button id="hero-form-submit" onClick={getNewMeme}>Generate new meme</button>
                
            </div>
        </div>
    )
}

export default Hero