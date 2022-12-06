import React, {useState} from "react";
import './Hero.css'
import memeData from '../memeData'

function Hero() {

        

        const [allMemeImage, setAllMemeImage] = useState(memeData)

        const [meme, setMeme] = useState({
            topText:'',
            bottomText:'',
            randomImage:allMemeImage.data.memes[2].url
        })
        console.log(meme)


        //get new meme image

        function getMemeImage() {
            const memeArray = allMemeImage.data.memes
            const randomNumber = Math.floor(Math.random() * memeArray.length)
            const url = memeArray[randomNumber].url
            setMeme(prevMeme => {
                return {...prevMeme,
                        randomImage: url     
                }
            })
        }

        function changeHandler(event) {
            setMeme(prevMeme => {
                return {...prevMeme,
                        [event.target.name]: event.target.value       
                }
            })
        }
        
    return(
        <div className="comp-container">
            <div className="hero-form-container">
                <div className="hero-form">
                    <div className="hero-form-inputs">
                        <input 
                            id="hero-text-input" 
                            type="text" 
                            placeholder="upper text"
                            name="topText"
                            onChange={changeHandler}
                        />
                        <input 
                            id="hero-text-input" 
                            type="text" 
                            placeholder="bottom text"
                            name="bottomText"
                            onChange={changeHandler}
                        />
                    </div>
                    <button id="hero-form-submit" onClick={getMemeImage}>Generate new meme</button>
                
                </div>
            
            </div>
            <div className="image-container">
                <div className="image">
                    <img src={meme.randomImage}/>
                    <h1 className="image-text top">{meme.topText}</h1>
                    <h1 className="image-text bottom">{meme.bottomText}</h1>
                </div>
            </div>
        </div>
    )
}

export default Hero