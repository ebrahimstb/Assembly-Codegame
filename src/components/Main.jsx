import {React, useState, useRef, useEffect } from 'react';
import Die from './Die';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti'
const Main = () => {
  const [numbers, setNumbers] = useState( () => generateAllNewDice());
  const buttonRef = useRef(null);

    function generateAllNewDice() {
        const allNewDice = []

        for (let i = 0; i < 10 ; i++) {
            const random = {
                  value: Math.ceil(Math.random() * 6), 
                isHeld: false,
                id: nanoid()
             } 
            allNewDice.push(random)
        }
        return allNewDice
        // ANother way to solve the random generate issue below is 
        // return new Array(10)
        // .fill(0)
        // .map(() => Math.ceil(Math.random()* 6))
    }

    const gameWon = numbers.every(num => num.isHeld) && 
        numbers.every(num => num.value === numbers[0].value)
        
    

    const reRoll = () =>{
      if (!gameWon) {
        setNumbers(prevNum => prevNum.map(num =>
          num.isHeld ?
          num :
          {...num, value: Math.ceil(Math.random() * 6)}
      )) 
      } else {
         setNumbers(generateAllNewDice())
      }
       
    }

    const hold = (id) => {
        setNumbers(prevNum => prevNum.map(num => 
            num.id === id ? { ...num, isHeld: !num.isHeld } : num
          )
        );
      };
      
      useEffect(() => {
        if (gameWon && buttonRef.current) {
          buttonRef.current.focus();
        }
      }, [gameWon]);

    const diceElement = numbers.map(num => (
     <Die  
     value={num.value} 
     isHeld={num.isHeld} 
     hold = {hold}
     id={num.id}
     />)
    )

  return (
    <div className='main-container'>
      {gameWon && < Confetti/>}
       
        <h1>Tenzies</h1>
        <p>Roll dice until all dice are the same. Click each dice to freeze it at its current value between rolls</p>
        <div class="grid-container">
            {diceElement}
        </div>
        <button 
        ref={buttonRef}
        className = "roll-dice"
            onClick={reRoll}>
            {gameWon ? "New Game" :  "Roll Dice"}
            </button>
    </div>
  )
}

export default Main