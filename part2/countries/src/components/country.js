import React, { Component } from 'react';

class Country extends Component{
    render(){
        return (
            <div>
                <div class="capital">capital: {this.props.capital} </div>
                <div class="area">area : {this.props.area}</div>
                
                <br></br>

                <b class="langTitle">languages:</b>
                <div class="langList">
                    {Object.entries(this.props.languages).map(([acro, lang]) => <li key={acro}>{lang}</li>)}
                </div>

                <img class="flag" src={`${this.props.flags.png}`}/>
            </div>
        )
    }
}
export default Country;