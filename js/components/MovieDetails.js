import React from "react";

export const MovieDetails = ({ movieData, isLoading, error }) => {
    if (isLoading) {
        return <h4>szukam...</h4>;
    }

    if (error) {
        return <h4>Błąd: {error}</h4>;
    }

    if (movieData) {
        return (
            <div>
                <h2>{movieData.Title}</h2>
                <p>Rok wydania: {movieData.Year}</p>
                <p>Reżyser: {movieData.Director}</p>
                <p>Opis: {movieData.Plot}</p>
            </div>
        );
    }

    return null;
};
