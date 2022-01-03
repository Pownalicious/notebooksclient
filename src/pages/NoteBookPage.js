import axios from "axios";
import { useState, useEffect } from "react";
import NoteBooks from "../components/NoteBooks";

export default function NoteBookPage() {
  const [notebooks, setNotebooks] = useState([]);

  useEffect(() => {
    doSomeDataFetching();
  }, []);

  async function doSomeDataFetching() {
    const res = await axios.get("/notebooks");
    setNotebooks(res.data);
  }

  return (
    <div className="row">
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
