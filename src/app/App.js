import React, { useEffect, useState } from "react";
import axios from "axios";
import Weather from "../features/Weather/Weather.js";
import "./App.css";
import Quate from "../features/Quat/Quat.js";

import { CentralWidjet } from "../features/CentralWidget/CentralWidget.js";

function App() {
  const [bgImagesArray, setbgImagesArray] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos/random/?topics=6sMVjTLSkeQ;count=10;client_id=YhiefUkJ451j8UcwXc8yYxKDWXvEWM2QbuKawUTWxGc`
      )
      .then((response) => {
        const newbgImagesArray = response.data.map((obj) => {
          return obj.urls.regular;
        });

        setbgImagesArray(newbgImagesArray);
      });
  }, []);

  const [bgImgIndex, setbgimgIndex] = useState(0);
  const goToNext = () => {
    setbgimgIndex((prevIndex) => {
      if (prevIndex === bgImagesArray.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const goBack = () => {
    setbgimgIndex((prevIndex) => {
      if (prevIndex === 0) {
        return bgImagesArray.length - 1;
      }
      return prevIndex - 1;
    });
  };

  return (
    <div className="App">
      <div
        className="backgraund-component"
        style={{
          backgroundImage: `url(${bgImagesArray[bgImgIndex]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
          //filter: "blur(px)",
        }}
      ></div>
      <div className="widgets-component">
        <Weather />
        <CentralWidjet goBack={goBack} goToNext={goToNext} />

        <Quate />
      </div>
    </div>
  );
}

export default App;
