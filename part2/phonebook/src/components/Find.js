import React from "react";

const Find = ({find, handleFind}) => {
    return (
        <div>find: <input value={find} onChange={handleFind}/></div>
    )
}

export default Find