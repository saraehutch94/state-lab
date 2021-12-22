// IMPORT useState
import React, { useState } from "react";
import imagesArr from "./imageData.js";
import "./styles.css";
// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr

export default function App() {
  // USE useState TO CREATE  [bigImage, setBigImage]
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY

  const [bigImage, setBigImage] = useState(imagesArr[0].img);

  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL

  const handleClick = (img) => {
    setBigImage(img);
  };

  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL

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
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        {/* <img src="" id="bigimage" alt='bigImage'/> */}
      </div>
      <img src={bigImage} id="bigImage" alt="bigImage" />
    </div>
  );
}
