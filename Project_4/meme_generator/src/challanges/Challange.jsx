import React, {useState} from "react";
import './challange.css'
import Counter from "./counterChallange";
import ImageChallange from "./ImageChallange";
import empty from './empty.png'
import fill from './filled.png'
import boxData from "./boxData";


function Challange(props) {

    // Challange 1

//   const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])

//   const newElement = thingsArray.map(item => {
//     return <h1>{item}</h1>
//    })

//    const addNewThing = () => {
//         setThingsArray(prevThingsArray => {
//             return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
//         })
//    }

//     return(
//         <div className="challange-container">
//         <button onClick={addNewThing}>Add Element</button>
//         {newElement}
//         </div>


//     )

    // Challange 2

// const [isImportant, setIsImportant] = useState("Yes")

//     const handleClick = () => {
//         setIsImportant("No")
//     }

//     return(
//         <div className="challange-container">
//         <h1 onClick={handleClick}>Is state important to know?</h1>
//         <h1>{isImportant}</h1>
//         </div>
//     )

    // Challange 3

    // const [counter, setCounter] = useState(0)

    // const minus = () => {
    //     setCounter(prevCounter => prevCounter - 1)
    // }
    // const plus = () => {
    //     setCounter(prevCounter => prevCounter + 1)
    // }

    // return(
    //     <div className="challange-container-row">
    //         <h2 onClick={minus}>-</h2>
    //         <Counter 
    //             number={counter}
    //         />
    //         <h2 onClick={plus}>+</h2>
    //     </div>
    // )

    // Challange 4


//     const [isGoingOut, setIsGoingOut] = useState(true)

//     const handleClick = () => { 
//         setIsGoingOut(prevIsGoingOut => !prevIsGoingOut)
//     }
   


//     return(

//         <div className="challange-container">
//            <h1 onClick={handleClick}>Is state important to know?</h1>
//            <h1>{isGoingOut ? "Yes" : "No"}</h1>
//       </div>

// )

    // Challange 5

    // const [contact, setContact] = useState({
    //     name: "Michał Hals",
    //     phone: "123-123-123",
    //     mail: "asdasd@gmail.com",
    //     isFavourite: true
    // })

    // let starIcon = contact.isFavourite ? fill : empty

    // const favourite = () => {
    //     setContact(prevContact => {
    //         return {...prevContact,
    //                 isFavourite:!prevContact.isFavourite}
    //     })
    // }

    // return(
    //         <div className="challange-container">
    //             <h1>Name: {contact.name}</h1>
    //             <h1>Phote: {contact.phone}</h1>
    //             <h1>Email: {contact.mail}</h1>
    //             <ImageChallange
    //             isFilled= {starIcon}
    //             handleClick = {favourite}
    //             />
    //         </div>
    // )

    // Challange 6

        const [boxArray, setBoxArray] = useState(boxData)


        const style = {
            backgroundColor: props.darkMode ? "black" : "gray"
        }
        const newBoxArray = boxArray.map(square => {
            return  <div style={style} className="square" key={square.id}></div>
        }


        )

        return (
            <div>{newBoxArray}</div>
        )
}

export default Challange