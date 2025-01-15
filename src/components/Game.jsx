import React from "react";
import crest from "/crest.svg";

export default function Game({ setPlayer, printSetca, setShowDiv, showDiv, count, setCount }) {
  return (
    <div id="crest">
      <img src={crest} />
      <div id="setca">
        {printSetca(setPlayer, setShowDiv, showDiv, setCount, count)}
      </div>
    </div>
  );
}
