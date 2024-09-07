import React, { useState } from "react";
import { SearchForm } from "./SearchForm";
import { MovieDetails } from "./MovieDetails";

export const SearchEngine = () => {
    const [movieData, setMovieData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMovies = async (movieName) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=d0361b28`);
            const data = await response.json();

            if (data.Response === "False") {
                throw new Error("Film nie został znaleziony");
            }

            setMovieData(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <SearchForm onSearch={fetchMovies} />
            <MovieDetails movieData={movieData} isLoading={isLoading} error={error} />
        </div>
    );
};
