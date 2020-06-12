import React, { useState, useCallback, useEffect } from 'react'
import './About.scss'
import FilterName from './Filters/FilterName';
import FilterYear from './Filters/FilterYear';
import Axios from 'axios';
import FiltredMovies from '../FiltredMovies/FiltredMovies';
import { getCountryCode } from '../../API/API';

const api_key = "b06d26f077f7cb6c5417fe25767b033e";

const About = () => {
    const [name, setName] = useState('');
    const [selectedYear, setSelectedYear] = useState(0);
    const [selectedMovies, setSelectedMovies] = useState([]);

    const handleChangeNameMovie = useCallback(e =>
        setName(e.target.value)
        , []);

    const handleChangeYear = useCallback((event, value) => {
        setSelectedYear(value);
    }, []);

    const getSelectedMovies = useCallback(({ name, year }) => {
        getCountryCode().then(code => {
            Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=ru-${code}&page=1&year=${year}`)
                .then(res => {
                    setSelectedMovies(res.data.results.filter(movie => movie.title.toLowerCase().includes(name.toLowerCase())))
                })
        })
    }, []);

    useEffect(() => {
        if (name || selectedYear) {
            getSelectedMovies({ name, year: selectedYear });
        }
        else if (!name && selectedMovies.length > 0) {
            setSelectedMovies([]);
        }
    }, [getSelectedMovies, selectedMovies.length, name, selectedYear]);

    return (
        <div className="about">
            <div className="about-title">
                <h1>Welcome.</h1>
                <p>Millions of movies, TV shows and people to discover. Explore now.</p>
            </div>
            <div className="about-search">
                <FilterName value={name} handleChange={handleChangeNameMovie} />
                <FilterYear value={selectedYear} handleChange={handleChangeYear} />
            </div>
            <div>
                <FiltredMovies movies={selectedMovies} />
            </div>
        </div>
    )
}

export default About