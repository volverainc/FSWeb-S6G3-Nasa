import { useState } from "react";
import "./Apod.css";

const Apod = ({ apodImg, changeDate, selectedDate }) => {
    
  return (
    <div>
      <h1>APOD</h1>
      <input type="date" value = {selectedDate} onChange={(e) => changeDate(e.target.value)} />
      <p className="date-info">Date must be between Jun 16, 1995 and May 31, 2023.</p>
        <div className="Apod">
          {apodImg.media_type == "image" ? <img src={apodImg.url}/> :
          <iframe width="100%" height="500px" src={apodImg.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
          <h2>{apodImg.title}</h2>
          <p>{apodImg.date}</p>
          <p>{apodImg.explanation}</p>
        </div>
      
    </div>
  );
};

export default Apod;