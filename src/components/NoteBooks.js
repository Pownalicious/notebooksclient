export default function NoteBooks(prop) {
  return (
    <div className="col-md-4 col-lg-3">
      <div className="Notebooks card shadow-sm mb-4">
        <div className="card-body pb-0">
          <h1>{prop.title}</h1>
          <img src={prop.image} alt="no img found" />
        </div>
      </div>
    </div>
  );
}
