import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import SearchFunc from "../../state/inputRelay";
import "./weatherApp.css";

const WeatherAppFunc = () => {
  const fetchData = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=dde669c54dbec53c562abad52d716702&units=metric`
    );
    const data = response.data;
    console.log(data);
    return data;
  };

  const [inputText, setInputText] = useState("Berlin");
  const { data, isLoading, isError, error } = useQuery("products", fetchData);

  console.log(data);
  console.log(inputText);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const handleData = (dataHandle) => {
    setInputText(dataHandle);
  };

  return (
    <div className="main">
     
      <div className="weatherCard"> 
      <SearchFunc handleSearch={handleData} />
        <div className="titlePrice">
          <p className="prodTitle">{data.name}</p>
        </div>
        <div className="watherInfo">
          <p>temerature: {data.main.temp}</p>
          <p>{data.weather[0].description}</p>
          <p>{data.sys.country}</p>
        </div>
        <p className="prodPrice">{data.main.feels_like}</p>
      </div>
    </div>
  );
};
export default WeatherAppFunc;
