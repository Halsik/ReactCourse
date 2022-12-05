import React from "react";



function ImageChallange(props) {
    return(
        <img src= {props.isFilled}
            onClick={props.handleClick}/>
    )
}

export default ImageChallange