import React from "react";
import menu from "/menu.svg";

export default function Header() {
  return (
    <header>
      <div id="frame1">
        <h1>Крестики-нолики</h1>
        <img src={menu} />
      </div>
    </header>
  );
}
