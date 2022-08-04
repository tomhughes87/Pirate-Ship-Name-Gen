import React from 'react'
import { useState } from 'react'
import { midWord } from '../../data/words'
<link href="https://fonts.googleapis.com/css2?family=IM+Fell+English+SC&display=swap" rel="stylesheet"/>



export default function MidWord() {

    let [middleWord,setMiddleWord]= useState("")

    function getRandMid(e:any):void {
        e.preventDefault();
        setMiddleWord (midWord[Math.floor(Math.random()*midWord.length)]  )
    }
      
  return (
    <>
      <form action="d"> 
          <input type="text" value={middleWord} onChange={event=> setMiddleWord(event.target.value)}/>
          {/* <p>New random word: {midWord}</p> */}
          <button onClick={getRandMid}>Random</button>
      </form>
    </>
  )
}
