import './App.css';
import Search from "./Search";

function App() {
  return (
    <div className = "App container" >
      <h1 className = "text-primary fw-bold text-start"> Weather Forecast </h1> 
      <Search defaultCity='Paris'/>
        < div className='text-center' > Open-source code, by < a href = "https://github.com/IvannaHaiovska/weather-app-react" > Ivanna Haiovska </a> </div >
      </div>
  );
}

export default App;
