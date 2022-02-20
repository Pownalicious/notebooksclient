import React from "react";

export default function SearchBar(props) {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(ev) =>
                props.onChange ? props.onChange(ev.target.value) : null
              }
            />
            <button class="btn btn-outline-success" type="submit">
              Search:
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
