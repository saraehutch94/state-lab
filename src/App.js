// IMPORT useState
import React, { useState } from "react";
import imagesArr from "./imageData.js";
import "./styles.css";
// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr

export default function App() {
  const [bigImage, setBigImage] = useState(imagesArr[0].img);

  const handleClick = (img) => {
    setBigImage(img);
  };

  const images = imagesArr.map((object, index) => {
    return (
      <img
        src={object.img}
        alt={object.city}
        key={index}
        onClick={() => handleClick(object.img)}
        className="thumb"
      />
    );
  });

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{images}</div>
        <img src={bigImage} id="bigimage" alt="bigImage" />
      </div>
    </div>
  );
}
