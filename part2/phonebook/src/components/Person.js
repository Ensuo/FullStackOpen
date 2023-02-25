import React from "react";
import phoneService from "../services/phoneService";
// const Person = ({id, person, handleClick}) => {
//     const personStyle ={
//         display: 'flex',
//     }
//     return (
//         <div style={personStyle}>
//             <li id = {id}>
//                 {person.name} {person.number}
//                 <form onSubmit={handleClick}>
//                     <button onClick={handleClick} style={{margin: "0px 0px 0px 10px"}}>delete</button>
//                 </form>
//             </li> 
//         </div>
//     )
// }

class Person extends React.Component {
    constructor(props){
        super(props);
    }
    
    // deletePerson = (e) => {
    //     e.preventDefault();
    //     if(window.confirm(`Delete ${this.props.name}`)){
    //         phoneService
    //             .remove(this.props.id)
    //             .then(result => 
    //                 console.log(result)
    //             );
    //     }
    //     console.log(this.props.name);
    // }

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