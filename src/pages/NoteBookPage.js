import axios from "axios";
import { useState, useEffect } from "react";
import NoteBooks from "../components/NoteBooks";
import SearchBar from "../components/SearchBar";

export default function NoteBookPage() {
  const [notebooks, setNotebooks] = useState([]);
  //set a state for your searches
  const [searchQuery, setSearchQuery] = useState("");

  //create a function for search
  function search(value) {
    console.log("Searh this", value);
    setSearchQuery(value);
    debugger;
  }

  useEffect(() => {
    doSomeDataFetching();
  }, []);

  async function doSomeDataFetching() {
    const res = await axios.get("/notebooks");
    setNotebooks(res.data);
  }

  return (
    <div className="row">
      <SearchBar onChange={search} />

      {notebooks.map((notebook, index) => {
        return (
          <NoteBooks
            key={index}
            title={notebook.title}
            image={notebook.image}
          />
        );
      })}
    </div>
  );
}
