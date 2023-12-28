import React, {
    useState,
    useEffect
} from "react";

import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

  useEffect(() => {
      setLoaded(false);
  }, [props.coordinates]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return ( 
            <div className = "extendedForecast border border-primary-subtle rounded mb-5" >
                < h3 className = "fw-bold mt-5 mb-4 text-start"> Extended Forecast </h3>  
                <div className = "card-group row-cols-1 row-cols-md-2 g-4" >
             {
                forecast.map(function (dailyForecast, index) {
                    if (index < 5) {
                        return ( <div div className = "card text-center m-3 rounded ms-5"
                            key = {
                                index
                            } >
                            <ForecastDay data = {
                                dailyForecast
                            }
                            /> </div>
                        );
                    }
                })
            } 
            </div></div>
        );
    } else {
        let apiKey = "4b3503b2f08a729413c4d33ef1186004";
        console.log(props.coordinates);
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);

        return null;
    }
}
