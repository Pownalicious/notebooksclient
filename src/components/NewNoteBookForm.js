import { useState } from "react";
import axios from "axios";

export default function NewNoteBookForm() {
  const [title, setTitle] = useState("");
  const [description, setDesctiption] = useState("");
  const [status, setStatus] = useState("");

  async function createNewNote(title, description) {
    try {
      let response = await axios.post("/notes", { title, description });

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
        <input
          type="text"
          id="form4Example1"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="form-label" htmlFor="form4Example1">
          Title
        </label>
      </div>

      <div className="form-outline mb-2">
        <textarea
          className="form-control"
          id="form4Example3"
          rows="4"
          value={description}
          onChange={(e) => setDesctiption(e.target.value)}
        ></textarea>
        <label className="form-label" htmlFor="form4Example3">
          My note
        </label>
      </div>

      {/* <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="form4Example4"
            checked
          />
          <label className="form-check-label" htmlFor="form4Example4">
            Send me a copy of this message
          </label>
        </div> */}

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
