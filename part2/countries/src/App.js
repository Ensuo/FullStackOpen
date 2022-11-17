import React , { useState, useEffect} from 'react';
import Country from './components/Country';
import axios from 'axios';
import SimpleCountry from './components/SimpleCountry';



const App = () =>{
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState("");
  

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  useEffect (() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(country =>{
        setCountries(country.data);
      })
  }, []);

  
  
  const countriesDisplay = name.length !== 0 ? countries.filter(country => (country.name.common.toLowerCase()).includes(name.toLowerCase())) : countries;
  
  return (
    <div>
      find countries<input value={name} onChange={handleNameChange}></input>
      {countriesDisplay.length > 10 ? //Too many countries, don't list
        <p>Too many matches, specify another filter</p>
        :
        countriesDisplay.length === 1? //Only 1 country, give detailed analysis
          <Country props={countriesDisplay[0]}/>
          ://In between 10 and 1, only list the encountered countries
          <ul>
            {countriesDisplay.map((country, i) => {

              return( 
              <div>
                <SimpleCountry key = {country.population} country={country} />
              </div>
              );
            })}
          </ul>
      }
      
    </div>
  );
}

export default App;
