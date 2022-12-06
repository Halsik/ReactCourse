import React from "react";
import { useState } from "react";

function Box(props) {
    
    const styles = {
        backgroundColor: props.on ? "gray" : "transparent"
    }
    return(
        <div onClick={() => props.clicked(props.id)} style={styles}className="square"></div>
    )
}

export default Box