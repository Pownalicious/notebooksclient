import { Link } from "react-router-dom";

export default function Navbar() {
  let pages = [
    { path: "/", label: "HomePage" },
    { path: "/notebooks", label: "Notebooks" },
    { path: "/notes", label: "Notes" },
    { path: "/create-form", label: "Make a note" },
  ];
  return (
    <div className="container-navbar">
      <nav className="navbar navbar-light bg-light">
        <form>
          {pages.map((p, i) => {
            return (
              <button className="btn btn-outline-success me-2" type="button">
                <Link to={p.path} key={i} className="navbar-link">
                  {p.label}
                </Link>
              </button>
            );
          })}
        </form>
      </nav>
    </div>
  );
}
