import React, {useState} from "react";

export default function WeatherTemp(props){
     const [unit, setUnit] = useState("celsius");

  function showTempFahrenheit(event) {
       event.preventDefault();
       setUnit("fahrenheit");
        }
        function showTempCelsius(event) {
            event.preventDefault();
                setUnit("celsius");
        } 
          function fahrenheit() {
              return (props.celsius * 9) / 5 + 32;
          }

       if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showTempFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showTempCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}