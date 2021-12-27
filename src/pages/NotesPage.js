import axios from "axios";
import { useEffect, useState } from "react";
import NoteContent from "../components/NoteContent";
import SideBar from "../components/SideBar";

export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState({});

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data atm!");
      const res = await axios.get("/notes");
      console.log("Got back:", res);
      setNotes(res.data);
    }
    doSomeDataFetching();

    // getCurrentNoteIdFromUrl();
  }, []);

  return (
    <div className="notesPage">
      <SideBar notes={notes} setActiveNote={setActiveNote} />

      <NoteContent {...activeNote} />
    </div>
  );
}

// function getCurrentNoteIdFromUrl() {
//   const urlSearchParams = new URLSearchParams(document.location.search);
//   console.warn("getCurrentNoteIdFromUrl", urlSearchParams);
// }
