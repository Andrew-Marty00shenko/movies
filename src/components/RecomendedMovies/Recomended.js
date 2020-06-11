import React, { useState, useCallback, useEffect } from 'react'
import './Recomended.scss'
import Axios from 'axios';
import FilterGenreAndYear from '../About/Filters/FilterGenreAndYear'
import FiltredMovies from '../FiltredMovies/FiltredMovies';
import { getCountryCode } from '../../API/API';

const api_key = "b06d26f077f7cb6c5417fe25767b033e";

const Recomended = ({ genres }) => {
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedYearFrom, setSelectedYearFrom] = useState("");
    const [selectedYearTo, setSelectedYearTo] = useState("");
    const [selectedMovies, setSelectedMovies] = useState([]);

    const handleChangeYearFrom = useCallback((event) => {
        setSelectedYearFrom(event.target.value);
    }, []);

    const handleChangeYearTo = useCallback((event) => {
        setSelectedYearTo(event.target.value);
    }, []);

    const handleChangeGenres = useCallback(event => {
        const value = event.target.name;
        if (selectedGenres.includes(value)) {
            setSelectedGenres(prevState => prevState.filter(genre => genre !== value));
        } else {
            setSelectedGenres(prevState => [value, ...prevState]);
        }
    }, [selectedGenres]);

    const getSelectedMovies = useCallback(({ genre, yearFrom, yearTo }) => {
        getCountryCode().then(code => {
            Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=${code.toLowerCase()}-${code}&page=1&with_genres=${genre}&primary_release_date.gte=${yearFrom}&primary_release_date.lte=${yearTo}`)
                .then(res => {
                    setSelectedMovies(res.data.results.slice(0, 1));
                });
        });
    }, []);

    useEffect(() => {
        if (selectedGenres[0] || selectedYearFrom || selectedYearTo) {
            getSelectedMovies({ genre: selectedGenres, yearFrom: selectedYearFrom, yearTo: selectedYearTo });
        }
        else if (!selectedGenres && selectedMovies.length > 0) {
            setSelectedMovies([]);
        }
    }, [getSelectedMovies, selectedMovies.length, selectedGenres, selectedYearFrom, selectedYearTo]);

    console.log(selectedMovies);

    return (
        <div className="recommended">
            <div className="recommended-title">
                <h1>Welcome.</h1>
                <p>Millions of movies, TV shows and people to discover. Explore now.</p>
            </div>
            <div className="recommended-search">
                <h2>Select your favorite genres and renge of years</h2>
                <FilterGenreAndYear genres={genres}
                    handleChangeYearFrom={handleChangeYearFrom}
                    handleChangeYearTo={handleChangeYearTo}
                    valueTo={selectedYearTo}
                    valueFrom={selectedYearFrom}
                    handleChangeGenres={handleChangeGenres}
                />
            </div>
            <FiltredMovies movies={selectedMovies} />
        </div>
    )
}

export default Recomended