import React from "react";
import "../style/sidebar.scss";

export default function SideBar(prop) {
  function getNote() {}

  return (
    <div class="leftMenu ">
      {prop.map((note) => {
        return (
          <ul>
            <button class="button" onClick={getNote}>
              {note.title}
            </button>
          </ul>
        );
      })}
    </div>
  );
}
