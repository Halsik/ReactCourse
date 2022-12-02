import React, {useState} from "react";
import './challange.css'


function Challange() {

    // Challange one

    // const [state, setNewWord] = useState("Yes")

    // const handleClick = () => {
    //     setNewWord("No")
    // }

    // console.log(state)

    // const thingsArray = [state]

    // const thingsElements = thingsArray.map(element => 
        
    //     <p key={element}>{element}</p>)
        
    // // const addNewElement = () => {
    // //     const newThingText = `thing ${thingsArray.length + 1}`
    // //     thingsArray.push(newThingText) 
    // //     console.log(thingsArray)
    // // }

    // return(
    //     <div className="challange-button-container">
    //         <button onClick={handleClick}>Add things</button>
    //         {thingsElements}
    //     </div>
    // )

    // Challange Two Counter USESTATE

  const [result, setNewResult] = useState(0)

  const plus = () => {
    setNewResult(prevResult => prevResult + 1)
  }

  const minus = () => {
    setNewResult(prevResult => prevResult - 1)
  }

    return(
        <div className="second-button-container">
            <div className="minus"  onClick={minus}>
                <p className="icon">-</p>
            </div>
            <div className="result">
                <p className="icon">{result}</p>
            </div>
            <div className="plus"  onClick={plus}>
                <p className="icon">+</p>
            </div>
        </div>
    )

}

export default Challange