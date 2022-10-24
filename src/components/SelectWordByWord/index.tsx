import React, { useEffect } from "react";
import { JsxElement } from "typescript";
import "./index.css";
import { mainWord, midWord } from "../../data/words";
import { useState } from "react";

export default function SelectWordByWord(): JSX.Element {
  //FIRST WORD
  let [theFirstWord, setTheFirstWord] = useState("The");

  // MID WORD
  let [middleWord, setMiddleWord] = useState(
    midWord[Math.floor(Math.random() * midWord.length)]
  );
  function getRandMid(e: any): void {
    e.preventDefault();
    setMiddleWord(midWord[Math.floor(Math.random() * midWord.length)]);
  }

  // MAIN WORD
  let [theMainWord, setTheMainWord] = useState(
    mainWord[Math.floor(Math.random() * mainWord.length)]
  );
  function getRandMain(e: any): void {
    e.preventDefault();
    setTheMainWord(mainWord[Math.floor(Math.random() * mainWord.length)]);
  }

  // THE FULL WORD
  let [theFullWord, setTheFullWord] = useState(
    `${theFirstWord} ${middleWord} ${theMainWord}`
  );

  useEffect(() => {
    // This gets called after every render, by default
    // (the first one, and every one after that)
    setTheFullWord(`${theFirstWord} ${middleWord} ${theMainWord}`);
  });

  function copyFunc1() {
    navigator.clipboard.writeText(
      `${theFirstWord} ${middleWord} ${theMainWord}`
    );
  }

  return (
    <>
      <div id="DisplayAndCopy" role="FormSeperateWords">
        <p id="DisplayText">{theFullWord}</p>
        <button id="btn-copy" role="btn-copySepWordsName" onClick={copyFunc1}>
          {" "}
        </button>
      </div>

      <form>
        {/* FIRST WORD */}
        {/* <label for="Prefixes">Prefixes</label> */}
        <select
          id="Prefixes"
          role="dropdown-prefix"
          name="Prefixes"
          className="firstPart"
          defaultValue={"The"}
          onChange={(event) => setTheFirstWord(event.target.value)}
        >
          <option role="opt" value=""></option>
          <option role="opt" value="The">
            The
          </option>
          <option role="opt" value="HMS">
            HMS
          </option>
          <option role="opt" value="SMS">
            SMS
          </option>
          <option role="opt" value="RFA">
            RFA
          </option>
          <option role="opt" value="KDM">
            KDM
          </option>
          <option role="opt" value="KNM">
            KNM
          </option>
          <option role="opt" value="NMS">
            NMS
          </option>
        </select>

        {/* MID WORD */}
        <div id="BlockThis" role="container-midword" className="secondPart">
          <input
            id="ScaledTextBox"
            role="input-txt-midword"
            type="text"
            value={middleWord}
            onChange={(event) => setMiddleWord(event.target.value)}
          />
          <button
            id="btn-randWord"
            role="btn-rand-midword"
            onClick={getRandMid}
          >
            Random
          </button>
        </div>

        {/* MAIN WORD */}
        <div id="BlockThis" role="container-mainword" className="thirdPart">
          <input
            id="ScaledTextBox"
            role="input-txt-mainword"
            type="text"
            value={theMainWord}
            onChange={(event) => setTheMainWord(event.target.value)}
          />
          <button
            id="btn-randWord"
            role="btn-rand-mainword"
            onClick={getRandMain}
          >
            Random
          </button>
        </div>
      </form>
    </>
  );
}
