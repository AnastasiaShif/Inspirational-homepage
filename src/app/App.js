import React, { useEffect, useState } from "react";
import axios from "axios";
import Weather from "../features/Weather/Weather.js";
import "./App.css";
import Quate from "../features/Quat/Quat.js";

import { CentralWidjet } from "../features/CentralWidget/CentralWidget.js";

const nextIconUrl =
  "https://img.icons8.com/ios/50/null/circled-chevron-right--v2.png";
const prevIconUrl =
  "https://img.icons8.com/ios/50/null/circled-chevron-left--v2.png";

function App() {
  const [imgBg, setImgBg] = useState("");
  let bgImagesArray = [];
  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos/?client_id=YhiefUkJ451j8UcwXc8yYxKDWXvEWM2QbuKawUTWxGc`
      )
      .then((response) => {
        bgImagesArray = response.data.map((obj) => {
          return obj.urls.regular;
        });
        console.log(bgImagesArray);
        setImgBg(bgImagesArray[0]);
      });
  }, []);

  return (
    <div className="App" style={{ "background-image": `url(${imgBg})` }}>
      <Weather />
      <CentralWidjet />

      <Quate />
    </div>
  );
}

export default App;
