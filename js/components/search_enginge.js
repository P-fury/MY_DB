import React, {useState} from "react";

export const SearchEnginge = () => {

    const [userMovieName, setUserMovieName] = useState("");
    const handleInputChange = (e) => {
        setUserMovieName(e.target.value);
    }
    const handleFormSubmit = (e) =>{
        e.preventDefault()
        console.log(userMovieName);

    }

    return(
        <div>
            <form onSubmit={handleFormSubmit}>
            <input type="text" onChange={handleInputChange} placeholder="search a movie..." />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}