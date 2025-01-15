import React from "react";
import Game from "./Game";
import Player from "./Player";

export default function ({ setPlayer, player, printSetca, setShowDiv, showDiv, count, setCount }) {
  return (
    <div id="body">
      <Player id={1} count={count}
        setCount={setCount}/>
      <div id="game">
        <h1>
          Ход <span id={player[0]}>{player[1]}</span>
        </h1>
        <Game
          setPlayer={setPlayer}
          printSetca={printSetca}
          setShowDiv={setShowDiv}
          showDiv={showDiv}
          count={count}
          setCount={setCount}
        />
      </div>
      <Player id={2} count={count}
        setCount={setCount}/>
    </div>
  );
}
