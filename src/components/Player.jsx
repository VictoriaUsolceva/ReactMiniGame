import React from "react";

export default function Player({ id, count}) {
  return (
    <div id={"player" + id}>
      <h1><span>Игрок</span> №{id}</h1>
      <p id={"count" + id}>{count[id-1]}</p>
    </div>
  );
}
