import React, { useState } from 'react'
import { startWord,mainWord,midWord } from '../../data/words'
import './GeneratorFunc.css'

export default function GeneratorFunc():JSX.Element {

    // for (let i = 0; i < 100; i++) {
    //     const randomStartWord = startWord[Math.floor(Math.random()*startWord.length)]
    //     const randomMainWord = mainWord[Math.floor(Math.random()*mainWord.length)]
    //     const randomMidWord = midWord[Math.floor(Math.random()*midWord.length)]      
    //     console.log(i, randomStartWord, randomMidWord,randomMainWord)
    //     // const element = array[i];
    //   }
      
      // let randomStartWord = startWord[Math.floor(Math.random()*startWord.length)]
      // let randomMainWord = mainWord[Math.floor(Math.random()*mainWord.length)]
      // let randomMidWord = midWord[Math.floor(Math.random()*midWord.length)]

      // let CompletelyRandom = `${randomStartWord} ${randomMidWord} ${randomMainWord}`

      const [randomStartWord,setRandomStartWord] = useState(startWord[Math.floor(Math.random()*startWord.length)])
      const [randomMidWord,setRandomMidWord] = useState(midWord[Math.floor(Math.random()*midWord.length)])
      const [randomMainWord,setRandomMainWord] = useState(mainWord[Math.floor(Math.random()*mainWord.length)])

      const [completelyRandom,setCompletelyRandom] = useState( `${randomStartWord} ${randomMainWord}`)


      function getRandFull(e:any):void {
        e.preventDefault();
        console.log('btns pressed')

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

// copyButton1(){
//   const copyWord = `${input1.value} ${input2.value} ${input3.value}`
//   copyToClipboard(copyWord)
// }

function copyFunc2() {

navigator.clipboard.writeText(`${randomStartWord} ${randomMidWord} ${randomMainWord}`);

}


  return (
    <>
      {/* <p id="Method">Method 2:</p> */}
      <div id='bottomBox'>
        {/* <br/> */}
        {/* <p id='CompletelyRandomName'>{completelyRandom}</p> */}
        <input type="text" id='CompletelyRandomName' maxLength={20} value={completelyRandom} onChange={event=> setCompletelyRandom(event.target.value)}/>
      </div>
        <button className='CompletelyRandomBtn' onClick={getRandFull}>Completely Random</button>
        <br/>
        <button id="btn-copy" onClick={copyFunc2}> </button>
    </>
  )
}
