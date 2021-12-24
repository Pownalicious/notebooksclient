import React from "react";

export default function NewNoteBookForm() {
  return (
    <div>
      <form>
        <div class="form-outline mb-2">
          <input type="text" id="form4Example1" class="form-control" />
          <label class="form-label" for="form4Example1">
            Title
          </label>
        </div>

        <div class="form-outline mb-2">
          <textarea class="form-control" id="form4Example3" rows="4"></textarea>
          <label class="form-label" for="form4Example3">
            My note
          </label>
        </div>

        <div class="form-check d-flex justify-content-center mb-4">
          <input
            class="form-check-input me-2"
            type="checkbox"
            value=""
            id="form4Example4"
            checked
          />
          <label class="form-check-label" for="form4Example4">
            Send me a copy of this message
          </label>
        </div>

        <button type="submit" class="btn btn-primary btn-block mb-4">
          Send
        </button>
      </form>
    </div>
  );
}
