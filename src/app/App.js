import React, { useEffect, useState } from "react";
import axios from "axios";
import Weather from "../features/Weather/Weather.js";
import "./App.css";
import Quate from "../features/Quat/Quat.js";

import { CentralWidjet } from "../features/CentralWidget/CentralWidget.js";

function App() {
  const [bgImagesArray, setbgImagesArray] = useState([]);
  //let bgImagesArray = [];
  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos/?client_id=YhiefUkJ451j8UcwXc8yYxKDWXvEWM2QbuKawUTWxGc`
      )
      .then((response) => {
        const newbgImagesArray = response.data.map((obj) => {
          return obj.urls.regular;
        });

        setbgImagesArray(newbgImagesArray);
        //console.log(bgImagesArray);
      });
  }, []);
  //const imgBg = bgImagesArray[bgImgIndex];

  const [bgImgIndex, setbgimgIndex] = useState(0);
  const goToNext = () => {
    // console.log("going to next");
    setbgimgIndex((prevIndex) => {
      if (prevIndex == bgImagesArray.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const goBack = () => {
    setbgimgIndex((prevIndex) => {
      if (prevIndex == 0) {
        return bgImagesArray.length - 1;
      }
      return prevIndex - 1;
    });
  };
  // console.log(bgImagesArray);
  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${bgImagesArray[bgImgIndex]})` }}
    >
      <Weather />
      <CentralWidjet goBack={goBack} goToNext={goToNext} />

      <Quate />
    </div>
  );
}

export default App;
