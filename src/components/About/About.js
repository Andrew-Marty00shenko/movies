import React, { useState, useCallback, useEffect } from 'react'
import './About.scss'
import Button from '@material-ui/core/Button'
import FilterName from './Filters/FilterName';
import FilterYear from './Filters/FilterYear';
import FilterGenreAndYear from './Filters/FilterGenreAndYear';
import Axios from 'axios';
import { NavLink, Route } from 'react-router-dom';
import FiltredMovies from '../FiltredMovies/FiltredMovies';

const api_key = "b06d26f077f7cb6c5417fe25767b033e";

const About = ({ genres }) => {
    const [name, setName] = useState('');
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedYearTo, setSelectedYearTo] = useState("2020-05-10");
    const [selectedYear, setSelectedYear] = useState("1960-05-10");
    const [selectedMovies, setSelectedMovies] = useState([]);

    const handleChangeNameMovie = useCallback(e =>
        setName(e.target.value)
        , []);

    const handleChangeYear = useCallback((event) => {
        setSelectedYear(event.target.value);
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

    const getSelectedMovies = useCallback(({ name, genre, year, yearTo }) => {
        Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=ru-US&page=1&with_genres=${genre.toString()}&primary_release_date.gte=${year}&primary_release_date.lte=${yearTo}`)
            .then(res => {
                setSelectedMovies(res.data.results.filter(movie => movie.title.toLowerCase().includes(name.toLowerCase())))
            })
    }, []);

    useEffect(() => {
        if (name || selectedGenres[0] || selectedYear || selectedYearTo) {
            getSelectedMovies({ name, genre: selectedGenres, year: selectedYear, yearTo: selectedYearTo });
        }
        else if ((!name || !selectedGenres) && selectedMovies.length > 0) {
            setSelectedMovies([]);
        }
    }, [getSelectedMovies, selectedMovies.length, name, selectedGenres, selectedYear, selectedYearTo]);

    console.log(selectedMovies);

    return (
        <div className="about">
            <div className="about-title">
                <h1>Welcome.</h1>
                <p>Millions of movies, TV shows and people to discover. Explore now.</p>
            </div>
            <div className="about-search">
                <FilterName value={name} handleChange={handleChangeNameMovie} />
                <FilterYear value={selectedYear} handleChange={handleChangeYear}
                    valueTo={selectedYearTo} handleChangeTo={handleChangeYearTo}
                />
            </div>
            <FilterGenreAndYear genres={genres} handleChange={handleChangeGenres} />
            <Button variant="contained" color="primary" style={{ fontSize: "13px" }}>
                <NavLink to="/recommended">Do you want choose a film</NavLink>
            </Button>
            <div>
                <Route path="/recommended" render={() => <FiltredMovies movies={selectedMovies} />} />
            </div>
        </div>
    )
}

export default About