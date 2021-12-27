import { Link } from "react-router-dom";
export default function NoteContent({ title, content }) {
  if (!title) return <p>click a note to load</p>;

  return (
    <div class="col-sm-2">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{content}</p>
        </div>
      </div>
    </div>
  );
}
