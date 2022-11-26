import React from "react";


function Jokes(props) {
        
    return(
        <div className="joke">
        <h2>{props.setup}</h2>
        <h3>{props.punchline}</h3>
        <hr />
</div>)

}

export default Jokes