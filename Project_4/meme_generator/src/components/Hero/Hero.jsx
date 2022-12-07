import React, {useState, useEffect} from "react";
import './Hero.css'


function Hero() {

        

        const [allMemeImage, setAllMemeImage] = useState([])

        const [meme, setMeme] = useState({
            topText:'',
            bottomText:'',
            randomImage: "https://i.imgflip.com/5c7lwq.png"
        })
        
        //get new meme image

        function getMemeImage() {
            const randomNumber = Math.floor(Math.random() * allMemeImage.length)
            const url = allMemeImage[randomNumber].url
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

        useEffect(() => {
            fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImage(data.data.memes))
        }, [])

        console.log(allMemeImage)
        
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