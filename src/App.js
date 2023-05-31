import { useEffect, useState } from "react";
import Apod from "./Apod";
import axios from "axios";
import "./App.css";

function App() {
  const [apodImg, setApodImg] = useState(false);
  var startDate = new Date().toISOString().split('T')[0]
  const [selectedDate, setSelectedDate] = useState(startDate);
  const apiURL = "https://api.nasa.gov/planetary/apod";
  const apiKey = "SrtQ6jZN6T7iVq7oetF6MS5rYGvIDBhTPA7J0jv5";
  
  useEffect(() => {
    setApodImg(false)
      const apiUrlWithDate = `${apiURL}?api_key=${apiKey}&date=${selectedDate}`;
      setTimeout(() => {axios
        .get(apiUrlWithDate)
        .then((res) => {
          setApodImg(res.data);
        })}, 2000 )
      
  }, [selectedDate]);

  return (
    <div className="App">
      {apodImg ? <Apod apodImg={apodImg} changeDate={setSelectedDate} selectedDate={selectedDate} /> : <p>Yukleniyor</p>}
    </div>
  );
}

export default App;