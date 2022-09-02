import React from "react"

function Content(props) {
    return (
        <div>
            <p>
                {props.part1} {props.exe1}
            </p>
            <p>
                {props.part2} {props.exe2}
            </p>
            <p>
                {props.part3} {props.exe3}
            </p>
        </div>
    )
}

export default Content