export default function NoteContent({ title, content }) {
  if (!title) return <p>click a note to load</p>;

  return (
    <div className="col-sm-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
        </div>
      </div>
    </div>
  );
}
