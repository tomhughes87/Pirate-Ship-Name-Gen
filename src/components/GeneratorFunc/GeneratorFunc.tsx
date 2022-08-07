import React, { useState } from 'react'
import { startWord,mainWord,midWord } from '../../data/words'
import './GeneratorFunc.css'

export default function GeneratorFunc():JSX.Element {

      const [randomStartWord,setRandomStartWord] = useState(startWord[Math.floor(Math.random()*startWord.length)])
      const [randomMidWord,setRandomMidWord] = useState(midWord[Math.floor(Math.random()*midWord.length)])
      const [randomMainWord,setRandomMainWord] = useState(mainWord[Math.floor(Math.random()*mainWord.length)])
      const [completelyRandom,setCompletelyRandom] = useState( `${randomStartWord} ${randomMainWord}`)


      function getRandFull(e:any):void {
        e.preventDefault();
        console.log('Completely Random btn/ pressed')

        setRandomStartWord(startWord[Math.floor(Math.random()*startWord.length)]);
        setRandomMidWord(midWord[Math.floor(Math.random()*midWord.length)]);
        setRandomMainWord(mainWord[Math.floor(Math.random()*mainWord.length)]);

        const lenChecker = `${randomStartWord} ${randomMidWord} ${randomMainWord}`
        if (lenChecker.length > 20){
          console.log(completelyRandom,"is too long at: ",completelyRandom.length )
          setCompletelyRandom(`${randomStartWord} ${randomMainWord}`)
        }
        else {
          setCompletelyRandom(`${randomStartWord} ${randomMidWord} ${randomMainWord}`)
        }
    }

function copyFunc2() {
navigator.clipboard.writeText(`${randomStartWord} ${randomMidWord} ${randomMainWord}`);
}
  return (
    <>
      <div id='bottomBox'>
        <input type="text" id='CompletelyRandomName' maxLength={20} value={completelyRandom} onChange={event=> setCompletelyRandom(event.target.value)}/>
      </div>

      <button className='CompletelyRandomBtn' onClick={getRandFull}>Completely Random</button>
      
      <br/>
      
      <button id="btn-copy" onClick={copyFunc2}> </button>
    </>
  )
}
