import "./styles.css";
import { useEffect, useState } from "react";
import CityInput from "./Component/CityInput";
import CityWhether from "./Component/CityWhether";

export default function App() {
  const [city, setCity] = useState("");
  const [WhetherData, setWhetherData] = useState({});

  const fetchData = () => {
    //logic goes here

    let char = city.charAt(0);
    char = char.toUpperCase();
    setCity(char + city.substr(1));

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`
    )
      .then((response) => {
        if (response.ok) {
          console.log("res");
          return response.json();
        }
      })
      .then((data) => {
        setWhetherData(data);
        // console.log(WhetherData);
      })
      .catch((err) => {
        //optional part catch
        console.log("sdsdfsj", err);
        setWhetherData({
          data: "Somthing went Wrong with the API services"
        }); 
      });
  };
  useEffect(() => {
    setWhetherData(WhetherData);
  }, [WhetherData]);
  return (
    <div className="App">
      <CityInput fetchData={fetchData} city={city} setCity={setCity} />
      <CityWhether data={WhetherData} />
    </div>
  );
}
