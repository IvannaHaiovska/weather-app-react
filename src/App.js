import './App.css';
import Search from "./Search";
import Forecast from "./Forecast";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className = "App container" >
      <h1 className = "text-primary fw-bold text-start"> Weather Forecast </h1> 
      <Search />
      <Forecast />
        < div className='text-center' > Open-source code, by < a href = "" > Ivanna Haiovska </a> </div >
      </div>
  );
}

export default App;
