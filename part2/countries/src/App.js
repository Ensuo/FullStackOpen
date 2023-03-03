import React , { useState, useEffect} from 'react';
import countryService from './services/countryService';
import Country from './components/country';
import './style.css';



const App = () =>{
  const [search, setSearch] = useState('');
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [temp, setTemp] = useState(0);
  const [icon, setIcon] = useState("");
  const [wind, setWind] = useState(0);
  const [countries, setCountries] = useState([]); 

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }; 

  useEffect(() => {
    countryService
      .getAll()
      .then(response => {
        setCountries(response.data)
      });
  });

  const filter= countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()));
  const length = filter.length;

  useEffect(() => {
    if(length === 1){
      countryService
          .getCoords(filter[0].capital)
          .then((response) =>{ 
              setLat(response.data[0].lat);
              setLon(response.data[0].lon);
          });
    }
  }, [])

  useEffect(() => {
    if(length === 1){
      countryService
        .getWeather(lat, lon)
        .then((response) => {
            setTemp(response.data.main.temp - 273);
            setIcon(response.data.weather[0].icon);
            setWind(response.data.wind.speed);
        });
      }
  }, [])
  

  return (
    <div>
      <div id="search">
        <label >find countries</label>
        <input type="text" value={search} onChange={handleSearch} id='country'></input>
      </div>
        <ul>
          {length === 1?(
            <Country key = {filter[0].population} onlyOne={length===1} temp={temp} icon={icon} wind={wind} {...filter[0]}/>
          ):(length < 10?(
              filter.map((c) => <Country key = {c.name.official} onlyOne={length===1} temp={temp} icon={icon} wind={wind} {...c}/>)
            ):(
              <div>Too many matches, specify another filter dumbtard </div>
            )
          )}
        </ul>
    </div>
  )
}

export default App;
