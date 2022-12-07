import React, {useState, useEffect} from "react";

function WindowTracker() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const watchWidth = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        console.log("present")
        window.addEventListener("resize", watchWidth)
        return function(){
            console.log("gone")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    return(
        <h1>Window width: {windowWidth}</h1>
    )
}

export default WindowTracker