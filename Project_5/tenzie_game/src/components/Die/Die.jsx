import React from "react";
import './Die.css'

function Die(props) {

    const styles = {
        backgroundColor: props.toggle ? "#59E391" : "white"
    }
   
    return(
        <div  onClick={() => props.showDice(props.id)} style={styles}className="die">
            <p className="die-number">{props.value}</p>
        </div>
    )
}

export default Die