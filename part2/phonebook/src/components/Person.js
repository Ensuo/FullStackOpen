import React from "react";

class Person extends React.Component {
    render() {
        return (
            <li id = {this.props.id}>
                {this.props.name} {this.props.number}
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.props.handleClick(this.props);
                }}>
                    <button style={{margin: "0px 0px 0px 10px"}}>delete</button>
                </form>
            </li> 
        )
    }

    
}

export default Person