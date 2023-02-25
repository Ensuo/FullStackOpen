import React from "react";

const Search = ({search, handleSearch}) => {
    return (
        <div>find: <input value={search} onChange={handleSearch}/></div>
    )
}

export default Search