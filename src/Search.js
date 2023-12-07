import React, {
    useState
} from "react";
import axios from "axios";
export default function Search() {
    const [city, setCity] = useState("");
  let [paragraph, setParagraph] = useState("");

    function handleSearch(event) {
       event.preventDefault();
       let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4b3503b2f08a729413c4d33ef1186004&units=metric`;
       axios.get(url).then(showTemp);
       }

function showTemp(response) {
        setParagraph( 
    <div className = "currentWeatherBlock border border-primary-subtle rounded d-flex justify-content-between mb-5" >
        <div className = "mainInfo" >
        < h3 className = "fw-bold text-start" > Current Weather </h3>  
        <p className = "currentDate text-start" >
        Thursday, 07th December 2023, 17:22 </p>  
        < h2 className = "text-primary fw-bolder mt-5"
        id = "searchCity" > {city} </h2> 
         <  div className = "d-flex" >
        <img src = {
           `http://openweathermap.org/img/wn/${
        response.data.weather[0].icon
      }@2x.png`}
        alt = ""
        className = "sunImg me-4" />
        <h2 className = "mt-5 me-1"
        id = "currentTemp" > {
            Math.round(response.data.main.temp)
        }°C </h2>
          </div>
          < p className = "ms-4 fs-6 description" > {
              response.data.weather[0].description
          } </p> </div >
        < div className = "aditionalInfo align-items-center" >
        < p className = "text-center fs-5 mb-4 feelsLike" > Feels like {
                Math.round(response.data.main.feels_like)}°C </p>
 <div className= "d-flex justify-content-around" >
        <div className = "highParameters" >
        < div className = "mb-3" >
        < span className = "highTemp" > {
                Math.round(response.data.main.temp_max)}°C </span>
                <br />
                <span>High</span>
              </div>
              <div className= "mb-3" >
        < span className = "humidity" > {
            response.data.main.humidity
        } % </span>  
        <br />
        < span > Humidity </span>  
        </div> </div >
        <div className = "lowParameters" >
        < div className = "mb-3" >
        <span className = "lowTemp" > {
                Math.round(response.data.main.temp_min
)}°C </span>
                <br />
                <span>Low</span>
              </div>
              <div className= "mb-3" >
        < span className = "windSpeed" > {
            response.data.wind.speed
        }
        km/h </span>  
        < br />
        < span > Wind </span>  
        </div>  </div>  
        </div>  
        </div>  
        </div>
    );
}
    function updateCity(event) {
        event.preventDefault();
        setCity(event.target.value);
        console.log(event.target.value);
    }

    return ( 
        <div>
        <form onSubmit = {
            handleSearch
        } >
        < input type = "search"
        className = "form-control"
        placeholder = "Search city here"
        onChange = {
            updateCity
        }
        />       
     
         <input type="submit" value="Search"  className = "btn btn-primary searchCityBtn mx-1"/>
        </form>
           <div> {
               paragraph
           } </div>
           </div>
    );
}
