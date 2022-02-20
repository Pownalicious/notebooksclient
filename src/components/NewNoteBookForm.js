import { useState } from "react";
import axios from "axios";

export default function NewNoteBookForm() {
  const [title, setTitle] = useState("");
  const [description, setDesctiption] = useState("");
  const [status, setStatus] = useState("");

  async function createNewNote(title, content) {
    try {
      let response = await axios.post("/notes", { title, content });

      setStatus(`note created "${response.data.title}"`);
      setTitle("");
      setDesctiption("");
    } catch (e) {
      setStatus(e.message);
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="form-outline mb-2 mt-2">
        <label className="form-label" htmlFor="form4Example1">
          <b> Title</b>
        </label>
        <input
          type="text"
          id="form4Example1"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-outline mb-2">
        <label className="form-label" htmlFor="form4Example3">
          <b> My note</b>
        </label>
        <textarea
          className="form-control"
          id="form4Example3"
          rows="4"
          value={description}
          onChange={(e) => setDesctiption(e.target.value)}
        ></textarea>
      </div>
      {status && (
        <div class="alert alert-info" role="alert">
          {status}
        </div>
      )}

      <button
        type="submit"
        className="btn btn-primary btn-block mb-4"
        disabled={!title || !description}
        onClick={() => createNewNote(title, description)}
      >
        Send
      </button>
    </form>
  );
}
