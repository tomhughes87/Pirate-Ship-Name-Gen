import React, { useState } from "react";
import { startWord, mainWord, midWord } from "../../data/words";
import FadingAlert from "../FadingAlert";
import "./GeneratorFunc.css";

export function copyFunc2() {
  const fullName = document.getElementById(
    "CompletelyRandomName"
  ) as HTMLInputElement;

  navigator.clipboard.writeText(fullName?.value);
  // <FadingAlert copiedText={fullName?.value} />;

  return;
}

export function checkLengthOfRandomWord(
  StWord: string,
  MidWord: string,
  MainWord: string
): string {
  if (StWord.length + MidWord.length + MainWord.length > 20) {
    return MidWord + " " + MainWord.trim();
  } else {
    return StWord + " " + MidWord + " " + MainWord.trim();
  }
}

export default function GeneratorFunc(): JSX.Element {
  function handleOnChangeNameInput(e: any) {
    setCompletelyRandom(e.target.value);
    document
      .getElementById("CompletelyRandomName")
      ?.addEventListener("click", handleOnChangeNameInput, false);
    return;
  }

  document
    .getElementById("CompletelyRandomName")
    ?.addEventListener("click", handleOnChangeNameInput);
  const [randomStartWord, setRandomStartWord] = useState(
    startWord[Math.floor(Math.random() * startWord.length)]
  );
  const [randomMidWord, setRandomMidWord] = useState(
    midWord[Math.floor(Math.random() * midWord.length)]
  );
  const [randomMainWord, setRandomMainWord] = useState(
    mainWord[Math.floor(Math.random() * mainWord.length)]
  );
  const [completelyRandom, setCompletelyRandom] = useState(
    `${randomStartWord} ${randomMainWord}`
  );

  function getRandFull(e: any): void {
    e.preventDefault();
    const thisbox = document.getElementById(
      "CompletelyRandomName"
    ) as HTMLInputElement;

    setRandomStartWord(startWord[Math.floor(Math.random() * startWord.length)]);
    setRandomMidWord(midWord[Math.floor(Math.random() * midWord.length)]);
    setRandomMainWord(mainWord[Math.floor(Math.random() * mainWord.length)]);

    // const lenChecker = `${randomStartWord} ${randomMidWord} ${randomMainWord}`
    // console.log({randomStartWord},{randomMidWord} ,{randomMainWord})
    setCompletelyRandom(
      checkLengthOfRandomWord(randomStartWord, randomMidWord, randomMainWord)
    );
    console.log("DSSSSSSDSDSDSDSDASDJKAJDKAJSDKJASDKAJSKDJAS");
    console.log(completelyRandom);
    thisbox.value = completelyRandom;
  }

  return (
    <>
      <div id="bottomBox" role="fullRandNameGenContainer">
        {/* <input type="text" role='fullRandNameGenDisplay' id='CompletelyRandomName' maxLength={20} value={completelyRandom} onChange={event => setCompletelyRandom(event.target.value)}/> */}
        {/* <input type="text" role='fullRandNameGenDisplay' id='CompletelyRandomName' maxLength={20} value={completelyRandom} onChange={handleOnChangeNameInput}/> */}
        <input
          type="text"
          role="fullRandNameGenDisplay"
          id="CompletelyRandomName"
          maxLength={20}
          defaultValue={completelyRandom}
        />
      </div>

      <button
        className="CompletelyRandomBtn"
        role="btn-fullRandNameGen"
        onClick={getRandFull}
      >
        Completely Random
      </button>

      <br />

      <button id="btn-copy" role="btn-copyFullRandNameGen" onClick={copyFunc2}>
        {" "}
      </button>
    </>
  );
}
