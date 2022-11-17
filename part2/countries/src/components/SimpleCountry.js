import React , { useState, useEffect} from 'react';
import Country from './Country';

const SimpleCountry = ({country}) => {
    const [show, setShow] = useState(false);

    console.log("Rendered");
    return (
        <div>
            <li key={country.population}>{country.name.common}</li><button onClick={() => setShow(!show)}>show</button>
            {show && <Country props={country} />}
        </div>
    );
}

export default SimpleCountry;