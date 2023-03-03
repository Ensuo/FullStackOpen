import React, { Component} from 'react';

class Country extends Component{
    constructor(props) {
        super(props);
        this.show = this.props.onlyOne;
    }

    handleButton = (event) => {
        this.show = !this.show;
    }

    render(){

        return (
            <div>
                {this.show ?
                    (
                    <div>
                        <div className="head title">
                            <li className="name">{this.props.name.common}</li>
                            <button onClick={this.handleButton}>close</button>
                        </div>

                        <br></br>

                        <div className="info">capital: {this.props.capital} </div>
                        <div className="info">area : {this.props.area}</div>

                        <br></br>

                        <b>languages:</b>
                        <div className="langList">
                            {Object.entries(this.props.languages).map(([acro, lang]) => <li key={acro}>{lang}</li>)}
                        </div>

                        <img className="flag" alt="country_flag" src={`${this.props.flags.png}`}/>

                        <p className="title">Weather in {this.props.capital}</p>
                        <p className="info">temperature {this.props.temp} Celsius</p>
                        <img className="weather" alt="cur_weather" src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`}></img>
                        <p className="info">wind {this.props.wind}m/s</p>

                    </div>
                    ):
                    (   
                        <div>
                        <li className="name">{this.props.name.common}</li>
                        <button onClick={this.handleButton}>show</button>
                        </div>
                    )
                }
            </div>
        )
    }
}
export default Country;