import React from 'react'
import './About.scss'
import FilterName from './Filters/FilterName';
import FilterYear from './Filters/FilterYear';
import FilterGenre from './Filters/FilterGenre';

const About = ({ selectMovies, movies, genres, updateMovies }) => {

    return (
        <div className="about">
            <div className="about-title">
                <h1>Welcome.</h1>
                <p>Millions of movies, TV shows and people to discover. Explore now.</p>
            </div>
            <div className="about-search">
                <FilterName movies={movies} />
                <FilterYear movies={movies} />
            </div>
            <FilterGenre selectMovies={selectMovies} genres={genres} updateMovies={updateMovies} />
        </div>
    )
}

export default About