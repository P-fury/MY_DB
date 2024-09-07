import React, {useState} from "react";

export const SearchForm = ({ onSearch}) => {

    const [userMovieName, setUserMovieName] = useState("");
    const handleInputChange = (e) => {
        setUserMovieName(e.target.value);
    }
    const handleFormSubmit = (e) =>{
        e.preventDefault()
        if (userMovieName.trim()) {
            onSearch(userMovieName);
        }
    }

    return(
        <div>
            <form onSubmit={handleFormSubmit}>
            <input type="text" value={userMovieName} onChange={handleInputChange} placeholder="search a movie..." />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}