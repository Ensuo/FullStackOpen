import React from "react"
import Part from "./part.js"

function Content(props) {
    return (
        <div>
            <Part name={props.part1} quantity={props.exe1}/>
            <Part name={props.part2} quantity={props.exe2}/>
            <Part name={props.part3} quantity={props.exe3}/>
        </div>
    )
}

export default Content