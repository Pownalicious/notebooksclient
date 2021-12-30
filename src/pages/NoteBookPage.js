import axios from "axios";
import { useState, useEffect } from "react";
import NoteBooks from "../components/NoteBooks";

export default function NoteBookPage() {
  const [notebooks, setNotebooks] = useState([]);

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");
      const res = await axios.get("/notebooks");
      console.log("Got back:", res);
      setNotebooks(res.data);
    }
    doSomeDataFetching();
  }, []);

  return (
    <div className="row">
      {notebooks.map((notebook, index) => {
        console.log(notebooks);
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
