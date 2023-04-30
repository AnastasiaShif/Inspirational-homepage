import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Quate() {
  const [quate, setQuate] = useState({});

  useEffect(() => {
    axios.get("https://type.fit/api/quotes").then((res) => {
      console.log(res);
      const index = Math.floor(Math.random() * res.data.length);
      const newQuateObj = {
        textQuate: res.data[index].text,
        author: res.data[index].author,
      };

      setQuate(newQuateObj);
    });
  }, []);
  return (
    <footer>
      <p>
        {quate.textQuate}
        <br></br>
        {quate.author}
      </p>
    </footer>
  );
}
