import Header from "./components/Header";
import Body from "./components/Body";
import setcaComponent from "/setca-component.svg";
import circle from "/circle.svg";
import crestic from "/crestic.svg";
import { useState } from "react";
import GameOver from "./components/GameOver";
import Footer from "./Footer";

function App() {
  const [player, setPlayer] = useState(["first", "синих"]);
  const [showDiv, setShowDiv] = useState(false);
  const [count, setCount] = useState([0, 0]);
  const handleSetPlayerGame = () => setPlayerGame(player, setPlayer);
  return (
    <>
      <Header />
      <Body
        setPlayer={handleSetPlayerGame}
        player={player}
        printSetca={printSetca}
        setShowDiv={setShowDiv}
        showDiv={showDiv}
        count={count}
        setCount={setCount}
      />
      {showDiv && (
        <GameOver
          clearSetca={clearSetca}
          setShowDiv={setShowDiv}
          message={checkSetca(setShowDiv, showDiv, setCount, count)}
        />
      )}
      <Footer />
    </>
  );
}

let setca = ["s", "s", "s", "s", "s", "s", "s", "s", "s"];

function clearSetca(setShowDiv) {
  setca = ["s", "s", "s", "s", "s", "s", "s", "s", "s"];
  setShowDiv(false);
}

function readSetca() {
  const arr = setca.map((el) => {
    switch (el) {
      case "s":
        return setcaComponent;
      case "o":
        return circle;
      case "x":
        return crestic;
      default:
        break;
    }
  });

  return arr;
}

function printSetca(setPlayer, setShowDiv, showDiv, setCount, count) {
  let arr = readSetca(setca);
  return arr.map((el, index) => {
    return (
      <img
        className="setcaComnonent"
        draggable="false"
        onClick={() => {
          setca[index] == "s" &&
            setSetca(setPlayer, index, setShowDiv, showDiv, setCount, count);
        }}
        key={index}
        src={el}
      />
    );
  });
}

function printDiv(setShowDiv) {
  setShowDiv(true);
}

function printCount(setCount, count, idW) {
  if (count == undefined) return 0;
  if (idW == 0) {
    setCount([count[0] + 1, count[1]]);
  } else if (idW == 1) {
    setCount([count[0], count[1] + 1]);
  }
}

function checkSetca(setShowDiv, showDiv, setCount, count) {
  let s1 = setca.join("").slice(0, 3);
  let s2 = setca.join("").slice(3, 6);
  let s3 = setca.join("").slice(6, 9);
  let s4 = setca[0] + setca[3] + setca[6];
  let s5 = setca[1] + setca[4] + setca[7];
  let s6 = setca[2] + setca[5] + setca[8];
  let s7 = setca[0] + setca[4] + setca[8];
  let s8 = setca[2] + setca[4] + setca[6];
  let s = `${s1} ${s2} ${s3} ${s4} ${s5} ${s6} ${s7} ${s8}`.split(" ");
  if (s.indexOf("ooo") != -1) {
    if (!showDiv) {
      printDiv(setShowDiv);
      printCount(setCount, count, 0);
    }

    // return `${setca[a] === "o" ? "<span>Синие</span>" : "<span>Красные</span>"} победили`;
    return (
      <>
        <span id="first">Синие</span> победили
      </>
    );
  } else if (s.indexOf("xxx") != -1) {
    if (!showDiv) {
      printDiv(setShowDiv);
      printCount(setCount, count, 1);
    }
    return (
      <>
        <span id="second">Красные</span> победили
      </>
    );
  } else if (setca.join("").split("s").length - 1 == 0) {
    if (!showDiv) {
      printDiv(setShowDiv);
    }
    return "Ничья";
  }
}

function setPlayerGame(player, setPlayer) {
  if (player[0] == "first") {
    setPlayer(["second", "красных"]);
  } else if (player[0] == "second") {
    setPlayer(["first", "синих"]);
  }
  return player[0];
}

function setSetca(
  handleSetPlayerGame,
  id,
  setShowDiv,
  showDiv,
  setCount,
  count
) {
  if (showDiv) {
    return 0;
  }
  let player = handleSetPlayerGame();
  if (player == "first") {
    setca[id] = "o";
  } else if (player == "second") {
    setca[id] = "x";
  }
  checkSetca(setShowDiv, showDiv, setCount, count);
}

export default App;
