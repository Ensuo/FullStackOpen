import axios from "axios";
import React, {useEffect, useState} from "react";

const Country = ({props}) =>{
    const [data, setData] = useState({});

    const header_style = {
        fontWeight: 'bold',
        fontSize: '32px',
    };
    const bold = {
        fontWeight: 'bold',
    };
    const img_style = {
        width: "250px",
        height: "200px",
    }

    const location = props.capital;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

    useEffect (() => {
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
    }, [])

    return (
        <div>
            <header style={header_style}>{props.name.common}</header>
            <br></br>
            <p>capital {props.capital}</p>       
            <p>area {props.area}</p>

            <p style={bold}>languages</p>
            <ul>
                {(Object.values(props.languages)).map((language, i) => {
                    return <li key = {i}>{language}</li>
                })}
            </ul>

            <img alt="flag" src={props.flags.png} style={img_style} />

            <p style={bold}>Weather in {props.capital} </p>
            {data.main ? <p>temperature {data.main.temp.toFixed()} Celsius </p> : null}
            {data.weather? <img alt={"icon"} src = {`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} ></img>: null}
            {data.wind? <p>wind {data.wind.speed} m/s</p> : null}
        </div>
    );
}

export default Country;