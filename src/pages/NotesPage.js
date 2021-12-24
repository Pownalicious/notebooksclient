import axios from "axios";
import { useEffect, useState } from "react";
import NoteContent from "../components/NoteContent";
import SideBar from "../components/SideBar";

export default function NotesPage(prop) {
  const [notes, setNotes] = useState([]);
  const [button, setButton] = useState();
  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data atm!");
      const res = await axios.get("/notes");
      console.log("Got back:", res);
      setNotes(res.data);
    }
    doSomeDataFetching();
  }, []);

  return (
    <div>
      <SideBar setButton={prop.title} />

      <div className="row">
        {notes.map((note) => {
          console.log(notes);
          return <NoteContent title={note.title} content={note.content} />;
        })}
      </div>
    </div>
  );
}
