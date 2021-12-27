import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <form class="container-fluid justify-content-start">
          <button class="btn btn-outline-success me-2" type="button">
            <Link to="/">NoteBooks</Link>
          </button>
          <button class="btn btn-sm btn-outline-secondary" type="button">
            <Link to="/notes">Notes</Link>
          </button>
          <button class="btn btn-sm btn-outline-secondary" type="button">
            <Link to="/create-form">Create form</Link>
          </button>
        </form>
      </nav>
    </div>
  );
}
