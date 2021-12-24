import React from "react";
import "../style/notesContent.scss";

export default function NoteContent(prop) {
  return (
    <div class="col-sm-2">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{prop.title}</h5>
          <p class="card-text">{prop.content}</p>
        </div>
      </div>
    </div>
  );
}
