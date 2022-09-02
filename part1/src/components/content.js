import React from "react"

function Content(props) {
    return (
        <p>
            {props.part} {props.exercises}
        </p>
    )
}

export default Content