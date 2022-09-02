import React, { Component } from "react"

const Total = (props) => {
    return (
        <p>Number of exercises {props.first + props.second + props.third}</p>
    )
}

export default Total