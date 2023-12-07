import React, {
    useState
} from "react";
import axios from "axios";
import FormatDate from "./FormatDate";
import WeatherTemp from "./WeatherTemp";
export default function Search(props) {
    const [city, setCity] = useState(props.defaultCity);
const [weatherData, setWeatherData] = useState({
    ready: false
});

    function handleSearch(event) {
       event.preventDefault();
       search()
       
       }
      function search(){
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4b3503b2f08a729413c4d33ef1186004&units=metric`;
       axios.get(url).then(showTemp);
       }

function showTemp(response) {
      setWeatherData({
                  ready: true,
                   coordinates: response.data.coord,
                       temperature: response.data.main.temp,
                       humidity: response.data.main.humidity,
                       date: new Date(response.data.dt * 1000),
                       description: response.data.weather[0].description,
                       icon: response.data.weather[0].icon,
                       wind: response.data.wind.speed,
                       city: response.data.name,
                       temp_min: response.data.main.temp_min,
                       temp_max: response.data.main.temp_max,
                       feels_like:response.data.main.feels_like
      })

}
    function updateCity(event) {
        event.preventDefault();
        setCity(event.target.value);
    }
 if (weatherData.ready) {
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
           <div className = "currentWeatherBlock border border-primary-subtle rounded d-flex justify-content-between mb-5" >
        <div className = "mainInfo" >
        < h3 className = "fw-bold text-start" > Current Weather </h3>  
        <p className = "currentDate text-start" >
   
         < FormatDate date = {
          weatherData.date
          }
          />
          </p>  
        < h2 className = "text-primary fw-bolder mt-5"
        id = "searchCity" > {
            weatherData.city
        } </h2> 
         <  div className = "d-flex" >
        < img src = {
                `http://openweathermap.org/img/wn/${
         weatherData.icon
      }@2x.png`  }
        alt = ""
        className = "sunImg me-4" />
        <h2 className = "mt-5 me-1"
        id = "currentTemp" > <WeatherTemp celsius = {
           weatherData.temperature
        }
        /></h2 >
          </div>
          < p className = "ms-4 fs-6 description" > {
              weatherData.description
          } </p> </div >
        < div className = "aditionalInfo align-items-center" >
        < p className = "text-center fs-5 mb-4 feelsLike" > Feels like {
                Math.round(weatherData.feels_like)
                }°
                C </p>
 <div className= "d-flex justify-content-around" >
        <div className = "highParameters" >
        < div className = "mb-3" >
        < span className = "highTemp" > {
                Math.round(weatherData.temp_max)
                }°
                C </span>
                <br />
                <span>High</span>
              </div>
              <div className= "mb-3" >
        < span className = "humidity" > {
            weatherData.humidity
        } % </span>  
        <br />
        < span > Humidity </span>  
        </div> </div >
        <div className = "lowParameters" >
        < div className = "mb-3" >
        <span className = "lowTemp" > {
                Math.round(weatherData.temp_min
)}°C </span>
                <br />
                <span>Low</span>
              </div>
              <div className= "mb-3" >
        < span className = "windSpeed" > {
         weatherData.wind
        }
        km/h </span>  
        < br />
        < span > Wind </span>  
        </div>  </div>  
        </div>  
        </div>  
        </div>
           </div>
    );
    } else {
        search();
        return "Loading...";
    }
    }

