import React , { useState, useEffect} from 'react';
import countryService from './services/countryService';
import Country from './components/country';
import './style.css';



const App = () =>{
  const [search, setSearch] = useState('');
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
  const displayable = filter.length < 10 ? true : false;
  const onlyOne = filter.length == 1 ? true: false;

  return (
    <div>
      <div id="search">
        <label >find countries</label>
        <input type="text" value={search} onChange={handleSearch} id='country'></input>
      </div>
        <ul>
          {onlyOne?(
            <Country key = {filter[0].population} {...filter[0]}/>
          ):(displayable?(
              filter.map((c) => <li key = {c.name.official}>{c.name.common}</li>)
            ):(
              <div>Too many matches, specify another filter dumbtard </div>
            )
          )}
        </ul>
    </div>
  )
}

export default App;
