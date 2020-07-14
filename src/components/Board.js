import React, { useState } from "react"
import * as math from 'mathjs'
import Key from "./Key"
import Input from "./Input"

const Board = () => {
  const [currentValue, setCurrentValue] = useState('');

  const handleClick = (value) => {
    setCurrentValue(currentValue + value);
  }

  const handleClear = () => {
    setCurrentValue('');
  }

  const handleEqual = () => {
    setCurrentValue(math.evaluate(currentValue));
  }
  return (
    <div className="board">
      <Input value={currentValue}/>
      <Key value={7} handleClick={handleClick}/>
      <Key value={8} handleClick={handleClick}/>
      <Key value={9} handleClick={handleClick}/>
      <Key value={'/'} handleClick={handleClick}/>
      <Key value={4} handleClick={handleClick}/>
      <Key value={5} handleClick={handleClick}/>
      <Key value={6} handleClick={handleClick}/>
      <Key value={'*'} handleClick={handleClick}/>
      <Key value={1} handleClick={handleClick}/>
      <Key value={2} handleClick={handleClick}/>
      <Key value={3} handleClick={handleClick}/>
      <Key value={'+'} handleClick={handleClick}/>
      <Key value={'-'} className="minus" handleClick={handleClick}/>
      <Key value={0} handleClick={handleClick}/>
      <Key value={'='} handleClick={handleEqual}/>
      <Key value={'C'} className="clear" handleClick={handleClear}/>
    
    </div>
  )
}

export default Board
