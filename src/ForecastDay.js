import React from "react";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (<div>
            <h4 className = "mt-4 fw-bolder" >{
         day()
      } </h4>   
      <img src = {
      `http://openweathermap.org/img/wn/${
   props.data.weather[0].icon
    }@2x.png`
      }
      className = "card-img-top m-auto"
      alt = "" /> < div className = "card-body" >
< h5 className = "card-title" > {props.data.weather[0].description} </h5>
      <div className="WeatherForecast-temperatures">
        <span className = "WeatherForecast-temperature-max card-text" >
          {maxTemperature()}
        </span>
        <span className = "WeatherForecast-temperature-min card-text" >
           / {minTemperature()}
        </span>
      </div>
    </div>
    </div>
  );
}