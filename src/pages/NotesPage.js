import axios from "axios";
import { useEffect, useState } from "react";
import NoteContent from "../components/NoteContent";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";

export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState({});

  useEffect(() => {
    doSomeDataFetching();
  }, []);

  async function doSomeDataFetching() {
    const res = await axios.get("/notes");
    setNotes(res.data);
  }

  async function deleteNote(id) {
    try {
      await axios.delete(`notes/${id}`);
      setActiveNote(null);
      doSomeDataFetching();
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="notesPage">
      <SideBar notes={notes} setActiveNote={setActiveNote} />

      <NoteContent {...activeNote} onDelete={deleteNote} />
    </div>
  );
}
