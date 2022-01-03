export default function NoteBooks({ id, title, image, onDelete }) {
  return (
    <div className="col-md-4 col-lg-3">
      <div className="Notebooks card shadow-sm mb-4">
        <div className="card-body pb-0">
          <h1>{title}</h1>
          <img src={image} alt="no img found" />
        </div>
        <button onClick={(_) => onDelete(id)}>Delete notebook</button>
      </div>
    </div>
  );
}
