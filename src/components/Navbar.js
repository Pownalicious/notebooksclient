import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <form className="container-fluid justify-content-start">
          <button className="btn btn-outline-success me-2" type="button">
            <Link to="/">NoteBooks</Link>
          </button>
          <button className="btn btn-sm btn-outline-secondary" type="button">
            <Link to="/notes">Notes</Link>
          </button>
          <button className="btn btn-sm btn-outline-secondary" type="button">
            <Link to="/create-form">Create form</Link>
          </button>
        </form>
      </nav>
    </div>
  );
}
