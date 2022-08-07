import React from 'react'
import { JsxElement } from 'typescript'
import './index.css'
import { mainWord, midWord } from '../../data/words'
import { useState } from 'react'

export default function SelectWordByWord():JSX.Element {

  //FIRST WORD
  let [theFirstWord,setTheFirstWord]= useState("The")

  // MID WORD
  let [middleWord,setMiddleWord]= useState(midWord[Math.floor(Math.random()*midWord.length)])
  function getRandMid(e:any):void {
      e.preventDefault();
      setMiddleWord (midWord[Math.floor(Math.random()*midWord.length)]  )
  }

  // MAIN WORD
  let [theMainWord,setTheMainWord]= useState(mainWord[Math.floor(Math.random()*mainWord.length)])
  function getRandMain(e:any):void {
      e.preventDefault();
      setTheMainWord (mainWord[Math.floor(Math.random()*mainWord.length)]  )
  }

  function copyFunc1() {
    navigator.clipboard.writeText(`${theFirstWord} ${middleWord} ${theMainWord}`);
  }

  return (
<>
   <div id='DisplayAndCopy'>
      <p id="DisplayText"> {theFirstWord} {middleWord} {theMainWord}</p>
      <button id="btn-copy" onClick={copyFunc1}> </button>
    </div>
    
  <form >
      {/* FIRST WORD */}
      {/* <label for="Prefixes">Prefixes</label> */}
      <select id="Prefixes" name="Prefixes" className='firstPart' defaultValue={"The"} onChange={event=>setTheFirstWord(event.target.value)}>
          <option value=""></option>
          <option value="The">The</option>
          <option value="HMS">HMS</option>
          <option value="SMS">SMS</option>
          <option value="RFA">RFA</option>
          <option value="KDM">KDM</option>
          <option value="KNM">KNM</option>
          <option value="NMS">NMS</option>
      </select>

      {/* MID WORD */}
      <div id="BlockThis" className='secondPart'>
        <input id='ScaledTextBox' type="text" value={middleWord} onChange={event=> setMiddleWord(event.target.value)}/>  
        <button id="btn-randWord" onClick={getRandMid}>Random</button>
      </div>

      {/* MAIN WORD */}
      <div id="BlockThis" className='thirdPart'>
        <input id='ScaledTextBox' type="text" value={theMainWord} onChange={event=> setTheMainWord(event.target.value)}/>
        <button id="btn-randWord"  onClick={getRandMain}>Random</button>
      </div>
    </form>
  </>
  )
}
