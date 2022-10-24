import React from "react";
import "./index.css";

export default function FadingAlert(props: any) {
  return (
    <div className="AlertContainer">
      <h1 id="FadingAlert-header">Copied:</h1>
      <p id="FadingAlert-copiedText">{props.copiedText}</p>
    </div>
  );
}
