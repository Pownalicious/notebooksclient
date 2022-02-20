import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import NewNoteBookForm from "./components/NewNoteBookForm";
import NoteBookPage from "./pages/NoteBookPage";
import NotesPage from "./pages/NotesPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notebooks" element={<NoteBookPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/create-form" element={<NewNoteBookForm />} />
      </Routes>
    </div>
  );
}

export default App;
