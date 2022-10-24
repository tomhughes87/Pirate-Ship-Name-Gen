import React from 'react'
import { startWord, midWord, mainWord } from "./words"

export default function SortList() {
    // console.log(startWord.sort())
    // console.log(midWord.sort())
    // console.log(mainWord.sort())

        
    // get the amount of words in each word set
    let amtOfstatingWords = 7 //hardcoded, the, hms, css etc
    let amtOfMidWords = midWord.length
    let amtOfMainWords = mainWord.length
    
    // console.log("amtOfstatingWords",amtOfstatingWords)
    // console.log("amtOfMidWords",amtOfMidWords)
    // console.log("amtOfMainWords",amtOfMainWords)

    // valid combos:
    let combo1 = amtOfMainWords //eg: englishman
    let combo2 = amtOfstatingWords * amtOfMainWords //eg: the englishman
    let combo3 = amtOfMidWords * amtOfMainWords //eg: laughing englishman
    let combo4 = amtOfstatingWords * amtOfMidWords * amtOfMainWords //eg: the laughing englishman

    // console.log("total unique ship names:",combo1+combo2+combo3+combo4)


    return (
        <>
        {/* <p>sorted</p> */}
    </>
    )
}