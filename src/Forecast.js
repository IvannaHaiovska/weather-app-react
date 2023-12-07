import React from "react";

import hot_sun_weather from "./images/hot_sun_weather.png";
import cloud_rain_weather from "./images/cloud_rain_weather.png";
import cloud_heavy_rain_weather from "./images/cloud_heavy rain_rain_weather.png";
import cloud_sun_weather from "./images/cloud_cloudy_sun_sunny_weather.png";
import cloud_sunny_weather from "./images/cloud_sun_sunny_weather.png";

export default function Forecast() {
    return ( 
        <div className = "extendedForecast border border-primary-subtle rounded mb-5" >
        <h3 className = "fw-bold mt-5 mb-4 text-start" > Extended Forecast </h3> 
        <div className = "card-group row-cols-1 row-cols-md-2 g-4" >
        <div className = "card text-center m-3 rounded ms-5" >
        <h4 className = "mt-4 fw-bolder" > Sat </h4> 
        <img src = {
            hot_sun_weather
        }
        className = "card-img-top m-auto"
        alt = "..." />
        < div className = "card-body" >
        <h5 className = "card-title" > Clear </h5> 
        <p className = "card-text" > 36&#176;/27&#176; </p> 
        </div>
         </div>
          <div className = "card text-center m-3 rounded border" >
        <h4 className = "mt-4 fw-bolder" > Sun </h4> 
        < img src = {
            cloud_rain_weather
        }
        className = "card-img-top m-auto"
        alt = "..." />
        < div className = "card-body" >
        <h5 className = "card-title" > Rain </h5> 
        < p className = "card-text" > 30&#176;/24&#176; </p> 
        </div> </div>
         < div className = "card text-center m-3 rounded border" >
        <  h4 className = "mt-4 fw-bolder" > Mon </h4> 
        <  img src = {
            cloud_heavy_rain_weather
        }
        className = "card-img-top m-auto"
        alt = "..." />
        < div className = "card-body" >
        < h5 className = "card-title" > Rain </h5>
         <p className = "card-text" > 28&#176;/22&#176; </p>
          </div>
           </div> < div className = "card text-center m-3 rounded border" >
        < h4 className = "mt-4 fw-bolder" > Tue </h4> 
        < img src = {
            cloud_sun_weather
        }
        className = "card-img-top m-auto"
        alt = "..." />
        <div className = "card-body" >
        < h5 className = "card-title" > Cloudy </h5> 
        < p className = "card-text" > 29&#176;/25&#176; </p> 
        </div> </div> 
        <div className = "card text-center m-3 rounded border me-5" >
        <h4 className = "mt-4 fw-bolder" > Wed </h4> 
        < img src = {
            cloud_sunny_weather
        }
        className = "card-img-top m-auto"
        alt = "..." />
        <div className = "card-body" >
        < h5 className = "card-title" > Cloudy </h5> 
        < p className = "card-text" > 32&#176;/28&#176; </p> 
        </div> </div> </div>
         </div>
    );
}
