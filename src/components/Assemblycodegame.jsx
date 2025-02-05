import { React, useState } from 'react'
import { languages } from "../Languages";

export default function Assemblycodegame() {
    const [currentWord, setcurrentWord] = useState("react")
    const [guessedLetter, setguessedLetter] = useState([ ])
   
    const alphabets = "abcdefghijklmnopqrstuvwxyz"

    function addGuessedLetter(letter) {
        setguessedLetter(prevLetter =>
          prevLetter.includes(letter) ? prevLetter: [...prevLetter, letter])
    }

    const languageElements = languages.map(lang => {
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        return (
            <span className='chip'
             style={styles}
             key={lang.name}
             >
                {lang.name}
            </span>
        )
    })

    //we using the index as  a key cause it diff and we not neccesarily changiung it in this case 
    const letterElements = currentWord.split("").map( (letter, index) => (
        <span key={index}>{letter.toUpperCase()}</span>
        
    ))

    const keyboardElements = alphabets.split("").map( letter => (
        <button 
            key={letter} 
            onClick={() => addGuessedLetter(letter)}
        >
            {letter.toUpperCase()}
        </button>
    ))


  return (
    <div>
        <header>
           <h1>Assembly: Codegame</h1> 
           <p>Guess the word within 8 attempts to keep the programmming world safe from Assembly</p>
        </header>
        <section className='game-status'>
            <h2>You Win</h2>
            <p>Welldone!</p>
        </section>
        <section className='language-chips'>
            {languageElements}
        </section>
        <section className="word">
            {letterElements}
        </section>
        <section className="keyboard">
            {keyboardElements}
        </section>
        <section className="new-game">
            <button>New Game</button>
        </section>
    </div>
  )
}
