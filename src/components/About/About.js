import React from 'react'
import './About.scss'
import FilterName from './Filters/FilterName';
import FilterYear from './Filters/FilterYear';
import FilterGenreAndYear from './Filters/FilterGenreAndYear';

const About = ({ selectMovies, moviesForFilt, genres, genresNames, yearFromFilter, yearFrom }) => {

    return (
        <div className="about">
            <div className="about-title">
                <h1>Welcome.</h1>
                <p>Millions of movies, TV shows and people to discover. Explore now.</p>
            </div>
            <div className="about-search">
                <FilterName movies={moviesForFilt} />
                <FilterYear movies={moviesForFilt} />
            </div>
            <FilterGenreAndYear yearFromFilter={yearFromFilter} selectMovies={selectMovies} yearFrom={yearFrom} genres={genres} genresNames={genresNames} />
        </div>
    )
}

export default About