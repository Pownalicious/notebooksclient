import { createBrowserHistory } from "history";

export default function SideBar(props) {
  const history = createBrowserHistory();

  function clickHandler(note) {
    props.setActiveNote(note);
    //navigate to page using react router
    history.push("/notes?id=" + note.id);
  }

  return (
    <div className="sidebar leftMenu">
      <ul>
        {props.notes.map((note) => {
          return (
            <li>
              <button className="button" onClick={() => clickHandler(note)}>
                {note.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
