import React from 'react'
import { useState } from 'react'
import { mainWord } from '../../data/words'
import Helper from '../Help'
import './MainWord.css'


export default function MainWord() {

    let [theMainWord,setTheMainWord]= useState("")

    function getRandMain(e:any):void {
        e.preventDefault();
        setTheMainWord (mainWord[Math.floor(Math.random()*mainWord.length)]  )
    }
      
  return (
    <>
      <form action="d"> 
          <input type="text" value={theMainWord} onChange={event=> setTheMainWord(event.target.value)}/>
          {/* <p>New random word: {mainWord}</p> */}
          <button onClick={getRandMain}>Random</button>
      
      </form>
    </>
  )
}
