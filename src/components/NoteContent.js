export default function NoteContent({ id, title, content, onDelete }) {
  if (!title) return <p>Click a note to load..</p>;

  return (
    <div className="col-sm-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
        </div>
      </div>
      <button onClick={(_) => onDelete(id)}>Delete note</button>
    </div>
  );
}
