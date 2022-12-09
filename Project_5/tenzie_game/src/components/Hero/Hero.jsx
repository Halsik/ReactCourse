import React, {useState, useEffect} from "react";
import './Hero.css'
import Die from "../Die/Die";
import Confetti from 'react-confetti'

function Hero() {

    const getNewDice = () => {
        return {
            number:Math.ceil(Math.random() * 6),
            isHold:false,
            id: Math.ceil(Math.random() * 2000)
        }
    }
   

    const allNewDice = () => {

        const arrayOfNumbers = []
        
        
        
        for(let i = 0; i < 10; i ++) {

            arrayOfNumbers.push(getNewDice())
        }


        

        return arrayOfNumbers
    }
    

    const hold = (id) => {
        setDiceNumber(oldDiceNumber => oldDiceNumber.map(die => {
            return die.id === id ? {...die, isHold: !die.isHold} : die
        }))
    }

    const [diceNumbers, setDiceNumber] = useState(allNewDice)

    const [tenzie, setTenzie] = useState(false)

   useEffect(() => {
     const isAllHeld  = diceNumbers.every(die => die.isHold)
     const firstValue = diceNumbers[0].number
     const allSameValues = diceNumbers.every(die => die.number === firstValue)

     if(isAllHeld && allSameValues) {
        setTenzie(true)
        console.log("wygrales")
     }
   }, [diceNumbers])

    const newDiceArray = diceNumbers.map(dice => {
        return <Die value={dice.number}
                    toggle={dice.isHold}
                    key={dice.id}
                    showDice={hold}
                    id={dice.id}/>
    })

    function newDice() {
        if(tenzie === false) {
        setDiceNumber(oldDice => oldDice.map(dice => {
            return dice.isHold ? dice : getNewDice()
        }))} else if(tenzie) {
            setDiceNumber(allNewDice)
            setTenzie(false)
        }
    }

    const width = `100%`

    


    


    return(
        <div className="hero-container">
            { tenzie && <Confetti 
            width={1440}
            height={750}/>}
            <div className="hero-die-container">
               {newDiceArray}
                
            </div>
            <button onClick={newDice}>{tenzie ? "Play Again" : "Roll Dice"}</button>
        </div>
    )
}

export default Hero