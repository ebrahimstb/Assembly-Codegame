import { React}from 'react'

const Die = (props) => {
    const styles = {
        backgroundColor: props.isHeld ? "green" : "white" 
    }

  return (
    <div>
        <button 
        onClick= {() => props.hold(props.id)}
        style= {styles} 
        arial-pressed={props.isHeld}
        arial-label={ `Die with value ${props.value}, ${props.isHeld ? "held" : "not held"}`}
        className='grid-item'
         >{props.value}</button>
    </div>
  )
}

export default Die